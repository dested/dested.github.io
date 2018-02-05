import * as React from 'react';
import glamorous from 'glamorous';
import {centerMargin} from '../../../utils/styleUtils';

const Holder = glamorous.div({
    backgroundColor: '#5D5D5D',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 100
});

const Nav = glamorous.div({
    backgroundColor: '#5D5D5D',
    ...centerMargin,
    width: '1570px',
    height: '4rem',
    fontSize: '1.5rem',
    display: 'grid',
    gridTemplateColumns: '1fr 3fr 1fr 1fr 1fr 1fr',
    gridTemplateAreas: `
      "name . github linkedin resume contact"
    `,
    alignItems: 'center',
    '@media(max-width: 599px)': {
        gridTemplateColumns: '4fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr 1fr 1fr',
        gridTemplateAreas: `
            "name github"
            ". linkedin"
            ". resume"
            ". contact"
        `,
        height: 'auto'
    }
});

const Name = glamorous.div({
    color: '#fff',
    gridArea: 'name',
    marginLeft: '10px'
});
const Link = glamorous.a<{area: string}>(
    {
        color: '#e5e5e5',
        display: 'block',
        textDecoration: 'none',
        textAlign: 'right',
        marginRight: '10px'
    },
    p => ({
        gridArea: p.area
    })
);

export let Header: React.SFC = () => {
    return (
        <Holder>
            <Nav role="navigation">
                <Name>Salvatore Aiello</Name>
                <Link area={'github'} href={'https://github.com/dested'}>
                    Github
                </Link>
                <Link area={'linkedin'} href={'https://www.linkedin.com/in/dested'}>
                    LinkedIn
                </Link>
                <Link area={'resume'} href={'mailto:dested@gmail.com?subject=Please%20send%20me%20your%20resume!'}>
                    Resume
                </Link>
                <Link area={'contact'} href={'mailto:dested@gmail.com'}>
                    Contact
                </Link>
            </Nav>
        </Holder>
    );
};
