import React, {Component, PropTypes} from 'react';
import Highlight from "react-highlight";

export default class OutlinedButton extends Component {
    render() {
        return (<div>
            <blockquote className="elem-line">
                <p className="text color-blue">Outlined Buttons 空心按钮</p>
            </blockquote>
            <div className="button-add-on-container">
                    <button className="button black outline">black</button>
                    <button className="button brown outline">brown</button>
                    <button className="button pink outline">pink</button>
                    <button className="button purple outline">purple</button>
                    <button className="button violet outline">violet</button>
                    <button className="button blue outline">blue</button>
                    <button className="button teal outline">teal</button>
                    <button className="button green outline">green</button>
                    <button className="button yellow outline">yellow</button>
                    <button className="button orange outline">orange</button>
                    <button className="button red outline">red</button>
                    <button className="disabled button red outline">Disabled</button>
            </div>
            < Highlight className="html">
                {` <button class="button black outline">black</button>
<button class="button brown outline">brown</button>
<button class="button pink outline">pink</button>
<button class="button purple outline">purple</button>
<button class="button violet outline">violet</button>
<button class="button blue outline">blue</button>
<button class="button teal outline">teal</button>
<button class="button green outline">green</button>
<button class="button yellow outline">yellow</button>
<button class="button orange outline">orange</button>
<button class="button red outline">red</button>
<button class="disabled button red outline">Disabled</button>`}
            </Highlight>
        </div>);
    }

}