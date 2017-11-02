import React, {Component} from "react";
import {Input, Icon} from "react-wui";
import ComponentDescTemplate from '../ComponentDescTemplate';

export default class IconInput extends ComponentDescTemplate {
    renderBlockquote() {
        return "显示Icon的输入框";
    }

    renderComponent() {
        return <div>
            <div>
                <Input.IconInput>
                    <Input placeholder="Icon input..."/>
                    <Icon className="fa fa-search icon"/>
                </Input.IconInput>
                &nbsp;&nbsp;
                <Input.IconInput leftIcon>
                    <Input placeholder="Icon input..."/>
                    <Icon className="fa fa-search icon"/>
                </Input.IconInput>
            </div>
            <br/>
            <Input.IconInput size="large" block>
                <Input placeholder="Icon input..."/>
                <Icon className="fa fa-search icon"/>
            </Input.IconInput>
            <br/>
            <Input.IconInput size="medium" block>
                <Input placeholder="Icon input..."/>
                <Icon className="fa fa-search icon"/>
            </Input.IconInput>
            <br/>
            <Input.IconInput size="small" block>
                <Input placeholder="Icon input..."/>
                <Icon className="fa fa-search icon"/>
            </Input.IconInput>

        </div>;
    }

    renderReactCode() {
        return `
import {Input, Icon} from "react-wui";

<Input.IconInput>
    <Input placeholder="Icon input..."/>
    <Icon className="fa fa-search icon"/>
</Input.IconInput>

<Input.IconInput leftIcon>
    <Input placeholder="Icon input..."/>
    <Icon className="fa fa-search icon"/>
</Input.IconInput>  

<Input.IconInput size="large" block>
    <Input placeholder="Icon input..."/>
    <Icon className="fa fa-search icon"/>
</Input.IconInput>

<Input.IconInput size="medium" block>
    <Input placeholder="Icon input..."/>
    <Icon className="fa fa-search icon"/>
</Input.IconInput>
 
<Input.IconInput size="small" block>
    <Input placeholder="Icon input..."/>
    <Icon className="fa fa-search icon"/>
</Input.IconInput>
`;
    }

    renderHtmlCode() {
        return `
<div class="icon-input">
    <input type="text" class="input" placeholder="Icon input...">
    <i class="fa fa-search icon"></i>
</div>      
`;
    }

}