import React, {Component} from "react";
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
                <ul className="primary navbar fixed top">
                    <li className="title">Wheel-UI</li>
                    <ul className="list">
                        <li className="item">
                            <Link to="/components" className="link">Components</Link>
                        </li>
                    </ul>
                </ul>
            </div>
        );
    }

}