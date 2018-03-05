import * as React from 'react';
import glamorous from 'glamorous';

import {connect, DispatchProp} from 'react-redux';

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
import {PageAction, PageActions} from '../../actions/page';
import {Store} from '../../reducers';
import {Dispatch} from 'redux';

interface Props extends DispatchProp<PageAction> {
    showResume: boolean;
    projects: IProject[];
    resume: IResumeItem[];
    toys: IToy[];
    selectedKeyword: string | null;
    setSelectedKeyword: (keyword: string | null) => void;
}

interface State {
    activeHero: IProject;
}

const Holder = glamorous.div({
    marginTop: 'calc(4rem)',
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
        height: '600px'
    },
    [media.bigDesktop]: {
        height: '600px'
    }
});

class Page extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            activeHero: props.projects[0]
        };
    }

    private selectHero(hero: IProject): void {
        this.setState(prevState => {
            return {...prevState, activeHero: hero};
        });
    }

    render() {
        return (
            <Holder onMouseDown={() => this.props.selectedKeyword != null && this.props.setSelectedKeyword(null)}>
                <Header />
                {this.props.showResume && <Intro />}
                <Section color={'#F1F1F1'} title={'Featured Projects'}>
                    <HeroImage>
                        <Swiper
                            height={'100%'}
                            items={this.props.projects}
                            activeItem={this.state.activeHero}
                            selectItem={hero => this.selectHero(hero as IProject)}
                        />
                    </HeroImage>
                    <HeroDescription hero={this.state.activeHero} />
                </Section>
                {this.props.showResume && (
                    <Section color={'#F1F1F1'} title={'Resume'}>
                        <Resume resume={this.props.resume} />
                    </Section>
                )}
                <Section color={'#dfdfdf'} title={'Toys'}>
                    <ToyHolder>{this.props.toys.map(toy => <Toy key={toy.title} toy={toy} />)}</ToyHolder>
                </Section>

                <Github />
                <Footer />
            </Holder>
        );
    }
}

export let Home = connect(
    (state: Store) => {
        return {
            showResume: state.pageState.showResume,
            projects: state.pageState.projects,
            resume: state.pageState.resume,
            toys: state.pageState.toys,
            selectedKeyword: state.pageState.selectedKeyword
        };
    },
    (dispatch: Dispatch<PageAction>) => {
        return {
            setSelectedKeyword: (keyword: string | null) => {
                dispatch(PageActions.setSelectedKeyword(keyword));
            }
        };
    }
)(Page);
