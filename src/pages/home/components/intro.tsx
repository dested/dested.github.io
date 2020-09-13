import glamorous from 'glamorous';
import * as React from 'react';
import {MainSection, Section} from '../../../components/section';
import {centerMargin, media, url} from '../../../utils/styleUtils';

const Holder = glamorous.div({
  width: '90%',
  display: 'flex',
  fontSize: '1.2rem',
  ...centerMargin,
  [media.phone]: {
    flexDirection: 'column'
  }
});

const Icon = glamorous.div({
  width: '185px',
  height: '185px',
  alignSelf: 'center',
  borderRadius: '50px',
  backgroundSize: 'cover',
  backgroundImage: url('assets/sal.jpg')
});

const Pitch = glamorous.span({
  padding: '10px',
  lineHeight: '1.2em',
  marginLeft: '10px',
  flex: 1,
  [media.phone]: {
    paddingTop: '40px',
    fontSize: '1.3em'
  }
});

export let Intro: React.SFC = () => {
  return (
    <MainSection color={'#FFFFFF'} title={'My Portfolio'}>
      <Holder>
        <Icon />
        <Pitch>
        Being a hands on CTO for half a decade, and an engineer for over 15 years, I have experienced every conceivable type of project. I have seen the web transform from jQuery to React, from AJAX to Web Sockets, Cordova to React Native, and from monolithic web applications to lean SPAs. I have managed teams large and small, deployed user facing web and mobile apps used by millions, and personally brought several mobile apps and games to market. I am passionate about building startups around mobile apps, rapid prototype business needs and bringing those prototypes to production ready maintainable applications, and connecting people all over the world in real time.
        </Pitch>
      </Holder>
    </MainSection>
  );
};
