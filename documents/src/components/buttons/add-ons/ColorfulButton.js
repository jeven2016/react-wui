import React, {Component, PropTypes} from 'react';
import Highlight from "react-highlight";

export default class ColorfulButton extends Component {
    static propTypes = {};

    constructor(args) {
        super(args);
        this.state = {}
    }

    render() {
        return (<div>
            <blockquote className="elem-line">
                <p className="text color-blue">Colorful Buttons 色彩丰富的按钮</p>
                <p className="text comment">在附属组件中提供了11种色彩丰富的按钮</p>
            </blockquote>
            <div className="button-add-on-container">

                <button className="button black">black</button>
                <button className="button brown">brown</button>
                <button className="button pink">pink</button>
                <button className="button purple">purple</button>
                <button className="button violet">violet</button>

                <button className="button blue">blue</button>
                <button className="button teal">teal</button>
                <button className="button green">green</button>
                <button className="button yellow">yellow</button>
                <button className="button orange">orange</button>
                <button className="button red">red</button>
                <button className="disabled button red">Disabled</button>
            </div>
            < Highlight className="html">
                {`<button class="button black">black</button>
<button class="button brown">brown</button>
<button class="button pink">pink</button>
<button class="button purple">purple</button>
<button class="button violet">violet</button>
<button class="button blue">blue</button>
<button class="button teal">teal</button>
<button class="button green">green</button>
<button class="button yellow">yellow</button>
<button class="button orange">orange</button>
<button class="button red">red</button>
<button className="disabled button red">Disabled</button>`
                }
            </Highlight>
        </div>);
    }

}