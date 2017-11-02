import React, {Component} from "react";
import Highlight from "react-highlight";

export default class ButtonGroupAddOn extends Component {
    render() {
        return (<div>
                <blockquote className="elem-line border primary">
                    <h2 className="elem-line text color-blue">Button Group add-ons 附属组件</h2>
                    <p className="text color-brown">
                        除了上面的基础组件外，您还可以附属组件获取到更丰富的按钮。
                        默认情况下bundle文件包含了所有基础组件、附属组件。
                    </p>
                </blockquote>
            </div>
        );
    }
}