import React, {Component, PropTypes} from 'react';
import Highlight from "react-highlight";

const BasicInput = () => {
    return (
        <div className="elem-line">
            <blockquote className="text color-blue">Basic Input</blockquote>
            <div className="button-add-on-container">
                <input type="text" className="input medium" placeholder="text..."/>
            </div>
            <Highlight className="html">
                {`<input type="text" class="input medium" placeholder="text..."/>`}
            </Highlight>
        </div>
    );
};

export default BasicInput;