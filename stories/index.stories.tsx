///<reference path="../src/typings.d.ts"/>
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {Section} from '../src/components/section';
import {Footer} from '../src/pages/home/components/footer';
import {HeroDescription} from '../src/pages/home/components/heroDescription';
import {Provider} from 'react-redux';
import reducers, {Store} from '../src/reducers';
import {createStore} from 'redux';
import {Keywords} from '../src/pages/home/components/keywords';

const store = createStore<Store>(reducers);


storiesOf('Section', module)
    .add('with title', () => <Section color={'grey'} title={'foo'}>Hello Button</Section>)
    .add('without title', () => <Section color={'grey'}>Hello Button</Section>)
    .add('with red title', () => <Section color={'red'} title={'foo'}>Hello Button</Section>);

storiesOf('Footer', module)
    .add('render', () => <Footer/>);

storiesOf('HeroDescription', module)
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add('with pitch', () =>
        (
            <HeroDescription
                hero={{
                    title: 'foo',
                    image: 'foo',
                    description: 'dicks',
                    keywords: ['a', 'b', 'c'],
                    github: 'foo',
                    pitch: 'pitcho',
                    url: 'foo'
                }}
            />
        )
    )
    .add('without pitch', () =>
        (
            <HeroDescription
                hero={{
                    title: 'foo',
                    image: 'foo',
                    description: 'dicks',
                    keywords: ['a', 'b', 'c'],
                    github: 'foo',
                    pitch: '',
                    url: 'foo'
                }}
            />
        )
    );

storiesOf('Button', module)
    .add('with title', () => <button onClick={action('clicko')}>Hello Button</button>);

storiesOf('Keywords', module)
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add('render', () => <Keywords keywords={['a', 'b', 'c']}/>);
