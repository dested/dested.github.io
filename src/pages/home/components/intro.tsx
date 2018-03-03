import * as React from 'react';
import glamorous from 'glamorous';
import {url, centerMargin, media} from '../../../utils/styleUtils';
import {MainSection, Section} from '../../../components/section';

const Holder = glamorous.div({
    width: '90%',
    display: 'flex',
    fontSize: '1.2rem',
    ...centerMargin,
    [media.phone]: {
        flexDirection: 'column'
    }
});

const Icon = glamorous.div({
    width: '185px',
    height: '185px',
    alignSelf: 'center',
    borderRadius: '50px',
    backgroundSize: 'cover',
    backgroundImage: url('assets/sal.jpg')
});

const Pitch = glamorous.span({
    padding: '10px',
    lineHeight: '1.2em',
    marginLeft: '10px',
    flex: 1,
    [media.phone]: {
        paddingTop: '40px',
        fontSize: '1.3em'
    }
});

export let Intro: React.SFC = () => {
    return (
        <MainSection color={'#FFFFFF'} title={'My Portfolio'}>
            <Holder>
                <Icon />
                <Pitch>
                    I am a seasoned JavaScript and .Net Engineer with over twelve years professional experience spanning
                    every conceivable type of project. I have seen the web transform from jQuery to React, from AJAX to
                    Web Sockets, Cordova to React Native, and from monolithic ASP.NET websites to lean client side MV*
                    single page apps. I have worked with or managed teams small and large, built back office tools for
                    operations, deployed client facing applications used by thousands, and personally launched 3 mobile
                    apps or games. I strive to rapid prototype business needs, and bringing those prototypes to
                    production ready maintainable applications. My passions are building native mobile apps, canvas
                    based game development, as well as using sockets to connect people over the web in real time.
                </Pitch>
            </Holder>
        </MainSection>
    );
};
