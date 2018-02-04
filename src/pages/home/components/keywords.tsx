import glamorous from 'glamorous';
import * as React from 'react';
import {Fragment} from 'react';

const Keyword = glamorous.span({
    padding: '5px',
    backgroundColor: '#CCC',
    color: '#222',
    borderRadius: '4px',
    marginLeft: '5px'
});

export let Keywords: React.SFC<{keywords: string[]}> = ({keywords}) => {
    return <Fragment>{keywords.map(k => <Keyword key={k}>{k}</Keyword>)}</Fragment>;
};
