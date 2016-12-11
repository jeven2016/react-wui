import React, {Component, PropTypes} from 'react';

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
                        除了上面的基础组件外，您还可以附属组件获取到更丰富的按钮。但需要注意的是除了加载wui.css文件外，需要再
                        额外加载<span className="text color-blue">wui-add-ons</span>样式文件，但如果使用的是
                        <span className="text color-blue">wui-bundle.css</span>文件，则无需分别加载不同的文件，
                        默认情况下bundle文件包含了所有基础组件、附属组件。
                    </p>
                </blockquote>
            </div>
        );
    }

}