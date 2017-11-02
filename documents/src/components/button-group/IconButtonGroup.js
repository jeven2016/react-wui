import React, {Component} from "react";
import {ButtonGroup, Button} from "react-wui";
import ComponentDescTemplate from "../ComponentDescTemplate";


export default class IconButtonGroup extends ComponentDescTemplate {
    renderBlockquote() {
        return "Button Group with icons";
    }

    renderComponent() {
        return <ButtonGroup>
            <Button><i className="fa fa-wechat"/></Button>
            <Button><i className="fa fa-weibo"/></Button>
            <Button><i className="fa fa-qq"/></Button>
            <Button><i className="fa fa-facebook"/></Button>
            <Button><i className="fa fa-twitter"/></Button>
        </ButtonGroup>;
    }

    renderReactCode() {
        return `
import {ButtonGroup, Button} from "react-wui";

<ButtonGroup>
    <Button><i className="fa fa-wechat"/></Button>
    <Button><i className="fa fa-weibo"/></Button>
    <Button><i className="fa fa-qq"/></Button>
    <Button><i className="fa fa-facebook"/></Button>
    <Button><i className="fa fa-twitter"/></Button>
</ButtonGroup>       
`;
    }

    renderHtmlCode() {
        return `
<div class="button-group">
    <button class="button"><i class="fa fa-wechat"/></button>
    <button class="button"><i class="fa fa-weibo"/></button>
    <button class="button"><i class="fa fa-qq"/></button>
    <button class="button"><i class="fa fa-facebook"/></button>
    <button class="button"><i class="fa fa-twitter"/></button>
</div>`;
    }

}