import glamorous from 'glamorous';
import * as React from 'react';
import {url} from '../utils/styleUtils';

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
        userSelect: 'no-select'
    },
    p => ({
        height: p.height
    })
);

const SwiperHolder = glamorous.div<{numberOfItems: number}>(
    {
        backgroundColor: '#555',
        height: '100%',
        display: 'flex'
    },
    p => ({
        width: `${p.numberOfItems * 100}%`
    })
);

const SwiperImage = glamorous.div<{image: string}>(
    {
        width: '100%',
        height: '100%',
        top: 0,
        position: 'relative',
        overflow: 'hidden',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    p => ({
        backgroundImage: url(p.image)
    })
);

export class Swiper extends React.Component<Props, State> {
    private autoInterval?: number;

    private static getPosition(e: TouchEvent & MouseEvent) {
        return 'touches' in e ? {x: e.touches[0].clientX} : {x: e.clientX};
    }

    private static getMovingPosition(e: TouchEvent & MouseEvent) {
        return 'changedTouches' in e ? {x: e.changedTouches[0].clientX} : {x: e.clientX};
    }

    private static calculatePos(
        e: TouchEvent & MouseEvent,
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
            swipeable: {x: null, swiping: false, start: 0}
        };
    }

    private onTouchStart(e: TouchEvent & MouseEvent) {
        const {x} = Swiper.getPosition(e);
        e.preventDefault();
        this.setState(prev => ({...prev, didTouch: true, swipeable: {start: Date.now(), x, swiping: false}}));
    }

    private onTouchMove(e: TouchEvent & MouseEvent) {
        if (!this.state.swipeable.x || (e.touches && e.touches.length > 1)) {
            return;
        }

        const pos = Swiper.calculatePos(e, this.state.swipeable);

        let resultX = this.state.elementWidth * this.state.shownIndex + pos.deltaX;
        let buffer = this.state.elementWidth / 2;

        let upperEdge = this.state.elementWidth * (this.props.items.length - 1);
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
                swipeable: {...this.state.swipeable, swiping: true}
            });
        } else {
            this.setState({...this.state, didTouch: true, swipeable: {...this.state.swipeable, swiping: true}});
        }
        e.stopPropagation();
        e.preventDefault();
    }

    private onMouseDown(e: TouchEvent & MouseEvent) {
        document.addEventListener('mousemove', this.onMouseMove.bind(this));
        document.addEventListener('mouseup', this.onMouseUp.bind(this));
        this.onTouchStart(e);
    }

    private onMouseMove(e: TouchEvent & MouseEvent) {
        this.onTouchMove(e);
    }

    private onMouseUp(e: TouchEvent & MouseEvent) {
        document.removeEventListener('mousemove', this.onMouseMove.bind(this));
        document.removeEventListener('mouseup', this.onMouseUp.bind(this));
        this.onTouchEnd(e);
    }

    private onTouchEnd(e: TouchEvent & MouseEvent) {
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
            swipeable: {x: null, swiping: false, start: 0}
        }));
        this.props.selectItem(this.props.items[newShownIndex]);
    }

    private setDivReference(d: HTMLDivElement): void {
        if (!d) {
            return;
        }

        let elementWidth = d.getBoundingClientRect().width || d.offsetWidth || 0;
        if (elementWidth !== this.state.elementWidth) {
            this.setState({elementWidth: elementWidth});
        }
    }

    componentWillUnmount(): void {
        document.removeEventListener('mousemove', this.onMouseMove.bind(this));
        document.removeEventListener('mouseup', this.onMouseUp.bind(this));
        window.clearTimeout(this.autoInterval!);
    }

    componentDidMount(): void {
        this.autoInterval = window.setInterval(() => {
            if (this.state.didTouch) {
                this.setState(prev => ({...prev, didTouch: false}));
            } else {
                this.setState(prev => {
                    let shownIndex = (prev.shownIndex + 1) % this.props.items.length;
                    this.props.selectItem(this.props.items[shownIndex]);
                    return {...prev, shownIndex: shownIndex};
                });
            }
        }, 5000);
    }

    render() {
        return (
            <SwiperOuter height={this.props.height} innerRef={(d: HTMLDivElement) => this.setDivReference(d)}>
                <SwiperHolder
                    style={{
                        transform: `translate(${-(
                            this.state.elementWidth * this.state.shownIndex +
                            this.state.offsetX
                        )}px, 0)`,
                        transition: this.state.dragging ? '' : 'transform .5s'
                    }}
                    numberOfItems={this.props.items.length}
                    onTouchStart={this.onTouchStart.bind(this)}
                    onTouchMove={this.onTouchMove.bind(this)}
                    onTouchEnd={this.onTouchEnd.bind(this)}
                    onMouseDown={this.onMouseDown.bind(this)}
                >
                    {this.props.items.map(h => <SwiperImage key={h.image} image={h.image} />)}
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

const SwiperDotHolder = glamorous.div({
    position: 'absolute',
    bottom: 30,
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
});

const SwiperDot = glamorous.div<{active: boolean}>(
    {
        borderRadius: '5px',
        marginLeft: '5px',
        marginRight: '5px',
        width: '10px',
        height: '10px',
        transition: 'background-color .5s'
    },
    p => ({
        backgroundColor: p.active ? '#fff' : '#222'
    })
);

interface DotsProps {
    items: SwiperItem[];
    activeItem: SwiperItem;
    selectItem: (item: SwiperItem) => void;
}

let SwiperDots: React.SFC<DotsProps> = props => {
    return (
        <SwiperDotHolder>
            {props.items.map(item => (
                <SwiperDot key={item.image} active={item === props.activeItem} onClick={() => props.selectItem(item)} />
            ))}
        </SwiperDotHolder>
    );
};
