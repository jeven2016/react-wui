import React, {Component, PropTypes} from 'react';
import Highlight from "react-highlight";
//
export default class DisabledButton extends Component {
    static propTypes = {};

    constructor(args) {
        super(args);
        this.state = {}
    }

    render() {
        return (
            <div>
                <blockquote className="elem-line">
                    <p className="text color-blue">Disabled Button </p>
                    <p className="text comment">

                    </p>
                </blockquote>
                <div className="elem-line">
                    <button className="button disabled"> Disabled</button>
                    <a className="button primary disabled"> Disabled </a>
                    <button className="button" disabled> Disabled</button>
                </div>
                <Highlight className="html">
                    {`
<button class="button disabled"> Disabled </button>
<a class="button primary disabled"> Disabled </a>
<button className="button" disabled> Disabled</button>`}
                </Highlight>
            </div>
        );
    }
}