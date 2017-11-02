import React, {Component} from "react";
import {Input} from "react-wui";
import ComponentDescTemplate from "../ComponentDescTemplate";

export default class InputType extends ComponentDescTemplate {
    renderBlockquote() {
        return "其他类型的输入框";
    }

    renderComponent() {
        return <div>
            <Input type="number" placeholder="type=number"/>
            <br/><br/>
            <Input type="date"/>
        </div>;
    }

    renderReactCode() {
        return `
import {Input} from "react-wui";

<Input type="number" placeholder="type=number"/>
<Input type="date"/>
`;
    }

    renderHtmlCode() {
        return `
<input class="input" type="number" placeholder="type=number"/>
<input class="input" type="date"/>    
`;
    }
}