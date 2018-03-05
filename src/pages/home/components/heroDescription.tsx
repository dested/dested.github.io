import * as React from 'react';
import glamorous from 'glamorous';
import {IProject} from '../../../models';
import {Keywords} from './keywords';
import {media} from '../../../utils/styleUtils';

const Holder = glamorous.div({
    backgroundColor: 'white',
    padding: '20px',
    color: '#333',
    display: 'grid',
    gridTemplateAreas: `
        "title title . keywords"
        "pitch pitch . links"
        "description description description description"
    `,
    gridTemplateColumns: `auto 50px 30px 1fr`,
    gridTemplateRows: `50px auto auto auto`,
    alignItems: 'center',
    [media.phone]: {
        gridTemplateAreas: `
            "title title"
            "pitch pitch"
            "description description"
            "links keywords"
        `,
        gridTemplateColumns: `1fr 1fr`,
        gridTemplateRows: `auto`
    }
});

const Title = glamorous.span({
    gridArea: 'title',
    fontSize: '2rem'
});

const Links = glamorous.a({
    gridArea: 'links',
    justifySelf: 'right',
    [media.phone]: {
        justifySelf: 'left'
    }
});
const Site = glamorous.a({
    fontSize: '1rem',
    color: '#5D5D5D',
    marginRight: '10px'
});
const Github = glamorous.a({
    fontSize: '1rem',
    color: '#5D5D5D'
});
const Pitch = glamorous.span({
    gridArea: 'pitch',
    paddingTop: '10px',
    fontSize: '1.5em'
});
const Description = glamorous.span({
    gridArea: 'description',
    paddingTop: '10px',
    fontSize: '1.2em'
});
const KeywordHolder = glamorous.div({
    gridArea: 'keywords',
    justifySelf: 'right'
});

interface Props {
    hero: IProject;
}

export let HeroDescription: React.SFC<Props> = ({hero}) => {
    return (
        <Holder>
            <Title>{hero.title}</Title>
            <Links>
                <Site href={hero.url}>site</Site>
                {hero.github && <Github href={hero.github}>github</Github>}
            </Links>
            <KeywordHolder>
                <Keywords keywords={hero.keywords} />
            </KeywordHolder>
            <Pitch>{hero.pitch}</Pitch>
            <Description>{hero.description}</Description>
        </Holder>
    );
};
