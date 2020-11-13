import glamorous from 'glamorous';
import * as React from 'react';

import {connect, DispatchProp} from 'react-redux';

import {Dispatch} from 'redux';
import {PageAction, PageActions} from '../../actions/page';
import {Section} from '../../components/section';
import {Swiper, SwiperImage} from '../../components/swiper';
import {IProject, IResumeItem, IToy} from '../../models';
import {Store} from '../../reducers';
import {media} from '../../utils/styleUtils';
import {Footer} from './components/footer';
import {Github} from './components/github';
import {Header} from './components/header';
import {HeroDescription} from './components/heroDescription';
import {Intro} from './components/intro';
import {Resume} from './components/resume';
import {Toy} from './components/toy';

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
  flexDirection: 'column',
});

const ToyHolder = glamorous.div({
  display: 'grid',
  justifyContent: 'space-between',
  [media.phone]: {
    gridTemplateColumns: '1fr',
  },
  [media.tablet]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [media.desktop]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  [media.bigDesktop]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
});

const HeroImage = glamorous.div({
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  marginBottom: '40px',
  [media.phone]: {
    flexDirection: 'column',
    marginLeft: '1rem',
    marginRight: '1rem',
  },
});

class Page extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      activeHero: props.projects[0],
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
        <Section color={'#F1F1F1'} title={'Featured Apps'}>
          {this.props.projects
            .filter(a => a.type === 'app')
            .map(h => (
              <HeroImage key={h.title}>
                <SwiperImage key={h.image} src={h.image} />
                <HeroDescription hero={h} />
              </HeroImage>
            ))}
        </Section>
        <Section color={'#F1F1F1'} title={'Featured Games'}>
          {this.props.projects
            .filter(a => a.type === 'game')
            .map(h => (
              <HeroImage key={h.title}>
                <SwiperImage key={h.image} src={h.image} />
                <HeroDescription hero={h} />
              </HeroImage>
            ))}
        </Section>
        {this.props.showResume && (
          <Section color={'#F1F1F1'} title={'Resume'}>
            <Resume resume={this.props.resume} />
          </Section>
        )}
        <Section color={'#dfdfdf'} title={'Toys'}>
          <ToyHolder>
            {this.props.toys.map(toy => (
              <Toy key={toy.title} toy={toy} />
            ))}
          </ToyHolder>
        </Section>

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
      selectedKeyword: state.pageState.selectedKeyword,
    };
  },
  (dispatch: Dispatch<PageAction>) => {
    return {
      setSelectedKeyword: (keyword: string | null) => {
        dispatch(PageActions.setSelectedKeyword(keyword));
      },
    };
  }
)(Page);
