import React, {Component, PropTypes} from 'react';
import Highlight from "react-highlight";

export default class BlockButton extends Component {
    static propTypes = {};

    constructor(args) {
        super(args);
        this.state = {}
    }

    render() {
        return (
            <div>
                <blockquote className="elem-line">
                    <p className="text color-blue">Block Button </p>
                    <p className="text comment">行级Button,宽度为100%，会水平占据整行。</p>
                </blockquote>
                <div className="elem-line">
                    <div className="card clear-radius" style={{width: '60%'}}>
                        <div className="card-body">
                            <button className="large block button">Button</button>
                            <button className="primary large block button">Primary Button</button>
                        </div>
                    </div>
                </div>
                <Highlight className="html">
                    {`<button class="large block button">Button</button>
<button class="primary large block button">Primary Button</button>`}
                </Highlight>
            </div>
        );
    }

}