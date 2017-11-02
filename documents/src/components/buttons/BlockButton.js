import React, {Component} from "react";
import {Button} from 'react-wui';
import ComponentDescTemplate from '../ComponentDescTemplate';

export default class BlockButton extends ComponentDescTemplate {
    renderBlockquote() {
        return (
            <div>
                <p className="text color-blue">行级显示的按钮 </p>
                <p className="text comment">占据整行的Button,宽度为100%，会水平占据整行。</p>
            </div>
        );
    }

    renderComponent() {
        return (
            <div className="card clear-radius" style={{width: '100%'}}>
                <div className="card-body">
                    <Button size="large" block>Button</Button>
                    <Button type="primary" size="large" block>Primary Button</Button>
                </div>
            </div>
        );
    }

    renderReactCode() {
        return `
//import this button from react-wui       
import {Button} form 'react-wui';

<div className="card-body">
    <Button size="large" block>Button</Button>
    <button type="primary" size="large" block>Primary Button</button>
</div>
`;
    }

    renderHtmlCode() {
        return `
<div className="card-body">
    <button className="large block button">Button</button>
    <button className="primary large block button">Primary Button</button>
</div>      
`;
    }


}