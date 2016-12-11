import React, {Component, PropTypes} from 'react';
import Highlight from "react-highlight";

export default class CircularButton extends Component {
    render() {
        return (<div>
            <blockquote className="elem-line">
                <p className="text color-blue">Circular Buttons 圆形按钮</p>
            </blockquote>
            <div className="elem-line">
                <button className="circle blue outline button">
                    <i className="fa fa-google"/>
                </button>
                <button className="circle brown outline button ">
                    <i className="fa fa-facebook"/>
                </button>
                <button className="circle green outline button">
                    <i className="fa fa-amazon"/>
                </button>
                <button className="circle orange outline button">
                    <i className="fa fa-microphone"/>
                </button>
            </div>
            <Highlight className="html">
                {` <button class="circle blue outline button">
    <i class="fa fa-google"/>
</button>
<button class="circle brown outline button ">
    <i class="fa fa-facebook"/>
</button>
<button class="circle green outline button">
    <i class="fa fa-amazon"/>
</button>
<button class="circle orange outline button">
    <i class="fa fa-microphone"/>
</button>`}
            </Highlight>
            <blockquote className="elem-line">
                <p className="text color-blue">
                    Inverted Circular Buttons 圆形按钮
                </p>

            </blockquote>
            <div className="button-add-on-container bg-color-black">
                <button className="inverted circle button blue outline">
                    <i className="fa fa-google"></i>
                </button>
                <button className="inverted circle button brown outline">
                    <i className="fa fa-facebook"></i>
                </button>
                <button className="inverted circle button green outline">
                    <i className="fa fa-amazon"></i>
                </button>
                <button className="inverted circle button orange outline">
                    <i className="fa fa-microphone"></i>
                </button>
            </div>
            <Highlight className="html">
                {`<button class="inverted circle button blue outline">
    <i class="fa fa-google"></i>
</button>
<button class="inverted circle button brown outline">
    <i class="fa fa-facebook"></i>
</button>
<button class="inverted circle button green outline">
    <i class="fa fa-amazon"></i>
</button>
<button class="inverted circle button orange outline">
    <i class="fa fa-microphone"></i>
</button>`}

            </Highlight>
        </div>);
    }

}