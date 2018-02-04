import * as React from 'react';
import glamorous from 'glamorous';
import {IProject} from '../../../models/project';
import {url} from '../../../utils/styleUtils';
import {Keywords} from './keywords';

const Holder = glamorous.div({
    width: '100%',
    height: '600px',
    display: 'flex',
    flexDirection: 'row'
});

export let ToyLeft: React.SFC<{ toy: IProject }> = ({toy}) => {
    return (
        <Holder>
            <Toy toy={toy}/>
            <ToyDescription toy={toy}/>
        </Holder>
    );
};
export let ToyRight: React.SFC<{ toy: IProject }> = ({toy}) => {
    return (
        <Holder>
            <ToyDescription toy={toy}/>
            <Toy toy={toy}/>
        </Holder>
    );
};


const ToyHolder = glamorous.div({
    width: '600px'
});

const ToyImage = glamorous.div<{ image: string }>(
    {
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
    },
    ({image}) => ({
        backgroundImage: url(image)
    })
);
export let Toy: React.SFC<{ toy: IProject }> = ({toy}) => {
    return (
        <ToyHolder>
            <ToyImage image={toy.image}/>
        </ToyHolder>
    );
};


const DescriptionHolder = glamorous.div({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#555',
    color: '#eee'
});

const KeywordHolder = glamorous.div({
    justifySelf: 'right'
});

export let ToyDescription: React.SFC<{ toy: IProject }> = ({toy}) => {
    return (
        <DescriptionHolder>
            <span>{toy.title}</span>
            <span>{toy.description} {toy.description} {toy.description} {toy.description} {toy.description} {toy.description}</span>
            <span>{toy.github}</span>
            <span>{toy.url}</span>
            <KeywordHolder>
                <Keywords keywords={toy.keywords}/>
            </KeywordHolder>
        </DescriptionHolder>
    );
};