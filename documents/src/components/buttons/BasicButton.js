import React, {Component, PropTypes} from 'react';
import Highlight from "react-highlight";

export default class BasicButton extends Component {
    static propTypes = {};

    constructor(args) {
        super(args);
        this.state = {}
    }

    render() {
        return (
            <div className="elem-line">
                <blockquote className="border primary">
                    <h2 className="text color-blue">按钮</h2>
                    <p className="elem-line">默认情况下，UI提供两种风格的按钮。分别是灰色和Primay蓝色的按钮。但是通过<a href="#button-add-on">附属组件</a>可以获得更多丰富的按钮样式。
                    </p>
                    <p className="elem-line text comment">以下示例中，class中如果有多个样式名，样式名的先后顺序不会对显示有任何影响。
                        比如 <span className="text color-brown">class="button primary"</span>与
                        <span className="text color-brown">class="primary button"</span>在显示上不会有差别.
                    </p>
                </blockquote>
                <blockquote>
                    <p className="text color-blue">Basic Button</p>
                </blockquote>
                <div className="elem-line">
                    <button className="button">
                        Create
                    </button>
                    <button className="button active">
                        Active
                    </button>
                    <button className="button shadow">
                        Shadow
                    </button>
                    <button className="button clear-radius">
                        Clear-radius
                    </button>
                </div>
                <Highlight className="html">

                    {`<button class="button">
    Create
</button>
<button class="button active">
    Active
</button>
<button class="button shadow">
    Shadow
</button>
 <button className="button clear-radius">
    Clear-radius
</button>`}
                </Highlight>
            </div>
        );
    }
}