import React, {Component, PropTypes} from 'react';
import Highlight from "react-highlight";

export default class PrimaryButtonGroup extends Component {
    render() {
        return (<div className="elem-line">
            <blockquote className="text color-blue">Primary Button Group</blockquote>
            <div className="elem-line">
                <div className="button-group">
                    <button className="button primary">
                        Create
                    </button>
                    <button className="button primary">Modify</button>
                    <button className="button primary">Delete</button>
                    <button className="button primary">View</button>
                </div>
            </div>
            <Highlight className="html">
                {`<div className="button-group">
<button class="button primary">
    Create
</button>
<button class="button primary">Modify</button>
<button class="button primary">Delete</button>
<button class="button primary">View</button>`
                }
            </Highlight>
        </div>);
    }

}