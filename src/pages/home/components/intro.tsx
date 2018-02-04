import * as React from 'react';
import glamorous from 'glamorous';
import {url} from '../../../utils/styleUtils';

const Holder = glamorous.div({
    height: '150px',
    display: 'flex',
    flexDirection: 'row',
    fontSize: '1.4rem'
});

const Icon = glamorous.div({
    width: '150px',
    height: '150px',
    borderRadius: '50px',
    backgroundSize: 'cover',
    backgroundImage: url('assets/sal.jpg')
});

const Pitch = glamorous.span({
    padding: '10px',
    backgroundColor: '#ccc',
    flex: 1
});

export let Intro: React.SFC = () => {
    return (
        <Holder>
            <Icon />
            <Pitch>
                I am a seasoned JavaScript and .Net Engineer with over ten years professional experience spanning every
                conceivable type of project. I have seen the web transform from jQuery to React, from Ajax to
                websockets, and from monolithic asp.net websites to lean client side mv* single page apps. I have a
                strong passion in canvas based game development, as well as using sockets to connect players over the
                web. I strive for rapid prototyping utilizing cutting edge technologies, refactoring, and bringing
                prototypes to production application. A brief portfolio of my personal work can be found at
                https://dested.com.
            </Pitch>
        </Holder>
    );
};
