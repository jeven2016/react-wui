import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class List extends Component {
    static propTypes = {};

    constructor(args) {
        super(args);
        this.state = {}
    }

    render() {
        return (
            <ul className="block menu">
                <li className="item"><Link to="/components/button">Button</Link></li>
                <li className="divider"></li>
                <li className="item"><Link to="/components/button-group">Button Group</Link></li>
                <li className="divider"></li>
                <li className="item"><Link to="/components/input">Input</Link></li>
                <li className="divider"></li>
                <li className="item">There</li>
                <li className="divider"></li>
            </ul>
        );
    }

}