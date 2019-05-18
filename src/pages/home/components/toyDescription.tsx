import glamorous from 'glamorous';
import * as React from 'react';
import {IToy} from '../../../models';
import {Keywords} from './keywords';

const DescriptionHolder = glamorous.div({
  flex: 1,
  display: 'flex',
  padding: '10px',
  flexDirection: 'column',
  backgroundColor: '#FFF',
  color: '#5D5D5D',
  fontSize: '1.2em'
});

const KeywordHolder = glamorous.div({
  margin: '10px',
  marginBottom: 0
});

const Title = glamorous.span({
  fontSize: '1.6em',
  textAlign: 'center'
});

const Description = glamorous.span({
  padding: '5px',
  flex: 1
});

const Github = glamorous.a({
  color: '#5d5d5d'
});

const Url = glamorous.a({
  color: '#5d5d5d'
});

interface Props {
  toy: IToy;
}

export let ToyDescription: React.SFC<Props> = ({toy}) => {
  return (
    <DescriptionHolder>
      <Title>{toy.title}</Title>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        {toy.url && <Url href={toy.url}>site</Url>}
        <Github href={toy.github}>github</Github>
      </div>
      <Description dangerouslySetInnerHTML={{__html: toy.description}} />
      <KeywordHolder>
        <Keywords keywords={toy.keywords} />
      </KeywordHolder>
    </DescriptionHolder>
  );
};
