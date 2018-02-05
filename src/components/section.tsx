import * as React from 'react';
import glamorous from 'glamorous';
import {centerMargin} from '../utils/styleUtils';

const Holder = glamorous.div<Props>(
    {
        paddingTop: '40px',
        paddingBottom: '40px',
    },
    ({color}) => ({
        backgroundColor: color,
    })
);
const Inner = glamorous.div(
    {
        ...centerMargin,
        width: '1570px'
    }
);

const SectionTitle = glamorous.div<{ big?: boolean }>(
    {
        padding: '10px',
        textAlign: 'center',
        color: '#333',
        marginBottom: '20px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 500
    },
    ({big}) => ({
        fontSize: big ? '36px' : '32px'
    })
);


interface Props {
    color: string;
    title?: string;
}

export let Section: React.SFC<Props> = (props) => {
    return (
        <Holder color={props.color}>
            <Inner>
                {props.title && <SectionTitle>{props.title}</SectionTitle>}
                {props.children}
            </Inner>
        </Holder>
    );
};


const MainHolder = glamorous.div<Props>(
    {
        paddingBottom: '20px',
        height: '600px',
        paddingTop: '150px'
    },
    ({color}) => ({
        backgroundColor: color,
    })
);

export let MainSection: React.SFC<Props> = (props) => {
    return (
        <MainHolder color={props.color}>
            <Inner>
                {props.title && <SectionTitle big={true}>{props.title}</SectionTitle>}
                {props.children}
            </Inner>
        </MainHolder>
    );
};
