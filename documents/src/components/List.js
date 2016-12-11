import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class List extends Component {
    static propTypes = {};

    constructor(args) {
        super(args);
        this.state = {}
    }

    render() {
        return (
            <ul className="block menu">
                <li className="item"><Link to="/components/button">Button 按钮</Link></li>
                <li className="divider"></li>
                <li className="item"><Link to="/components/button-group">Button Group 按钮组</Link></li>
                <li className="divider"></li>
                <li className="item"><Link to="/components/input">Input 输入框</Link></li>
                <li className="divider"></li>
                <li className="item"><Link to="/components/dropdown">Dropdown 下拉列表</Link></li>
                <li className="divider"></li>
                <li className="item">Card 卡片</li>
                <li className="divider"></li>
                <li className="item">Layout 布局</li>
                <li className="divider"></li>
                <li className="item">Form 表单</li>
                <li className="divider"></li>
                <li className="item">Dialog 对话框</li>
                <li className="divider"></li>
                <li className="item">Menu 菜单</li>
                <li className="divider"></li>
                <li className="item">Tab</li>
                <li className="divider"></li>
                <li className="item">Table 表格</li>
                <li className="divider"></li>
                <li className="item">Popover</li>
                <li className="divider"></li>

                <li className="item">Search Select</li>
                <li className="divider"></li>
                <li className="item">Date Picker</li>
                <li className="divider"></li>
                <li className="item">Time Picker</li>
                <li className="divider"></li>
                <li className="item">Loading</li>
                <li className="divider"></li>
                <li className="item">Drawer</li>
                <li className="divider"></li>
                <li className="item">Progressbar</li>
                <li className="divider"></li>
                <li className="item">Tree</li>
                <li className="divider"></li>
                <li className="item">Chart</li>
                <li className="divider"></li>
                <li className="item">Animation</li>
                <li className="divider"></li>
            </ul>
        );
    }

}