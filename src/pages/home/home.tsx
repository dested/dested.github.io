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
import {Section} from '../../components/section';
import {centerMargin} from '../../utils/styleUtils';

const Page = glamorous.div({
    marginTop: 'calc(4rem + 15px)',
    display: 'flex',
    flexDirection: 'column',
});

const Spacer = glamorous.div(
    {
        ...centerMargin,
        height: '2px',
        width: '10vw',
        background: '#5D5D5D',
        marginTop: '10px',
        marginBottom: '10px',
    }
);

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
                        height={'500px'}
                        items={this.state.projects}
                        activeItem={this.state.activeHero}
                        selectItem={hero => this.selectHero(hero as IProject)}
                    />
                    <HeroDescription hero={this.state.activeHero}/>
                </Section>
                <Section color={'#dfdfdf'} title={'Toys'}>
                    {this.state.toys.map((t, i) => (
                        <Fragment>
                            {i % 2 === 0 ? <ToyLeft toy={t}/> : <ToyRight toy={t}/>}
                            <Spacer/>
                        </Fragment>
                    ))}
                </Section>
                <Github/>

                <Footer/>
            </Page>
        );
    }
}
