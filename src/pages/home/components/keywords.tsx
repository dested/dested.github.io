import glamorous from 'glamorous';
import * as React from 'react';
import {Fragment} from 'react';

const Keyword = glamorous.span({
    padding: '5px',
    fontSize: '.7rem',
    color: '#5D5D5D',
});

export let Keywords: React.SFC<{ keywords: string[] }> = ({keywords}) => {
    return <Fragment>{keywords.map(k => <Keyword key={k}>{k}</Keyword>)}</Fragment>;
};
