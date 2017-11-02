import React, {Component} from "react";
import {Input} from "react-wui";
import ComponentDescTemplate from '../ComponentDescTemplate';

export default class BasicInput extends ComponentDescTemplate {
    renderBlockquote() {
        return "普通Input";
    }

    renderComponent() {
        return <Input placeholder="text..."/>;
    }

    renderReactCode() {
        return `
import {Input} from "react-wui";

<Input placeholder="text..."/>        
`;
    }

    renderHtmlCode() {
        return `
<input type="text" className="input" placeholder="text..."/>        
`;
    }
}