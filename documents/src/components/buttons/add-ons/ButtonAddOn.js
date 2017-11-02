import React, {Component} from "react";

export default class ButtonAddOn extends Component {
    static propTypes = {};

    constructor(args) {
        super(args);
        this.state = {}
    }

    render() {
        return (<div>
                <blockquote className="elem-line border primary">
                    <h2 className="elem-line text color-blue">Button add-ons 附属组件</h2>
                    <p className="text color-brown">
                        除了上面的基础组件外，您还可以附属组件获取到更丰富的按钮,
                        默认情况下bundle文件包含了所有基础组件、附属组件。
                    </p>
                </blockquote>
            </div>
        );
    }

}