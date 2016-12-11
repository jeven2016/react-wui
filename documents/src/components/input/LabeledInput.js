import React, {Component, PropTypes} from 'react';
import Highlight from "react-highlight";

//?
export default class LabeledInput extends Component {
    render() {
        return (
            <div className="elem-line">
                <blockquote className="text color-blue">Labeled Input</blockquote>
                <div className="elem-line cross-line">
                    <div className="input-group">
                        <div className="label">$</div>
                        <input type="text" className="input element" placeholder="Money..."/>
                            <div className="label">
                                <i className="fa fa-calculator"></i>
                            </div>
                    </div>

                    <div className="input-group">
                        <div className="label">$</div>
                        <div className="label">
                            <i className="fa fa-calculator"></i>
                        </div>
                        <input type="text" className="input element" placeholder="input..."/>
                        <div className="label">$</div>
                        <div className="label">$</div>
                    </div>
                </div>
                <Highlight className="html">
                    {`<div class="input-group">
    <div class="label">$</div>
    <input type="text" class="input element" placeholder="input..."/>
    <div class="label">
        <i class="fa fa-calculator"></i>
    </div>
</div>

<div class="input-group">
    <div class="label">$</div>
    <div class="label">
        <i class="fa fa-calculator"></i>
    </div>
    <input type="text" class="input element" placeholder="input..."/>
    <div class="label">$</div>
    <div className="label">$</div>
</div>`
                    }
                </Highlight>
            </div>
        );
    }

}