import React, {Component, PropTypes} from 'react';
import Highlight from "react-highlight";

export default class ColorfulButtonGroup extends Component {
    render() {
        return (<div className="elem-line">
            <blockquote className="text color-blue">Colorful Button Group 色彩不同的Button Goup</blockquote>
            <div className="button-group">
                <button className="button black clear-border">Black</button>
                <button className="button brown clear-border">brown</button>
                <button className="button pink clear-border">pink</button>
                <button className="button purple clear-border">purple</button>
                <button className="button violet clear-border">violet</button>
                <button className="button blue clear-border">blue</button>
                <button className="button teal clear-border">teal</button>
                <button className="button green clear-border">green</button>
                <button className="button yellow clear-border">yellow</button>
                <button className="button orange clear-border">orange</button>
                <button className="button red clear-border">red</button>
            </div>
            <Highlight className="html">
                {`<div class="button-group">
    <button class="button black clear-border">Black</button>
    <button class="button brown clear-border">brown</button>
    <button class="button pink clear-border">pink</button>
    <button class="button purple clear-border">purple</button>
    <button class="button violet clear-border">violet</button>
    <button class="button blue clear-border">blue</button>
    <button class="button teal clear-border">teal</button>
    <button class="button green clear-border">green</button>
    <button class="button yellow clear-border">yellow</button>
    <button class="button orange clear-border">orange</button>
    <button class="button red clear-border">red</button>
</div>`
                }
            </Highlight>

        </div>);
    }

}