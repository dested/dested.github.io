import glamorous from 'glamorous';
import * as React from 'react';
import {centerMargin, media} from '../utils/styleUtils';
import {ReactNode} from 'react';

const Holder = glamorous.div<Props>(
  {
    paddingBottom: '40px',
  },
  ({color}) => ({
    backgroundColor: color,
  })
);
const Inner = glamorous.div({
  maxWidth: '100%',
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

const SectionTitle = glamorous.div<{big?: boolean}>(
  {
    padding: '10px',
    textAlign: 'center',
    color: 'white',
    marginBottom: '20px',
    marginTop: '20px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 500,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ({big}) => ({
    fontSize: big ? '36px' : '32px',
  })
);

interface Props {
  color: string;
  title?: string | ReactNode;
}

export let Section: React.SFC<Props> = props => {
  return (
    <Holder color={props.color}>
      <Inner>
        {props.title && (
          <SectionTitle>
            <span
              style={{
                padding: '.5rem 1rem',
                background: '#5D5D5D',
                borderRadius: 100,
              }}
            >
              {props.title}
            </span>
          </SectionTitle>
        )}
        {props.children}
      </Inner>
    </Holder>
  );
};

const MainHolder = glamorous.div<Props>(
  {
    paddingBottom: '60px',
    paddingTop: '50px',
  },
  ({color}) => ({
    backgroundColor: color,
  })
);

export let MainSection: React.SFC<Props> = props => {
  return (
    <MainHolder color={props.color}>
      <Inner>
        {props.title && (
          <SectionTitle big={true}>
            <span
              style={{
                padding: '.5rem 1rem',
                background: '#5D5D5D',
                borderRadius: 100,
              }}
            >
              {props.title}
            </span>
          </SectionTitle>
        )}
        {props.children}
      </Inner>
    </MainHolder>
  );
};
