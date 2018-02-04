import * as React from 'react';
import {Fragment} from 'react';
import glamorous from 'glamorous';

import projectData from '../../data/projects.json';
import toyData from '../../data/toys.json';

import {IProject} from '../../models/project';
import {Swiper} from '../../components/swiper';
import {Header} from './components/header';
import {HeroDescription} from './components/heroDescription';
import {ToyLeft, ToyRight} from './components/toy';
import {Intro} from './components/intro';
import {Github} from './components/github';
import {Footer} from './components/footer';

const Holder = glamorous.div({
    marginTop: 'calc(4rem + 15px)',
    marginBottom: '15px',

    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '1570px'
});

const SectionTitle = glamorous.div({
    padding: '10px',
    textAlign: 'center',
    color: '#333',
    fontSize: '4rem'
});

interface Props {}

interface State {
    projects: IProject[];
    toys: IProject[];
    activeHero: IProject;
}

export class Home extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        let projects = projectData;
        let toys = toyData.sort(() => {
            return Math.random() * 100 - 50;
        });

        this.state = {
            projects: projects,
            toys: toys,
            activeHero: projects[0]
        };
    }

    private selectHero(hero: IProject): void {
        this.setState(prevState => {
            return {...prevState, activeHero: hero};
        });
    }

    render() {
        return (
            <Fragment>
                <Header />
                <Holder>
                    <Intro />
                    <SectionTitle>Featured Projects</SectionTitle>
                    <Swiper
                        height={'500px'}
                        items={this.state.projects}
                        activeItem={this.state.activeHero}
                        selectItem={hero => this.selectHero(hero as IProject)}
                    />
                    <HeroDescription hero={this.state.activeHero} />
                    <SectionTitle>Toys</SectionTitle>
                    {this.state.toys.map((t, i) => (i % 2 === 0 ? <ToyLeft toy={t} /> : <ToyRight toy={t} />))}
                    <Github />
                </Holder>
                <Footer />
            </Fragment>
        );
    }
}
