import React, {Component, PropTypes} from 'react';
import Highlight from "react-highlight";

export default class InvertedButton extends Component {

    render() {
        return (<div>
            <blockquote className="elem-line">
                <p className="text color-blue">Inverted Buttons</p>
                <p className="text comment">颜色反转后的Button,以便适配黑色的背景。</p>
            </blockquote>
            <div className="button-add-on-container bg-color-black">
                <button className="button black inverted">black</button>
                <button className="active button brown inverted">brown</button>
                <button className="button pink inverted">pink</button>
                <button className="button purple inverted">purple</button>
                <button className="button violet inverted">violet</button>
                <button className="button blue inverted">blue</button>
                <button className="button teal inverted">teal</button>
                <button className="button green inverted">green</button>
                <button className="button yellow inverted">yellow</button>
                <button className="button orange inverted">orange</button>
                <button className="button red inverted">red</button>
                <button className="disabled button red inverted">Disabled</button>
            </div>
            < Highlight className="html">
                {` <button className="button black inverted">black</button>
<button className="active button brown inverted">brown</button>
<button className="button pink inverted">pink</button>
<button className="button purple inverted">purple</button>
<button className="button violet inverted">violet</button>
<button className="button blue inverted">blue</button>
<button className="button teal inverted">teal</button>
<button className="button green inverted">green</button>
<button className="button yellow inverted">yellow</button>
<button className="button orange inverted">orange</button>
<button className="button red inverted">red</button>
<button className="disabled button red inverted">Disabled</button>`}
            </Highlight>
        </div>);
    }

}