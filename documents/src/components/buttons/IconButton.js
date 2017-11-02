import React, {Component} from "react";
import {Button} from 'react-wui';
import ComponentDescTemplate from '../ComponentDescTemplate';

export default class IconButton extends ComponentDescTemplate {
    renderBlockquote() {
        return (
            <div>
                <p className="text color-blue">Icon Button </p>
                <p className="text comment">Icon Button 需要依赖第三方的icon库，您可以选择比如font-awesome
                    或者iconfront之类的库文件. 这里使用了font-awesome库进行展示。
                </p>
            </div>
        );
    }

    renderComponent() {
        return (
            <div>
                <Button>
                    <i className="fa fa-plus"/> Add
                </Button>
                <Button type="circle" size="large">
                    <i className="fa fa-plus"/>
                </Button>
            </div>
        );
    }

    renderReactCode() {
        return `
//import this button from react-wui       
import {Button} form 'react-wui';

//download font-awesome library and import the its file
import '../libs/fa/css/font-awesome.min.css';

<Button><i className="fa fa-plus"/> Add</Button>
<Button type="circle" size="large"><i className="fa fa-plus"/></Button>
`;
    }

    renderHtmlCode() {
        return `
<button class="button"><i className="fa fa-plus"/> Add</button>
<button class="large circle button"><i className="fa fa-plus"/></button>       
`;
    }

}