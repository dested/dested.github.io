import * as React from 'react';
import glamorous from 'glamorous';

import projectData from '../../data/projects.json';
import toyData from '../../data/toys.json';
import resumeData from '../../data/resume.json';

import {IProject, IResumeItem, IToy} from '../../models';
import {Swiper} from '../../components/swiper';
import {Header} from './components/header';
import {HeroDescription} from './components/heroDescription';
import {Intro} from './components/intro';
import {Github} from './components/github';
import {Footer} from './components/footer';
import {Section} from '../../components/section';
import {Toy} from './components/toy';
import {Resume} from './components/resume';

interface Props {}

interface State {
    projects: IProject[];
    resume: IResumeItem[];
    toys: IToy[];
    activeHero: IProject;
    selectedToyKeyword: string | null;
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
    flexDirection: 'row'
});

export class Home extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        let projects = projectData;
        let resume = resumeData;
        let toys = toyData.sort(() => {
            return Math.random() * 100 - 50;
        });

        this.state = {
            projects,
            toys,
            resume,
            activeHero: projects[0],
            selectedToyKeyword: null
        };
    }

    private selectHero(hero: IProject): void {
        this.setState(prevState => {
            return {...prevState, activeHero: hero};
        });
    }

    render() {
        return (
            <Page
                onMouseDown={() =>
                    this.state.selectedToyKeyword != null &&
                    this.setState(prev => ({...prev, selectedToyKeyword: null}))
                }
            >
                <Header />
                <Intro />
                <Section color={'#F1F1F1'} title={'Featured Projects'}>
                    <Swiper
                        height={'600px'}
                        items={this.state.projects}
                        activeItem={this.state.activeHero}
                        selectItem={hero => this.selectHero(hero as IProject)}
                    />
                    <HeroDescription
                        hero={this.state.activeHero}
                        selectKeyword={keyword => this.setState(prev => ({...prev, selectedToyKeyword: keyword}))}
                    />
                </Section>
                <Section color={'#dfdfdf'} title={'Toys'}>
                    <ToyHolder>
                        {this.state.toys.map(toy => (
                            <Toy
                                key={toy.title}
                                toy={toy}
                                selectKeyword={keyword =>
                                    this.setState(prev => ({...prev, selectedToyKeyword: keyword}))
                                }
                                selectedKeyword={this.state.selectedToyKeyword}
                            />
                        ))}
                    </ToyHolder>
                </Section>
                <Section color={'#F1F1F1'} title={'Resume'}>
                    <Resume resume={this.state.resume} />
                </Section>
                <Github />
                <Footer />
            </Page>
        );
    }
}
