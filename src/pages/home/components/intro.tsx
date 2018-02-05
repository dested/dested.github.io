import * as React from 'react';
import glamorous from 'glamorous';
import {url, centerMargin} from '../../../utils/styleUtils';
import {MainSection, Section} from '../../../components/section';

const Holder = glamorous.div({
    width: '65%',
    display: 'flex',
    flexDirection: 'row',
    fontSize: '1.4rem',
    ...centerMargin
});

const Icon = glamorous.div({
    width: '150px',
    height: '150px',
    alignSelf: 'center',
    borderRadius: '50px',
    backgroundSize: 'cover',
    backgroundImage: url('assets/sal.jpg')
});

const Pitch = glamorous.span({
    padding: '10px',

    marginLeft: '10px',
    flex: 1
});

export let Intro: React.SFC = () => {
    return (
        <MainSection color={'#FFFFFF'} title={'My Portfolio'}>
            <Holder>
                <Icon/>
                <Pitch>
                    I am a seasoned JavaScript and .Net Engineer with over ten years professional experience spanning every
                    conceivable type of project. I have seen the web transform from jQuery to React, from Ajax to
                    websockets, and from monolithic asp.net websites to lean client side mv* single page apps. I have a
                    strong passion in canvas based game development, as well as using sockets to connect players over the
                    web. I strive for rapid prototyping utilizing cutting edge technologies, refactoring, and bringing
                    prototypes to production application.
                </Pitch>
            </Holder>
        </MainSection>
    );
};
