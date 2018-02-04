import * as React from 'react';
// import {ProjectComponent} from "./project";
import {Header} from './header';
import glamorous from 'glamorous';
import {Fragment} from 'react';
import {Hero} from './hero';

export interface IProject {
    url: string;
    image: string;
    title: string;
    github?: string;
    description: string;
    keywords: string[];
    isToy: boolean;
}

const Body = glamorous.div({
    backgroundColor: '#ccc',
    marginTop: '4rem',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '1570px'
});

interface Props {

}

interface State {
    projects: IProject[];
    toys: IProject[];
    activeHero: IProject;
}

export class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        let projects = [
            {
                url: 'https://oursonic.org',
                image: 'assets/project-images/sonic.png',
                title: 'Our Sonic',
                github: 'https://github.com/OurSonic/OurSonicTyped',
                description: 'A hand built engine for simulating the original Sonic the Hedgehog games for Sega Genesis. Pure typescript implementation.',
                keywords: ['javascript', 'typescript', 'angular 2', 'aws', 'lambda', 'canvas'],
                isToy: false
            },
            {
                url: 'http://styr.com',
                image: 'assets/project-images/styr.png',
                title: 'STYR Labs',
                description: 'A typescript based native Android and iOS app with a .net api.',
                keywords: ['typescript', 'tabris.js', 'aws', '.net', 'angular.js'],
                isToy: false
            },
            {
                url: 'https://itunes.apple.com/us/app/penguin-shuffle-uncover-path/id909070508',
                image: 'assets/project-images/penguin-shuffle-2.png',
                title: 'Penguin Shuffle!',
                github: 'https://github.com/Penguio-Framework/PenguinShuffle',
                description: 'A fun puzzle game for Android and IOS, built in C# using Xamarin, mono-game, and a custom engine.',
                keywords: ['c#', 'xamarin', 'android', 'ios', 'penguio'],
                isToy: false
            },
            {
                url: 'http://socialwargames.com',
                image: 'assets/project-images/socialwargames.png',
                title: 'Social War Games',
                github: 'https://github.com/dested/Social-War-Games',
                description: 'An online Social Experiment',
                keywords: ['javascript', 'typescript', 'mmo', 'canvas'],
                isToy: false
            },
            {
                url: 'https://github.com/Shuffle-Game/AnyCardGame',
                image: 'assets/project-images/acg.png',
                title: 'Any Card Game',
                github: 'https://github.com/Shuffle-Game/AnyCardGame',
                description: 'A game editor built to allow developers to create their own custom card games, have them hosted, any playable over the internet. Development is ongoing.',
                keywords: ['javascript', 'typescript', 'angular 2', 'node.js'],
                isToy: false
            },
        ];
        let toys = [
            {
                url: 'projects/BingoBlockParty/index.html',
                image: 'assets/project-images/bingo.png',
                title: 'Bingo Block Party',
                github: 'https://github.com/Penguio-Framework/BingoBlockParty',
                description: 'A physics based multiplayer ball and bingo game. This product compiles to the Web, Android, and IOS using a custom engine. Still in development.',
                keywords: ['javascript', 'c#', 'canvas', 'xamarin', 'android', 'ios'],
                isToy: true
            },
            {
                url: 'projects/hex/index.html',
                image: 'assets/project-images/hexmaze.png',
                title: 'Multiplayer Hexagon Maze',
                github: 'https://github.com/dested/Hexmaze',
                description: 'A party based maze game with a creative level layout. Maze layout done by <a href="http://www.dllu.net/">Daniel Lu</a>. Multiplayer facilitated through socket.io.',
                keywords: ['javascript', 'c#', 'network-multiplayer', 'canvas'],
                isToy: true
            },
            {
                url: 'https://github.com/Penguio-Framework',
                image: 'assets/project-images/penguio.png',
                title: 'Penguio Framework',
                github: 'https://github.com/Penguio-Framework',
                description: 'A Xamarin/Monogame based framework and CLI tool that allows for deploying a common codebase to Android, iOS, WindowsPhone, Windows8, Windows Desktop, and HTML5. ',
                keywords: ['c#', 'Xamarin', 'monogame', 'canvas'],
                isToy: true
            }, {
                url: 'projects/wire/index.html',
                image: 'assets/project-images/wire-world.png',
                title: 'Wire World in Javascript',
                github: 'https://github.com/dested/WireWorld',
                description: 'An implementation of the <a href="http://www.quinapalus.com/wires11.html">Wire World</a> cellular automaton computer in javacript.',
                keywords: ['javascript', 'typescript', 'canvas'],
                isToy: true
            },
            {
                url: 'http://runrunjump.com',
                image: 'assets/project-images/runrunjump.png',
                title: 'Run Run Jump',
                github: 'https://github.com/dested/RunRunJump',
                description: 'An idea for a 2d platformer with full level and physics editing capabilities.',
                keywords: ['javascript', 'performance', 'canvas'],
                isToy: true
            },
            {
                url: 'https://www.youtube.com/watch?v=RF7PwocNlCw',
                image: 'assets/project-images/mario.png',
                title: 'Mario AI',
                github: 'https://github.com/dested/MarioAi',
                description: 'My AI agent for the 2009 <a href="http://julian.togelius.com/mariocompetition2009/">MarioAI</a> competition. Uses A* to pathfind through the level.',
                keywords: ['java', 'performance'],
                isToy: true
            },
            {
                url: 'projects/Triangles/index.html',
                image: 'assets/project-images/triangles.png',
                title: 'Triangles Puzzle Game',
                github: 'https://github.com/dested/Triangles-',
                description: 'A rough implementation of an interesting puzzle game concept.',
                keywords: ['javascript', 'c#', 'canvas'],
                isToy: true
            },
            {
                url: 'projects/polygroup/index.html',
                image: 'assets/project-images/poly-group.png',
                title: 'Server Clustering Algorithm',
                description: 'An implementation of how user clustering could work for a Massive Multiplayer game.',
                keywords: ['javascript', 'performance', 'canvas'],
                isToy: true
            },
            {
                url: 'projects/hex-project/index.html',
                image: 'assets/project-images/hex-project.png',
                title: 'Hex Game Project',
                github: 'https://github.com/dested/TurnRPG',
                description: 'A rough implementation of an interesting puzzle game concept.',
                keywords: ['javascript', 'c#', 'canvas'],
                isToy: true
            },
            {
                url: 'projects/profiler/index.html',
                image: 'assets/project-images/profiler.png',
                title: 'Javascript Profiler',
                github: 'https://github.com/dested/jsprofiler',
                description: 'A javascript profiler that supports line by line statistical analysis. Uses Istanbul and esprima for code instrumentation.',
                keywords: ['javascript', 'performance', 'code-utility'],
                isToy: true
            },
            {
                url: 'projects/snake/index.html',
                image: 'assets/project-images/snake.png',
                title: 'Snake A*',
                github: 'https://github.com/dested/SnakeAStar',
                description: 'A solver for snake using the A* path finding algorithm.',
                keywords: ['javascript', 'c#', 'canvas', 'weekend-project'],
                isToy: true
            }, {
                url: 'http://aiplays.com/tetris',
                image: 'assets/project-images/aiplaystetris.png',
                title: 'AI Plays: TETRIS',
                github: 'https://github.com/dested/aiplays',
                description: 'A scripting engine that allows developers to write an AI for tetris.',
                keywords: ['javascript', 'typescript', 'canvas', 'code-utility'],
                isToy: true
            },
            {
                url: 'projects/color-sorter/index.html',
                image: 'assets/project-images/color-sorter.png',
                title: 'Color Sorter',
                github: 'https://gist.github.com/dested/7309dc3898485f27f611440002ac75a8',
                description: 'Sorts a 2d array of random colors by Hue and Light',
                keywords: ['javascript', 'typescript', 'canvas', 'toy'],
                isToy: true
            },

            {
                url: 'https://twitter.com/TwtPlayTetris',
                image: 'assets/project-images/tpt-2.png',
                title: 'Twitter Plays Tetris',
                github: 'https://github.com/dested/twitter-plays-tetris',
                description: 'Community driven Tetris game played on Twitter',
                keywords: ['javascript', 'typescript', 'social-experiment', 'weekend', 'toy'],
                isToy: true
            },

            {
                url: 'https://github.com/dested/Peer-Test',
                image: 'assets/project-images/webrtc-test.png',
                title: 'Peer to Peer Test',
                github: 'https://github.com/dested/Peer-Test',
                description: 'A test application to determine the viability of web-rtc for large scale mostly serverless games.',
                keywords: ['typescript', 'performance', 'code-utility', 'node.js', 'web-rtc'],
                isToy: true
            },
            {
                url: 'https://github.com/dested/MultiplayerPathFindingEngine',
                image: 'assets/project-images/multiplayer-engine.png',
                title: 'Multiplayer Pathfinding Engine',
                github: 'https://github.com/dested/MultiplayerPathFindingEngine',
                description: 'A test to build a horizontally scalable mmo engine for the web.',
                keywords: ['c#', 'scalable', 'node.js', 'websockets'],
                isToy: true
            },
            {
                url: 'projects/bezier/index.html',
                image: 'assets/project-images/bezier.png',
                title: 'Cubic Bezier Curve',
                github: 'https://gist.github.com/dested/83adfc1afc684a7ed65b86ea01259661',
                description: 'A very simple Cubic Bezier Curve implementation in javascript',
                keywords: ['javascript', 'canvas'],
                isToy: true
            },
        ].sort(() => {
            return Math.random() * 100 - 50;
        });

        this.state = {
            projects: projects,
            toys: toys,
            activeHero: projects[0]
        };
    }

    private selectHero(hero: IProject): void {
        this.setState((prevState) => {
            return {...prevState, activeHero: hero};
        });
    }

    render() {
        return (
            <Fragment>
                <Header/>
                <Body>
                <Hero
                    heros={this.state.projects}
                    activeHero={this.state.activeHero}
                    selectHero={(hero) => this.selectHero(hero)}
                />
                {
                    this.state.activeHero && (
                        <Fragment>
                            <div>{this.state.activeHero.title}</div>
                            <div>{this.state.activeHero.description}</div>
                        </Fragment>
                    )
                }
                </Body>
            </Fragment>

        );
    }
}