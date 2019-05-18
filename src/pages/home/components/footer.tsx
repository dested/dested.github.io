import glamorous from 'glamorous';
import * as React from 'react';
import {centerMargin, media} from '../../../utils/styleUtils';

const Holder = glamorous.div({
  backgroundColor: '#222',
  width: '100%'
});

const Inner = glamorous.div({
  backgroundColor: '#222',
  ...centerMargin,
  height: '4rem',
  fontSize: '1.3rem',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  color: '#ccc',
  [media.phone]: {
    width: '100%'
  },
  [media.tablet]: {
    width: '960px'
  },
  [media.desktop]: {
    width: '1140px'
  },
  [media.bigDesktop]: {
    width: '1570px'
  }
});

const Copyright = glamorous.span({});
export let Footer: React.SFC = () => {
  return (
    <Holder>
      <Inner>
        <Copyright>Copyright © Salvatore Aiello {new Date().getFullYear()}</Copyright>
      </Inner>
    </Holder>
  );
};
