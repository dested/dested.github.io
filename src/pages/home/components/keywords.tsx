import glamorous from 'glamorous';
import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {PageAction, PageActions} from '../../../actions/page';

const Keyword = glamorous.span({
  padding: '5px',
  fontSize: '.7rem',
  color: '#5D5D5D',
  cursor: 'pointer',
  display: 'inline-block',
  userSelect: 'none'
});

interface Props {
  keywords: string[];
  setSelectedKeyword: (keyword: string | null) => void;
}

const keywordsComponent: React.SFC<Props> = ({keywords, setSelectedKeyword}) => {
  const tap = (e: {stopPropagation: () => void}, keyword: string) => {
    setSelectedKeyword(keyword);
    e.stopPropagation();
  };
  return (
    <>
      {keywords.sort().map(k => (
        <Keyword onMouseDown={e => tap(e, k)} onTouchStart={e => tap(e, k)} key={k}>
          {k}
        </Keyword>
      ))}
    </>
  );
};

export let Keywords = connect(
  null,
  (dispatch: Dispatch<PageAction>) => {
    return {
      setSelectedKeyword: (keyword: string | null) => {
        dispatch(PageActions.setSelectedKeyword(keyword));
      }
    };
  }
)(keywordsComponent);
