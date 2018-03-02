import * as React from 'react';
import glamorous from 'glamorous';
import {IProject} from '../../../models';
import {Keywords} from './keywords';

const Holder = glamorous.div({
    backgroundColor: 'white',
    height: '240px',
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
    alignItems: 'center'
});

const Title = glamorous.span({
    gridArea: 'title',
    fontSize: '2rem'
});

const Links = glamorous.a({
    gridArea: 'links',
    justifySelf: 'right'
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
    selectKeyword: (keyword: string) => void;
}

export let HeroDescription: React.SFC<Props> = ({hero, selectKeyword}) => {
    return (
        <Holder>
            <Title>{hero.title}</Title>
            <Links>
                <Site href={hero.url}>site</Site>
                {hero.github && <Github href={hero.github}>github</Github>}
            </Links>
            <KeywordHolder>
                <Keywords keywords={hero.keywords} selectKeyword={selectKeyword} />
            </KeywordHolder>
            <Pitch>{hero.pitch}</Pitch>
            <Description>{hero.description}</Description>
        </Holder>
    );
};
