import React, {Component, PropTypes} from 'react';
import Highlight from "react-highlight";

export default class BasicButtonGroup extends Component {
    render() {
        return (<div>
            <blockquote className="text color-blue">Basic Button Group</blockquote>
            <div className="elem-line">
                <div className="button-group">
                    <button className="button">
                        Create
                    </button>
                    <button className="button">Modify</button>
                    <button className="button">Delete</button>
                    <button className="button">View</button>
                </div>
            </div>
            <Highlight className="html">
                {`<div className="button-group">
<button class="button">
    Create
</button>
<button class="button">Modify</button>
<button class="button">Delete</button>
<button class="button">View</button>`
                }
            </Highlight>
        </div>);
    }

}