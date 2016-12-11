import React, {Component, PropTypes} from 'react';
import Highlight from "react-highlight";

export default class IconInput extends Component {
    render() {
        return (
            <div className="elem-line">
                <blockquote className="text color-blue">Icon Input</blockquote>
                <div className="elem-line">
                    <div className="icon-input">
                        <input type="text" className="input" placeholder="icon input..."/>
                        <i className="fa fa-search icon"></i>
                    </div>
                    &nbsp;&nbsp;
                    <div className="icon-input left-icon">
                        <input type="text" className="input" placeholder="icon input..."/>
                        <i className="fa fa-search icon"></i>
                    </div>
                </div>
                <Highlight className="html">
                    {`<div type="text" class="icon-input">
    <input class="input" placeholder="icon input...">
        <i class="fa fa-search icon"></i>
</div>
<div class="icon-input left-icon">
    <input type="text" class="input" placeholder="icon input...">
        <i class="fa fa-search icon"></i>
</div>`
                    }
                </Highlight>
            </div>
        );
    }

}