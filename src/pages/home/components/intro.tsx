import * as React from 'react';
import glamorous from 'glamorous';
import {url} from '../../../utils/styleUtils';

const NavHeaderOuter = glamorous.div({
    backgroundColor: '#444',
    position: 'fixed',
    top: 0,
    width: '100%',
});

export let Intro: React.SFC = () => {
    return (
        <div style={{height: '150px', display: 'flex', flexDirection: 'row', margin: '10px', fontSize: '1.4rem'}}>
            <div style={{width: '150px', height: '150px', borderRadius: '50px', backgroundSize: 'cover', backgroundImage: url('assets/sal.jpg')}}/>
            <span style={{marginLeft: '10px', marginRight: '10px', flex: 1}}>
                    I am a seasoned JavaScript and .Net Engineer with over ten years professional experience spanning
                    every conceivable type of project. I have seen the web transform from jQuery to React, from Ajax
                    to websockets, and from monolithic asp.net websites to lean client side mv* single page apps.
                    I have a strong passion in canvas based game development, as well as using sockets to connect
                    players over the web. I strive for rapid prototyping utilizing cutting edge technologies,
                    refactoring, and bringing prototypes to production application. A brief portfolio of my personal
                    work can be found at https://dested.com.
                   </span>
        </div>
    );
};