import * as React from 'react';
import glamorous from 'glamorous';
import {IProject} from '../../../models/project';
import {url} from '../../../utils/styleUtils';
import {Keywords} from './keywords';

const Holder = glamorous.div({
    width: '100%',
    height: '600px',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '15px',
    paddingBottom: '15px'
});

export let ToyLeft: React.SFC<{toy: IProject}> = ({toy}) => {
    return (
        <Holder>
            <Toy toy={toy} />
            <ToyDescription toy={toy} />
        </Holder>
    );
};
export let ToyRight: React.SFC<{toy: IProject}> = ({toy}) => {
    return (
        <Holder>
            <ToyDescription toy={toy} />
            <Toy toy={toy} />
        </Holder>
    );
};

const ToyHolder = glamorous.div({
    width: '600px',
    backgroundColor: '#ccc'
});

const ToyImage = glamorous.div<{image: string}>(
    {
        backgroundSize: 'cover',
        width: '100%',
        height: '100%'
    },
    ({image}) => ({
        backgroundImage: url(image)
    })
);
export let Toy: React.SFC<{toy: IProject}> = ({toy}) => {
    return (
        <ToyHolder>
            <ToyImage image={toy.image} />
        </ToyHolder>
    );
};

const DescriptionHolder = glamorous.div({
    flex: 1,
    display: 'flex',
    padding: '10px',
    flexDirection: 'column',
    backgroundColor: '#555',
    color: '#eee'
});

const KeywordHolder = glamorous.div({
    justifySelf: 'right',
    padding: '10px'
});

const Title = glamorous.span({fontSize: '2em'});

const Description = glamorous.span({
    padding: '5px'
});

const Github = glamorous.a({
    color: '#ccc',
    textDecoration: 'none'
});

const Url = glamorous.a({
    color: '#ccc',
    textDecoration: 'none'
});

export let ToyDescription: React.SFC<{toy: IProject}> = ({toy}) => {
    return (
        <DescriptionHolder>
            <Title>{toy.title}</Title>
            <Description
                dangerouslySetInnerHTML={{
                    __html:
                        toy.description +
                        toy.description +
                        toy.description +
                        toy.description +
                        toy.description +
                        toy.description +
                        toy.description
                }}
            />
            <Url href={toy.url}>site</Url>
            <Github href={toy.github}>github</Github>
            <KeywordHolder>
                <Keywords keywords={toy.keywords} />
            </KeywordHolder>
        </DescriptionHolder>
    );
};
