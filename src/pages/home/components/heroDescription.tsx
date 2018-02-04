import * as React from 'react';
import glamorous from 'glamorous';
import {IProject} from '../../../models/project';
import {Keywords} from './keywords';

const Holder = glamorous.div({
    backgroundColor: '#444',
    height: '200px',
    padding: '20px',
    color: '#DDD',
    display: 'grid',
    gridTemplateAreas: `
        "title site github keywords"
        "description description description description"
    `,
    gridTemplateColumns: `auto 50px 30px 1fr`,
    gridTemplateRows: `50px 1fr`,
    alignItems: 'center'
});

const Title = glamorous.span({
    gridArea: 'title',
    fontSize: '2rem'
});

const Site = glamorous.a({
    gridArea: 'site',
    fontSize: '1rem',
    color: '#eee',
    textDecoration: 'none',
});
const Github = glamorous.a({
    gridArea: 'github',
    fontSize: '1rem',
    color: '#eee',
    textDecoration: 'none',
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

export let HeroDescription: React.SFC<{ hero: IProject }> = props => {
    let {hero} = props;

    return (
        <Holder>
            <Title>
                {hero.title}
            </Title>
            <Site href={hero.url}>site</Site>
            {hero.github && <Github href={hero.github}>github</Github>}
            <KeywordHolder>
                <Keywords keywords={hero.keywords}/>
            </KeywordHolder>
            <Description>{hero.description} {hero.description} {hero.description} {hero.description} {hero.description} {hero.description}</Description>
        </Holder>
    );
};