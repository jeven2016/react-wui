import React, {Component, PropTypes} from 'react';
import Highlight from "react-highlight";

export default class InputSize extends Component {
    render() {
        return (
            <div className="elem-line">
                <blockquote className="text color-blue">Size</blockquote>
                <div className="elem-line cross-line">
                    <input type="text" className="input block large" placeholder="large..."/>
                    <input type="text" className="input block medium" placeholder="medium..."/>
                    <input type="text" className="input block" placeholder="default..."/>
                    <input type="text" className="input block small" placeholder="small..."/>
                </div>
                <Highlight className="html">
                    {` <input type="text" class="input large" placeholder="large..."/>
<input type="text" class="input medium" placeholder="medium..."/>
<input type="text" class="input" placeholder="default..."/>
<input type="text" class="input small" placeholder="small..."/>`
                    }
                </Highlight>
            </div>
        );
    }

}