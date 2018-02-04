import * as React from 'react';
import glamorous from 'glamorous';

const Holder = glamorous.div({
    width: '100%',
    backgroundColor: '#ccc'
});

export class Github extends React.PureComponent {
    componentDidMount() {
        // tslint:disable-next-line
        (window as any).GitHubCalendar('.calendar', 'dested');
    }

    render() {
        return (
            <Holder className={'github'}>
                <a href="https://github.com/dested" className="hidden-xs hidden-s">
                    <div className="calendar">Loading the data just for you.</div>
                </a>
            </Holder>
        );
    }
}
