import React, {Component} from "react";
import {Button} from 'react-wui';
import ComponentDescTemplate from '../ComponentDescTemplate';

export default class BasicButton extends ComponentDescTemplate {
    static propTypes = {};

    renderBlockquote() {
        return '普通按钮';
    }

    renderComponent() {
        return (<div>
            <Button onClick={() => alert('alert')}>
                Alert
            </Button>
            <Button active>
                Active
            </Button>
            <Button disabled>
                Disabled
            </Button>
            <Button className="button clear-radius">
                Clear-radius
            </Button>
        </div>);
    }

    renderHtmlCode() {
        return `
<button class="button">Alert</button>

<button class="button active">Active</button>

<button class="disabled button">Disabled</button>

<button className="button clear-radius">Clear-radius</button>`;
    }

    renderReactCode() {
        return `
//import this button from react-wui       
import {Button} form 'react-wui';
        
<Button onClick={()=> alert('alert')}>Alert</Button>

<Button active>Active</Button>

<Button disabled>Disabled</Button>

<Button className="button clear-radius">Clear-radius</Button>`;
    }

    render() {
        return (
            <div className="elem-line">
                <blockquote className="border primary">
                    <h2 className="text color-blue">按钮</h2>
                    <p className="elem-line">默认情况下，UI提供两种风格的按钮。分别是灰色和Primay蓝色的按钮。但是通过<a href="#button-add-on">附属组件</a>可以获得更多丰富的按钮样式。
                    </p>
                </blockquote>
                {super.render()}
            </div>
        );
    }
}