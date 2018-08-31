import React, {Component} from "react";
import {Input} from "react-wui";
import ComponentDescTemplate from '../ComponentDescTemplate';

export default class BasicInput extends ComponentDescTemplate {
    renderBlockquote() {
        return "普通Input";
    }

    renderComponent() {
        return <div>
            <Input placeholder="text..."/>&nbsp;&nbsp;
            <Input placeholder="disabled" disabled/>&nbsp;&nbsp;
            <Input placeholder="readOnly" readOnly={true}/>
        </div>;
    }

    renderReactCode() {
        return `
import {Input} from "react-wui";

<Input placeholder="text..."/> 
<Input placeholder="disabled" disabled/>  
<Input placeholder="readOnly" readOnly={true}/>     
`;
    }

    renderHtmlCode() {
        return `
<input type="text" className="input" placeholder="text..."/>        
`;
    }
}