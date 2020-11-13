import glamorous from 'glamorous';
import React, {useContext, useState} from 'react';
import {FC, ReactNode, useCallback, useEffect, useRef} from 'react';
import {useInView} from 'react-intersection-observer';
import {Link} from 'react-router-dom';
import {ClickedProjectRequest, MainClient} from '../../dataServices/app.generated';
import {centerMargin, media} from '../../utils/styleUtils';
import {Footer} from '../home/components/footer';
import {Header} from '../home/components/header';
import {Game, Games} from './games';
import './love.css';

const Context = React.createContext<{
  iCanHelp: {project: string; need: string} | undefined;
  setICanHelp: (request: {project: string; need: string}) => void;
}>({
  iCanHelp: undefined,
  setICanHelp: () => {},
});

const sessionId = (Math.random() * 10000000).toFixed(0);

const Holder = glamorous.div({
  display: 'flex',
  maxWidth: '100vw',
  flexDirection: 'column',
});

const Inner = glamorous.div({
  maxWidth: '100%',
  fontSize: '2rem',
  borderBottom: '2px solid #e9e9e9',

  [media.phone]: {
    width: '100vw',
  },
  [media.tablet]: {
    width: '960px',
    ...centerMargin,
  },
  [media.desktop]: {
    width: '1140px',
    ...centerMargin,
  },
  [media.bigDesktop]: {
    width: '1570px',
    ...centerMargin,
  },
});

