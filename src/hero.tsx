import * as React from 'react';
import glamorous from 'glamorous';
import {IProject} from './app';

const HeroOuter = glamorous.div(
    {
        backgroundColor: '#555',
        height: '500px',
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        userSelect: 'no-select'
    },
);

const HeroHolder = glamorous.div<{ numberOfHeros: number }>(
    {
        backgroundColor: '#555',
        height: '500px',
        display: 'flex',
    },
    p => ({
        width: `${p.numberOfHeros * 100}%`,
    })
);

const HeroImage = glamorous.div<{ image: string }>(
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
        backgroundImage: `url(${p.image})`
    })
);

interface Props {
    heros: IProject[];
    activeHero: IProject;
    selectHero: (hero: IProject) => void;
}

interface SwipeableState {
    start: number;
    x: number | null;
    y: number | null;
    swiping: boolean;
}

interface SwipePosition {
    deltaX: number;
    deltaY: number;
    absX: number;
    absY: number;
    velocity: number;
}

interface State {
    offsetX: number;
    dragging: boolean;
    elementWidth: number;
    shownIndex: number;
}

export class Hero extends React.Component<Props, State> {

    swipeable: SwipeableState;

    private static getPosition(e: TouchEvent & MouseEvent) {
        return 'touches' in e
            ? {x: e.touches[0].clientX, y: e.touches[0].clientY}
            : {x: e.clientX, y: e.clientY};
    }

    private static getMovingPosition(e: TouchEvent & MouseEvent) {
        return 'changedTouches' in e
            ? {x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY}
            : {x: e.clientX, y: e.clientY};
    }

    private static calculatePos(e: TouchEvent & MouseEvent, state: SwipeableState): SwipePosition {
        const {x, y} = Hero.getMovingPosition(e);

        const deltaX = state.x! - x;
        const deltaY = state.y! - y;

        const absX = Math.abs(deltaX);
        const absY = Math.abs(deltaY);

        const time = Date.now() - state.start;
        const velocity = Math.sqrt(absX * absX + absY * absY) / time;

        return {deltaX, deltaY, absX, absY, velocity};
    }

    private static getInitialState(): SwipeableState {
        return {
            x: null,
            y: null,
            swiping: false,
            start: 0,
        };
    }

    constructor(props: Props) {
        super(props);
        this.swipeable = Hero.getInitialState();
        this.state = {
            shownIndex: 0,
            offsetX: 0,
            dragging: false,
            elementWidth: 0
        };
    }

    private onTouchStart(e: TouchEvent & MouseEvent) {
        const {x, y} = Hero.getPosition(e);
        e.preventDefault();
        this.swipeable = {start: Date.now(), x, y, swiping: false};
    }

    private onTouchMove(e: TouchEvent & MouseEvent) {
        if (!this.swipeable.x || !this.swipeable.y || e.touches && e.touches.length > 1) {
            return;
        }

        const pos = Hero.calculatePos(e, this.swipeable);

        // if swipe is under delta and we have not already started to track a swipe: return
        let delta = 10;

        if (pos.absX < delta && pos.absY < delta && !this.swipeable.swiping) {
            return;
        }

        let resultX = this.state.elementWidth * this.state.shownIndex + pos.deltaX;
        if (resultX > 0 && resultX < this.state.elementWidth * (this.props.heros.length - 1)) {
            this.setState({dragging: true, offsetX: pos.deltaX});
        }
        this.swipeable.swiping = true;
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
        if (this.swipeable.swiping) {
            const pos = Hero.calculatePos(e, this.swipeable);
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
        if (newShownIndex > this.props.heros.length - 1) {
            newShownIndex = this.props.heros.length - 1;
        }

        this.setState({...this.state, offsetX: 0, dragging: false, shownIndex: newShownIndex});
        this.props.selectHero(this.props.heros[newShownIndex]);

        this.swipeable = Hero.getInitialState();
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

    render() {
        return (
            <HeroOuter
                innerRef={(d: HTMLDivElement) => this.setDivReference(d)}
            >
                <HeroHolder
                    style={{
                        transform: `translate(${-(this.state.elementWidth * this.state.shownIndex + this.state.offsetX)}px, 0)`,
                        transition: this.state.dragging ? '' : 'transform .5s'
                    }}
                    numberOfHeros={this.props.heros.length}
                    onTouchStart={this.onTouchStart.bind(this)}
                    onTouchMove={this.onTouchMove.bind(this)}
                    onTouchEnd={this.onTouchEnd.bind(this)}

                    onMouseDown={this.onMouseDown.bind(this)}
                >
                    {this.props.heros.map(h => (<HeroImage key={h.title} image={h.image}/>))}
                </HeroHolder>
                <HeroDots heros={this.props.heros} activeHero={this.props.activeHero} selectHero={(hero) => this.props.selectHero(hero)}/>
            </HeroOuter>
        );
    }
}

const HeroDotHolder = glamorous.div(
    {
        position: 'absolute',
        bottom: 30,
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    }
);

const HeroDot = glamorous.div<{ active: boolean }>(
    {
        borderRadius: '5px',
        marginLeft: '5px',
        marginRight: '5px',
        width: '10px',
        height: '10px',
    },
    p => ({
        backgroundColor: p.active ? '#fff' : '#222'
    })
);

let HeroDots: React.SFC<Props> = props => {
    return (
        <HeroDotHolder>
            {
                props.heros.map(hero => (
                    <HeroDot key={hero.title} active={hero === props.activeHero} onClick={() => props.selectHero(hero)}/>
                ))
            }
        </HeroDotHolder>
    );
};