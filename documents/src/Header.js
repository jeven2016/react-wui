import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';


export default class Header extends Component {
    static propTypes = {};

    constructor(args) {
        super(args);
        this.state = {}
    }

    render() {
        return (
            <div>
                <ul className="navbar">
                    <li className="item title">Wheel-UI</li>
                    <li className="item">
                       <Link to="/components">Components</Link>
                    </li>
                </ul>
            </div>
        );
    }

}