import glamorous from 'glamorous';
import * as React from 'react';
import {connect} from 'react-redux';
import {IToy} from '../../../models';
import {Store} from '../../../reducers';
import {media} from '../../../utils/styleUtils';
import {Keywords} from './keywords';
import {ToyDescription} from './toyDescription';

const Holder = glamorous.div<{isSelected: boolean}>(
  {
    display: 'flex',
    width: '95%',
    flexDirection: 'column',
    marginTop: '10px',
    marginBottom: '10px',
    transition: 'opacity .5s',
    borderRadius: '10px',
    overflow: 'hidden',
    [media.phone]: {
      width: '100%'
    }
  },
  ({isSelected}) => ({
    opacity: isSelected ? 1 : 0.3
  })
);

interface ToyProps {
  toy: IToy;
  selectedKeyword: string | null;
}

const ToyLink = glamorous.a({
  width: '100%',
  height: '300px'
});

const ToyImage = glamorous.img({
  background: '#FFF',
  width: '100%',
  height: '300px'
});

const toyComponent: React.SFC<ToyProps> = ({toy, selectedKeyword}) => {
  return (
    <Holder isSelected={selectedKeyword === null || toy.keywords.indexOf(selectedKeyword) >= 0}>
      <ToyLink href={toy.url || toy.github}>
        <ToyImage src={toy.images[0]} alt={toy.title} />
      </ToyLink>
      <ToyDescription toy={toy} />
    </Holder>
  );
};

export let Toy = connect((state: Store) => {
  return {
    selectedKeyword: state.pageState.selectedKeyword
  };
})(toyComponent);
