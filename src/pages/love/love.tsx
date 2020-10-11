import glamorous from 'glamorous';
import {FC, ReactNode} from 'react';
import React from 'react';
import {centerMargin, media} from '../../utils/styleUtils';
import {Footer} from '../home/components/footer';
import {Header} from '../home/components/header';
import './love.css';
import {Games} from './games';

const Holder = glamorous.div({
  display: 'flex',
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

const SectionTitle = glamorous.h1({
  padding: '10px',
  textAlign: 'center',
  color: '#333',
  marginBottom: '20px',
  fontFamily: 'Roboto, sans-serif',
  margin: '0px 0px 0.2em',
  fontWeight: 600,
});

const Section = (props: {title?: string | ReactNode; children: React.ReactNode}) => {
  return (
    <Holder color={'#F1F1F1'}>
      <Inner>
        {props.title && <SectionTitle>{props.title}</SectionTitle>}
        {props.children}
      </Inner>
    </Holder>
  );
};

export const Love: FC<{}> = ({}) => {
  return (
    <>
      <Holder>
        <Header />
        <Section
          title={
            <>
              Projects I Love But
              <br />
              Stopped Working On
            </>
          }
        >
          <div
            style={{
              color: '#555',
              fontSize: '2rem',
              margin: '0px auto',
              padding: '0px 170px 6vw',
            }}
          >
            <p style={{marginTop: '3rem'}}>
              During the past years I’ve worked on a lot of projects. Most of them games, none of them seeing the light
              of day. I’ve decided to chronicle them here in an attempt to kick other game developers to finish their
              own games, and maybe entice some people to help me finish these. Really, it’s more of a just a cathartic
              experience for me. I have tried my best to explain why I chose to stop working on these projects (for now
              anyway). These are not all the projects I’ve worked on in the recent past, just the ones I love.
            </p>

            <h2 style={{color: 'black'}}>What Is Love</h2>
            <p>
              I love each and every one of these projects. Each one of them has hundreds, sometimes thousands of
              commits. I’ve spent hundreds, sometimes thousands of hours building them. I’ve poured my heart into them
              at one time or another. I’ve broken promises to work on them. I’ve missed deadlines to work on them. I
              love them, in every sense of the word.
            </p>

            <h2 style={{color: 'black'}}>I'm an architect</h2>
            <p>
              I’m an architect. I’m an engineer. <b>I am not a game developer.</b> However, unfortunately, I love to
              make multiplayer games, specifically for the web. I like to connect people. Almost all of these projects
              die in one spot: game design and assets. It’s incredibly tiresome to be a solo developer with no artistic
              capabilities.
            </p>

            <h2 style={{color: 'black'}}>TypeScript</h2>
            <p>
              All the projects are built using strict typescript for both the client and server, and typically react
              somewhere. Most of them use some type of serverless hosting. All of the source is provided unless
              otherwise stated, though you will likely not be able to run any of them locally as there is no
              documentation. If you want to talk about any of these projects, or maybe even work on them with me,{' '}
              <button>tap here</button> to message me
            </p>

            <h2 style={{color: 'black'}}>Why Am I Doing This?</h2>
            <p>
              You can consider this website a cry for help. I've learned the old adage is true, its very difficult to be
              a solo founder. I am looking for someone to go on a journey with me, someone with skills that compliment
              mine. Someone to share in the ups, and downs. If nothing else, I don't want these projects to die
              unnoticed, even if they aren't production ready.
            </p>
          </div>
        </Section>
        {Games.map(g => (
          <>
            <Section>
              <div className={'game-grid'}>
                <h1 className={'game-title'}>{g.title}</h1>
                <div style={{gridArea: 'side-panel', display: 'flex', flexDirection: 'column'}}>
                  {g.youtube && (
                    <iframe
                      width="100%"
                      height="500"
                      src={`https://www.youtube.com/embed/${g.youtube}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                  {g.image && <img src={g.image} width="100%" height="500" alt={g.title} />}
                  {g.github && (
                    <a className={'game-github'} href={g.github}>
                      Github
                    </a>
                  )}
                  {g.url && (
                    <a className={'game-url'} href={g.url}>
                      {g.url}
                    </a>
                  )}
                  <span className={'game-timespent'}>Time Spent: {g.timeSpent}</span>
                  <span className={'game-percentdone'}>Percent Done: {g.percentDone}</span>
                  <button>I think this is a good idea!</button>
                  <button>I think this is a boring game idea</button>
                </div>
                <div style={{gridArea: 'body'}}>
                  <h4>Synopsis</h4>
                  <p>{g.synopsis}</p>
                  <h4>Monetization</h4>
                  <p>{g.monetization}</p>
                  <h4>Why I liked working on it</h4>
                  <p>{g.whyILikedWorkingOnIt}</p>
                  <h4>Reason I stopped working on it</h4>
                  <p>{g.whyIStopped}</p>
                  <h4>What I'd need to keep working on it</h4>
                  <ul>
                    {g.whatINeed.map((n, i) => (
                      <li key={i}>
                        {n} <button>Hmm, I think I can help with this</button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>
          </>
        ))}
        <Footer />
      </Holder>
    </>
  );
};
