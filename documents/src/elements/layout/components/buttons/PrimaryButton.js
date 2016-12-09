import React, {Component, PropTypes} from 'react';
import Highlight from "react-highlight";

export default class PrimaryButton extends Component {
    static propTypes = {};

    constructor(args) {
        super(args);
        this.state = {}
    }

    render() {
        return (
            <div>
                <blockquote className="elem-line">
                    <p className="text color-blue">Primary Button </p>
                </blockquote>
                <div className="elem-line">
                    <button className="button primary">
                        Create
                    </button>
                    <button className="button primary active">
                        Active
                    </button>
                    <button className="button primary shadow">
                        Shadow
                    </button>
                </div>
                <Highlight className="html">
                    {`
<button class="button primary">
    Create
</button>
<button class="button primary active">
    Active
</button>
<button class="button primary shadow">
    Shadow
</button>`}
                </Highlight>
            </div>
        );
    }

}