import React, {Component, PropTypes} from 'react';
import Highlight from "react-highlight";

export default class IconButton extends Component {
    static propTypes = {};

    constructor(args) {
        super(args);
        this.state = {}
    }

    render() {
        return (
            <div>
                <blockquote className="elem-line">
                    <p className="text color-blue">Icon Button </p>
                    <p className="text comment">Icon Button 需要依赖第三方的icon库，您可以选择比如font-awesome
                        或者iconfront之类的库文件.</p>
                </blockquote>
                <div className="elem-line">
                    <button className="button clear-radius">
                        <i className="fa fa-plus"/> Add
                    </button>
                    <button className="button primary">
                        <i className="fa fa-plane"/> Flight
                    </button>
                    <button className="large circle button">
                        <i className="fa fa-plus"/>
                    </button>
                </div>
                <Highlight className="html">
                    {`
<button className="button clear-radius">
    <i class="fa fa-plus"/> Add
</button>
<button class="button primary">
    <i class="fa fa-plane"/> Flight
</button>
<button class="large circle button">
    <i class="fa fa-plus"/>
</button>`}
                </Highlight>
            </div>
        );
    }

}