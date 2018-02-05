import * as React from 'react';
import glamorous from 'glamorous';
import {Section} from '../../../components/section';

const Holder = glamorous.div({
    width: '100%',
});

export class Github extends React.PureComponent {
    componentDidMount() {
        // tslint:disable-next-line
        (window as any).GitHubCalendar('.calendar', 'dested');
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
