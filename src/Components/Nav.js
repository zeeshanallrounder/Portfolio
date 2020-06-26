import React, { Component } from "react";
import "../Components/Nav.css";

class Nav extends Component {
    render() {
        return (
                    <nav>
                        <a href="/" className="logo">
                            Zeeshan Siddique
        </a>
                        <ul>
                            <li>
                                <a href="/" className="active">
                                    Home
            </a>
                            </li>
                            <li>
                                <a href="/Resume">Resume</a>
                            </li>
                            <li>
                                <a href="/Contact">Contact</a>
                            </li>
                        </ul>
                    </nav>
                   
        );
    }
}


export default Nav;
