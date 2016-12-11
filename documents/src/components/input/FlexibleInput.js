import React from 'react';
import Highlight from "react-highlight";

const FlexibleInput = () => {
    return (
        <div className="elem-line">
            <blockquote className="text color-blue">Flexible Input Group 弹性输入框</blockquote>
            <div className="elem-line cross-line">
                <div className="input-group flexible">
                    <div className="label">
                        <i className="fa fa-calculator"></i>
                    </div>
                    <input type="text" className="input element" placeholder="input..."/>
                    <a className="label primary button">GO</a>
                </div>
            </div>
            <Highlight className="html">
                {`<div class="input-group flexible">
    <div class="label">
        <i class="fa fa-calculator"></i>
    </div>
    <input type="text" class="input element" placeholder="input..."/>
    <div class="label">
        <i class="fa fa-calculator"></i>
    </div>
    <a class="label primary button">GO</a>
</div>`
                }
            </Highlight>
        </div>
    );
};

export default FlexibleInput;