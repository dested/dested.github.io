import glamorous from 'glamorous';
import * as React from 'react';

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
    selectKeyword: (keyword: string) => void;
}

export let Keywords: React.SFC<Props> = ({keywords, selectKeyword}) => {
    const tap = (e: {stopPropagation: () => void}, keyword: string) => {
        selectKeyword(keyword);
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
