import * as React from 'react';
// import {ProjectComponent} from "./project";
import glamorous from 'glamorous';
import {Fragment} from 'react';
import {Swiper} from '../../components/swiper';
import {Header} from './components/header';
import {HeroDescription} from './components/heroDescription';
import {ToyLeft, ToyRight} from './components/toy';
import {IProject} from '../../models/project';
import {url} from '../../utils/styleUtils';
import projectData from '../../data/projects.json';
import toyData from '../../data/toys.json';
import {Intro} from './components/intro';

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
        this.setState((prevState) => {
            return {...prevState, activeHero: hero};
        });
    }

    render() {
        return (
            <Fragment>
                <Header/>
                <Body>
                <Intro/>
                <Swiper
                    height={'500px'}
                    items={this.state.projects}
                    activeItem={this.state.activeHero}
                    selectItem={(hero) => this.selectHero(hero as IProject)}
                />
                <HeroDescription hero={this.state.activeHero}/>
                {this.state.toys.map((t, i) => (i % 2 === 0 ? <ToyLeft toy={t}/> : <ToyRight toy={t}/>))}
                </Body>
            </Fragment>

        );
    }
}