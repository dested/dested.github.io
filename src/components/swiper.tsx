import glamorous from 'glamorous';
import * as React from 'react';
import {media, url} from '../utils/styleUtils';
import {SwiperDots} from './swiperDots';

export interface SwiperItem {
  image: string;
}

interface Props {
  height: string;
  items: SwiperItem[];
  activeItem: SwiperItem;
  selectItem: (item: SwiperItem) => void;
}

interface State {
  offsetX: number;
  dragging: boolean;
  elementWidth: number;
  didTouch: boolean;
  shownIndex: number;
  swipeable: SwipeableState;
}

interface SwipeableState {
  start: number;
  x: number | null;
  swiping: boolean;
}

const SwiperOuter = glamorous.div<{height: string}>(
  {
    backgroundColor: '#555',
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    userSelect: 'none',
  },
  p => ({
    height: p.height,
  })
);

const SwiperHolder = glamorous.div<{numberOfItems: number}>(
  {
    backgroundColor: '#555',
    height: '100%',
    display: 'flex',
  },
  p => ({
    width: `${p.numberOfItems * 100}%`,
  })
);

export const SwiperImage = glamorous.img({
  width: '30%',
  height: '100%',

  [media.phone]: {
    width: '100%',
    marginBottom: '1rem',
  },
});

export class Swiper extends React.Component<Props, State> {
  private autoInterval?: number;

  private static getPosition(e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) {
    return 'touches' in e ? {x: e.touches[0].clientX} : {x: e.clientX};
  }

  private static getMovingPosition(e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) {
    return 'changedTouches' in e ? {x: e.changedTouches[0].clientX} : {x: e.clientX};
  }

  private static calculatePos(
    e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>,
    state: SwipeableState
  ): {deltaX: number; absX: number; velocity: number} {
    const {x} = Swiper.getMovingPosition(e);

    const deltaX = state.x! - x;

    const absX = Math.abs(deltaX);

    const time = Date.now() - state.start;
    const velocity = Math.sqrt(absX * absX) / time;

    return {deltaX, absX, velocity};
  }

  constructor(props: Props) {
    super(props);

    this.state = {
      shownIndex: 0,
      offsetX: 0,
      dragging: false,
      didTouch: false,
      elementWidth: 0,
      swipeable: {x: null, swiping: false, start: 0},
    };
  }

  private onMouseDown = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
    document.addEventListener('mousemove', this.onMouseMove as any, {passive: false});
    document.addEventListener('mouseup', this.onMouseUp as any, {passive: false});
    this.onTouchStart(e);
  };

  private onMouseMove = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
    this.onTouchMove(e);
  };

  private onMouseUp = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
    document.removeEventListener('mousemove', this.onMouseMove as any);
    document.removeEventListener('mouseup', this.onMouseUp as any);
    this.onTouchEnd(e);
  };

  private onTouchStart = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
    const {x} = Swiper.getPosition(e);
    e.preventDefault();
    this.setState(prev => ({...prev, didTouch: true, swipeable: {start: Date.now(), x, swiping: false}}));
  };

  private onTouchMove = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
    if (!this.state.swipeable.x || ('touches' in e && e.touches.length > 1)) {
      return;
    }

    const pos = Swiper.calculatePos(e, this.state.swipeable);

    const resultX = this.state.elementWidth * this.state.shownIndex + pos.deltaX;
    const buffer = this.state.elementWidth / 2;

    const upperEdge = this.state.elementWidth * (this.props.items.length - 1);
    if (resultX > -buffer && resultX < upperEdge + buffer) {
      if (resultX < 0) {
        pos.deltaX /= 4; // adds a spring at the beginning
      }
      if (resultX > upperEdge) {
        pos.deltaX /= 4; // adds a spring at the end
      }
      this.setState({
        ...this.state,
        didTouch: true,
        dragging: true,
        offsetX: pos.deltaX,
        swipeable: {...this.state.swipeable, swiping: true},
      });
    } else {
      this.setState({...this.state, didTouch: true, swipeable: {...this.state.swipeable, swiping: true}});
    }
    e.stopPropagation();
    e.preventDefault();
  };

  private onTouchEnd = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
    let newShownIndex = this.state.shownIndex;
    if (this.state.swipeable.swiping) {
      const pos = Swiper.calculatePos(e, this.state.swipeable);
      e.stopPropagation();

      const flickThreshold = 0.6;
      const isFlick = pos.velocity > flickThreshold;

      if (isFlick) {
        if (pos.deltaX > 0) {
          newShownIndex = this.state.shownIndex + 1;
        } else {
          newShownIndex = this.state.shownIndex - 1;
        }
      } else {
        const threshold = 100;
        if (pos.deltaX > threshold) {
          newShownIndex = this.state.shownIndex + 1;
        } else if (pos.deltaX < -threshold) {
          newShownIndex = this.state.shownIndex - 1;
        }
      }
    }
    if (newShownIndex < 0) {
      newShownIndex = 0;
    }
    if (newShownIndex > this.props.items.length - 1) {
      newShownIndex = this.props.items.length - 1;
    }

    this.setState(prev => ({
      ...prev,
      offsetX: 0,
      dragging: false,
      shownIndex: newShownIndex,
      swipeable: {x: null, swiping: false, start: 0},
    }));
    this.props.selectItem(this.props.items[newShownIndex]);
  };

  componentWillReceiveProps(nextProps: Readonly<Props>): void {
    if (nextProps.activeItem !== this.props.activeItem) {
      const index = this.props.items.indexOf(nextProps.activeItem);
      this.setState(prev => ({...prev, shownIndex: index}));
    }
  }

  private setDivReference(d: HTMLDivElement): void {
    if (!d) {
      return;
    }

    const elementWidth = d.getBoundingClientRect().width || d.offsetWidth || 0;
    if (elementWidth !== this.state.elementWidth) {
      this.setState({elementWidth});
    }
  }

  componentWillUnmount(): void {
    // tslint:disable-next-line
    document.removeEventListener('mousemove', this.onMouseMove as any);
    // tslint:disable-next-line
    document.removeEventListener('mouseup', this.onMouseUp as any);
    window.clearTimeout(this.autoInterval!);
  }

  componentDidMount(): void {
    this.autoInterval = window.setInterval(() => {
      if (this.state.didTouch) {
        this.setState(prev => ({...prev, didTouch: false}));
      } else {
        this.setState(prev => {
          const shownIndex = (prev.shownIndex + 1) % this.props.items.length;
          this.props.selectItem(this.props.items[shownIndex]);
          return {...prev, shownIndex};
        });
      }
    }, 13000);
  }

  render() {
    return (
      <SwiperOuter height={this.props.height} innerRef={(d: HTMLDivElement) => this.setDivReference(d)}>
        <SwiperHolder
          style={{
            transform: `translate(${-(this.state.elementWidth * this.state.shownIndex + this.state.offsetX)}px, 0)`,
            transition: this.state.dragging ? '' : 'transform .5s',
          }}
          numberOfItems={this.props.items.length}
          onTouchStart={this.onTouchStart}
          onTouchMove={this.onTouchMove}
          onTouchEnd={this.onTouchEnd}
          onMouseDown={this.onMouseDown}
        >
          {this.props.items.map(h => (
            <SwiperImage key={h.image} src={h.image} />
          ))}
        </SwiperHolder>
        <SwiperDots
          items={this.props.items}
          activeItem={this.props.activeItem}
          selectItem={item => this.props.selectItem(item)}
        />
      </SwiperOuter>
    );
  }
}
