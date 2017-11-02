import React, {Component} from "react";
import {Input} from "react-wui";
import ComponentDescTemplate from "../ComponentDescTemplate";

export default class InputSize extends ComponentDescTemplate {
    renderBlockquote() {
        return "Input的大小";
    }

    renderComponent() {
        return <div>
            <Input size="large" block placeholder="large..."/><br/>
            <Input size="medium" block placeholder="medium..."/><br/>
            <Input block placeholder="default..."/><br/>
            <Input size="small" block placeholder="small..."/><br/>
        </div>;
    }

    renderReactCode() {
        return `
import {Input} from "react-wui";

<Input size="large" block placeholder="large..."/>
<Input size="medium" block placeholder="medium..."/>
<Input block placeholder="default..."/>
<Input size="small" block placeholder="small..."/>    
`;
    }

    renderHtmlCode() {
        return `
<input type="text" class="input block large" placeholder="large..."/>
<input type="text" class="input block medium" placeholder="medium..."/>
<input type="text" class="input block" placeholder="default..."/>
<input type="text" class="input block small" placeholder="small..."/>       
`;
    }
}