import glamorous from 'glamorous';
import * as React from 'react';
import {Section} from '../../../components/section';
import {media} from '../../../utils/styleUtils';

const Holder = glamorous.div({
  width: '100%',
  display: 'block'
});

export class Github extends React.PureComponent {
  componentDidMount() {
    // tslint:disable-next-line
        (window as any).GitHubCalendar('.calendar', 'dested', {responsive: true});
  }

  render() {
    return (
      <Section color={'#fff'} title={'GitHub'}>
        <Holder className={'github'}>
          <a href="https://github.com/dested" className="hidden-xs hidden-s">
            <div className="calendar">Loading the data just for you.</div>
          </a>
        </Holder>
      </Section>
    );
  }
}
