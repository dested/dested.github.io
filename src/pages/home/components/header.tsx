import glamorous from 'glamorous';
import * as React from 'react';
import {centerMargin, media} from '../../../utils/styleUtils';
import {useRouteMatch} from 'react-router';

const Holder = glamorous.div({
  backgroundColor: '#5D5D5D',
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 100,
});

const Nav = glamorous.div({
  backgroundColor: '#5D5D5D',
  height: '4rem',
  display: 'grid',
  gridTemplateColumns: '1fr 3fr 1fr 1fr 1fr 1fr 1fr',
  gridTemplateAreas: `
      "name name github twitter linkedin resume contact"
    `,
  alignItems: 'center',
  ...centerMargin,
  [media.phone]: {
    width: '100%',
    fontSize: '1rem',
  },
  [media.tablet]: {
    width: '960px',
    fontSize: '1.5rem',
  },
  [media.desktop]: {
    width: '1140px',
    fontSize: '1.5rem',
  },
  [media.bigDesktop]: {
    width: '1570px',
    fontSize: '1.5rem',
  },
});

const Name = glamorous.a({
  color: '#fff',
  gridArea: 'name',
  marginLeft: '10px',
  textDecoration: 'none',
});
const Link = glamorous.a<{area: string}>(
  {
    color: '#e5e5e5',
    display: 'block',
    textDecoration: 'none',
    textAlign: 'right',
    marginRight: '10px',
  },
  p => ({
    gridArea: p.area,
  })
);

export let Header: React.SFC = () => {
  const {path} = useRouteMatch();
  return (
    <Holder>
      <Nav role="navigation">
        <Name href={'https://dested.com'}>
          {path === '/' ? "Salvatore Aiello's Portfolio" : "Salvatore Aiello's Portfolio"}
        </Name>
        <Link area={'github'} href={'https://github.com/dested'}>
          Github
        </Link>
        <Link area={'twitter'} href={'https://twitter.com/dested'}>
          Twitter
        </Link>
        <Link area={'linkedin'} href={'https://www.linkedin.com/in/dested'}>
          LinkedIn
        </Link>
        <Link
          area={'resume'}
          href={
            'mailto:dested@gmail.com?subject=I%20have%20the%20perfect%20job%20for%20you%21%20Please%20send%20me%20your%20resume%21'
          }
        >
          Resume
        </Link>
        <Link area={'contact'} href={'mailto:dested@gmail.com'}>
          Contact
        </Link>
      </Nav>
    </Holder>
  );
};
