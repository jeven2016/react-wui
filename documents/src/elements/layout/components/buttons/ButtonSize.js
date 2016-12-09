import React, {Component, PropTypes} from 'react';
import Highlight from "react-highlight";

export default class ButtonSize extends Component {
    static propTypes = {};

    constructor(args) {
        super(args);
        this.state = {}
    }

    render() {
        return (
            <div>
                <blockquote className="elem-line">
                    <p className="text color-blue">Button Size</p>
                </blockquote>
                <div className="elem-line">
                    <button className="large button">
                        Large
                    </button>
                    <button className="button">
                        Default
                    </button>
                    <button className="medium button">
                        Medium
                    </button>
                    <button className="small button">
                        Small
                    </button>
                </div>
                <Highlight className="html">
                    {`<button class="large button">
    Large
</button>
<button class="button">
    Default
</button>
<button class="medium button">
    Medium
</button>
<button class="small button">
    Small
</button>`}
                </Highlight>
            </div>
        );
    }

}