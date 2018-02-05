import * as React from 'react';
import {Fragment} from 'react';
import glamorous from 'glamorous';

import projectData from '../../data/projects.json';
import toyData from '../../data/toys.json';

import {IProject} from '../../models/project';
import {Swiper} from '../../components/swiper';
import {Header} from './components/header';
import {HeroDescription} from './components/heroDescription';
import {Intro} from './components/intro';
import {Github} from './components/github';
import {Footer} from './components/footer';
import {Section} from '../../components/section';
import {centerMargin} from '../../utils/styleUtils';
import {Toy} from './components/toy';

interface Props {
}

interface State {
    projects: IProject[];
    toys: IProject[];
    activeHero: IProject;
}

const Page = glamorous.div({
    marginTop: 'calc(4rem + 15px)',
    display: 'flex',
    flexDirection: 'column'
});

const ToyHolder = glamorous.div({
    display: 'grid',
    justifyContent: 'space-between',
    gridTemplateColumns: 'repeat(auto-fill,300px)',
    flexDirection: 'row',
});

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
            <Page>
                <Header/>
                <Intro/>
                <Section color={'#F1F1F1'} title={'Featured Projects'}>
                    <Swiper
                        height={'600px'}
                        items={this.state.projects}
                        activeItem={this.state.activeHero}
                        selectItem={hero => this.selectHero(hero as IProject)}
                    />
                    <HeroDescription hero={this.state.activeHero}/>
                </Section>
                <Section color={'#dfdfdf'} title={'Toys'}>
                    <ToyHolder>{this.state.toys.map(toy => <Toy key={toy.title} toy={toy}/>)}</ToyHolder>
                </Section>
                <Github/>
                <Footer/>
            </Page>
        );
    }
}