const GameList = glamorous.div({
  marginTop: '2rem',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  [media.phone]: {
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
});
const GameListItem = glamorous.div({
  display: 'flex',
  marginBottom: '.5rem',
  width: '50%',
  [media.phone]: {
    width: '100%',
  },
});

const Blog = glamorous.div({
  color: '#555',
  fontSize: '1.5rem',
  margin: '0px auto',

  [media.phone]: {
    padding: '0px 20px 0',
    width: '100vw',
  },
  [media.tablet]: {
    padding: '0px 20px 0',
    width: '960px',
    ...centerMargin,
  },
  [media.desktop]: {
    padding: '0px 170px 6vw',
    width: '1140px',
    ...centerMargin,
  },
  [media.bigDesktop]: {
    padding: '0px 170px 6vw',
    width: '1570px',
    ...centerMargin,
  },
});

const SectionTitle = glamorous.h1({
  padding: '10px',
  textAlign: 'center',
  color: '#333',
  marginBottom: '20px',
  fontFamily: 'Roboto, sans-serif',
  margin: '0px 0px 0.2em',
  fontWeight: 600,
});

const Section = (props: {id?: string; title?: string | ReactNode; children: React.ReactNode}) => {
  return (
    <Holder color={'#F1F1F1'} id={props.id}>
      <Inner>
        {props.title && <SectionTitle>{props.title}</SectionTitle>}
        {props.children}
      </Inner>
    </Holder>
  );
};

function LoveGame({g}: {g: Game}) {
  const {ref, inView} = useInView({});
  const [voted, setVoted] = useState(false);
  const {setICanHelp} = useContext(Context);
  useEffect(() => {
    if (inView) {
      MainClient.viewedProject({project: g.name, sessionId}, {});
    }
  }, [inView]);

  const onClickedProject = useCallback(
    (which: ClickedProjectRequest['which']) => {
      MainClient.clickedProject({which, project: g.name, sessionId}, {});
    },
    [g]
  );
  const onVoteProject = useCallback(
    (vote: 'good' | 'bad') => {
      setVoted(true);
      MainClient.vote({vote, project: g.name, sessionId}, {});
    },
    [g]
  );

  return (
    <>
      <div id={g.name} style={{height: '2rem'}} />
      <Section>
        <div className={'game-grid'} ref={ref}>
          <h1 className={'game-title'}>{g.title}</h1>
          <h2 className={'game-teaser'}>{g.teaser}</h2>
          <div className={'side-panel'}>
            {g.youtube && (
              <iframe
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/${g.youtube}`} /*?autoplay=${inView ? 1 : 0}*/
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
            {g.image && <img src={g.image} width="100%" height="500" alt={'teaser'} />}
            <div className={'side-holder'}>
              {g.github && (
                <a
                  target={'_blank'}
                  className={'game-github'}
                  href={g.github}
                  onClick={() => onClickedProject('github')}
                >
                  github
                </a>
              )}
              {g.url && (
                <a target={'_blank'} className={'game-url'} href={g.url} onClick={() => onClickedProject('website')}>
                  website
                </a>
              )}
            </div>
            <div className={'side-holder'}>
              <span className={'game-timespent'}>
                <span>Time Spent:</span>
                <br />
                {g.timeSpent}
              </span>
              <span className={'game-percentdone'}>
                <span>Percent Done:</span>
                <br />
                {g.percentDone}
              </span>
            </div>
            <div className={'what-i-need'}>
              <h4>What I would need to keep working on it</h4>
              <ul>
                {g.whatINeed.map((n, i) => (
                  <li key={i}>
                    <span>{n}</span>{' '}
                    <button onClick={() => setICanHelp({project: g.name, need: n})}>
                      Hmm, I think I can help with this
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={'game-body'}>
            <h4>Synopsis</h4>
            <p>{g.synopsis}</p>
            <h4>Monetization</h4>
            <p>{g.monetization}</p>
            <h4>Why I liked working on it</h4>
            <p>{g.whyILikedWorkingOnIt}</p>
            <h4>Reason I stopped working on it</h4>
            <p>{g.whyIStopped}</p>

            <div className={'game-buttons buttons'}>
              <button className={voted ? 'disabled' : ''} disabled={voted} onClick={() => onVoteProject('good')}>
                I think this is a good idea!
              </button>
              <button className={voted ? 'disabled' : ''} disabled={voted} onClick={() => onVoteProject('bad')}>
                I think this is a boring game idea
              </button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function ICanHelp() {
  const {iCanHelp, setICanHelp} = useContext(Context);
  const [message, setMessage] = useState('');
  const [portfolio, setPortfolio] = useState('');

  const onSubmit = useCallback(() => {
    MainClient.iCanHelp({portfolio, message, need: iCanHelp.need, sessionId, project: iCanHelp.project}, {});
    setICanHelp(undefined);
    alert('Thank You! I will reach out!');
  }, [message, portfolio, iCanHelp, setICanHelp]);

  return (
    <div
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10000,
      }}
    >
      <div
        onClick={() => setICanHelp(undefined)}
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(0,0,0,.8)',
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      />
      <div className={'bubble'}>
        <h2>I can help!</h2>
        <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder={'I can help by...'} />
        <input value={portfolio} onChange={e => setPortfolio(e.target.value)} placeholder={"Here's my portfolio..."} />
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
}

export const Love: FC<{}> = ({}) => {
  useEffect(() => {
    MainClient.viewedProject({project: 'home', sessionId}, {});
  }, []);

  const [iCanHelp, setICanHelp] = useState<{project: string; need: string} | undefined>();
  return (
    <>
      <Context.Provider value={{iCanHelp, setICanHelp}}>
        <Holder>
          <Header />
          <div style={{height: '6rem'}} />
          <Section
            title={
              <>
                Projects I Love But
                <br />
                Stopped Working On
              </>
            }
          >
            <Blog>
              <p style={{marginTop: '3rem'}}>
                Like most passionate (bored) developers, I’ve worked on a lot of projects. Most of them games, none of
                them seeing the light of day. I’ve decided to chronicle them here in an attempt to kick other gamedevs
                to finish their own games, and maybe even entice some people to help me finish these.
                <br />
                <br />
                Really, it’s more of a just a cathartic experience for me. I have tried my best to explain why I chose
                to stop working on these projects (for now anyway). These are not all the games I’ve worked on in the
                recent past (see <Link to={'/'}>Toys</Link>), <b>just the ones I love</b>.
              </p>

              <h2 style={{color: 'black'}}>What Is Love</h2>
              <p>
                I love each and every one of these projects. Each one of them has hundreds, sometimes thousands of
                commits. I’ve spent hundreds, sometimes thousands of hours building them.
                <br />
                <br />
                I’ve poured my heart into them at one time or another. <b>I’ve broken promises to work on them</b>.{' '}
                <b>I’ve missed deadlines to work on them</b>. I love them, in every sense of the word.
              </p>

              <h2 style={{color: 'black'}}>I'm an architect</h2>
              <p>
                I’m an architect. I’m an engineer. <b>I am not a game developer.</b> However, <i>unfortunately</i>, I
                love to make multiplayer games, specifically for the web. I like to connect people.
                <br />
                <br />
                Almost all of these projects die in one spot: <b>game design and assets</b>. It’s incredibly tiresome to
                be a solo developer with no artistic capabilities.
              </p>

              <h2 style={{color: 'black'}}>TypeScript & Node</h2>
              <p>
                All the projects are built using strict typescript for both the client and server, and typically react
                somewhere. Most of them use some type of serverless hosting. All of the source is provided unless
                otherwise stated, though you will likely not be able to run any of them locally as there is never any
                documentation. Each one of them contains a treasure trove of good patterns and utility code that anyone
                can benefit from. If you agree, throw the ones you like a star.
              </p>

              <h2 style={{color: 'black'}}>Why Am I Doing This?</h2>
              <p>
                You can consider this website a cry for help. I've learned time and time again that the old adage is
                true, <b>it's very difficult to be a solo founder</b>. I am looking for someone to go on a journey with
                me just once, someone with skills that compliment mine. Someone to share in the ups, and downs.
                <br />
                <br />
                If nothing else, I don't want these projects to die unnoticed, even if they aren't production ready.
              </p>
              <h2 style={{color: 'black'}}>The Games</h2>
              <p>
                Below are the games. I thought about randomizing the order of them just to not play favorites. They are
                each my babies, and I love them all equally. Please keep an open mind when reading about them.
              </p>
              <GameList>
                {Games.map(g => (
                  <GameListItem key={g.name}>
                    <a href={'#' + g.name}>
                      <img
                        src={g.image ?? `https://img.youtube.com/vi/${g.youtube}/hqdefault.jpg`}
                        alt={g.name}
                        style={{width: '10rem', height: '10rem', display: 'block'}}
                      />
                    </a>
                    <div style={{marginLeft: '2rem'}}>
                      <a style={{display: 'block'}} href={'#' + g.name}>
                        {g.title}
                      </a>
                      {g.teaser}
                    </div>
                  </GameListItem>
                ))}
              </GameList>
            </Blog>
          </Section>
          {Games.map(g => (
            <LoveGame g={g} key={g.name} />
          ))}
          <Footer />
          {iCanHelp && <ICanHelp />}
        </Holder>
      </Context.Provider>
    </>
  );
};
