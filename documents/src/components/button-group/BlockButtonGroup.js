import React, {Component} from "react";
import {ButtonGroup, Button} from 'react-wui';
import ComponentDescTemplate from '../ComponentDescTemplate';

export default class BlockButtonGroup extends ComponentDescTemplate {

    renderBlockquote() {
        return (<div>
            <p className="text color-blue">整行显示的Button Group</p>
            <p className="text comment">注意：按钮只可以使用&lt;a/&gt;标签, 不可使用button。</p>
        </div>);
    }

    renderComponent() {
        return <ButtonGroup block>
            <a href="#" className="button">left</a>
            <a href="#" className="button">center</a>
            <a href="#" className="button">right</a>
        </ButtonGroup>;
    }

    renderReactCode() {
        return `
import {ButtonGroup} from 'react-wui';

<ButtonGroup block>
    <a href="#" className="button">left</a>
    <a href="#" className="button">center</a>
    <a href="#" className="button">right</a>
</ButtonGroup>`;
    }

    renderHtmlCode() {
        return ` 
 <div className="button-group block">
    <a href="#" className="button">left</a>
    <a href="#" className="button">center</a>
    <a href="#" className="button">right</a>
</div>`
    }


}