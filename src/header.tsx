import * as React from "react";
import glamorous from "glamorous";

debugger;
const NavHeader=glamorous.div({
    backgroundColor:'red',
});


export let Header: React.SFC<{}> = props => {
    return (
        <NavHeader role="navigation">
            <ul className="nav navbar-nav">
                <li>
                    <a href="https://github.com/dested">Github</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/dested">LinkedIn</a>
                </li>
                <li>
                    <a href="mailto:dested@gmail.com?subject=Please%20send%20me%20your%20resume!">Resume</a>
                </li>
                <li>
                    <a href="mailto:dested@gmail.com">Contact</a>
                </li>
            </ul>
        </NavHeader>
    )
};