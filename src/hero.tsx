import * as React from 'react';
import glamorous from 'glamorous';
import {IProject} from './app';

const HeroOuter = glamorous.div(
    {
        backgroundColor: '#555',
        height: '500px',
        width: '100%',
        overflow: 'hidden',
        position: 'relative'
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

export let Hero: React.SFC<Props> = props => {
    return (
        <HeroOuter>
            <HeroHolder numberOfHeros={props.heros.length}>
                {
                    props.heros.map(h => (
                        <HeroImage image={h.image}/>
                    ))
                }
            </HeroHolder>
            <HeroDots heros={props.heros} activeHero={props.activeHero} selectHero={(hero) => props.selectHero(hero)}/>
        </HeroOuter>
    );
};

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
                    <HeroDot active={hero === props.activeHero} onClick={() => props.selectHero(hero)}/>
                ))
            }
        </HeroDotHolder>
    );
};