import React, {Component, PropTypes} from 'react';
import Highlight from "react-highlight";

export default class BlockButtonGroup extends Component {
    render() {
        return (<div className="elem-line">
            <blockquote className="text color-blue">Block Button Group</blockquote>
            <div className="elem-line">
                <div className="button-group block">
                    <a href="#" className="button">left</a>
                    <a href="#" className="button">center</a>
                    <a href="#" className="button">right</a>
                </div>
            </div>
            <Highlight className="html">
                {` <div className="button-group block">
    <a href="#" className="button">left</a>
    <a href="#" className="button">center</a>
    <a className="button">right</a>
</div>`
                }
            </Highlight>
        </div>);
    }

}