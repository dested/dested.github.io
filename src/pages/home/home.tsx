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
import {media} from '../../utils/styleUtils';

interface Props {
}

interface State {
    showResume: boolean;
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
    [media.phone]: {
        gridTemplateColumns: '1fr'
    },
    [media.tablet]: {
        gridTemplateColumns: 'repeat(3, 1fr)'
    },
    [media.desktop]: {
        gridTemplateColumns: 'repeat(4, 1fr)'
    },
    [media.bigDesktop]: {
        gridTemplateColumns: 'repeat(5, 1fr)'
    }
});

const HeroImage = glamorous.div({
    [media.phone]: {
        height: '300px'
    },
    [media.tablet]: {
        height: '400px'
    },
    [media.desktop]: {
        height: '600px',
    },
    [media.bigDesktop]: {
        height: '600px',
    },
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
            showResume: window.location.host.includes('resume'),
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
                <Header/>
                <Intro/>
                <Section color={'#F1F1F1'} title={'Featured Projects'}>
                    <HeroImage>
                        <Swiper
                            height={'100%'}
                            items={this.state.projects}
                            activeItem={this.state.activeHero}
                            selectItem={hero => this.selectHero(hero as IProject)}
                        />
                    </HeroImage>
                    <HeroDescription
                        hero={this.state.activeHero}
                        selectKeyword={keyword => this.setState(prev => ({...prev, selectedToyKeyword: keyword}))}
                    />
                </Section>
                {this.state.showResume && (
                    <Section color={'#F1F1F1'} title={'Resume'}>
                        <Resume resume={this.state.resume}/>
                    </Section>
                )}
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

                <Github/>
                <Footer/>
            </Page>
        );
    }
}
