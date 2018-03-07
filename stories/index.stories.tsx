///<reference path="../src/typings.d.ts"/>

import * as React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {Section} from '../src/components/section';


storiesOf('Section', module)
    .add('with title', () => <Section color={'grey'} title={'foo'}>Hello Button</Section>);
storiesOf('Button', module)
    .add('with title', () => <button onClick={action('clicko')}>Hello Button</button>);
