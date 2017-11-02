import React, {Component} from "react";
import {ButtonGroup, Button} from "react-wui";
import ComponentDescTemplate from "../../ComponentDescTemplate";


export default class OutlinedButtonGroup extends ComponentDescTemplate {

    renderBlockquote() {
        return "内空的按钮";
    }

    renderComponent() {
        return <ButtonGroup outline>
            <Button color="black" text="Black"/>
            <Button color="brown">brown</Button>
            <Button color="pink">pink</Button>
            <Button color="purple">purple</Button>
            <Button color="violet">violet</Button>
            <Button color="blue">blue</Button>
            <Button color="teal">teal</Button>
            <Button color="green">green</Button>
            <Button color="yellow">yellow</Button>
            <Button color="orange">orange</Button>
            <Button color="red">red</Button>
        </ButtonGroup>;
    }

    renderReactCode() {
        return `
import {ButtonGroup, Button} from "react-wui";

<ButtonGroup outline>
    <Button color="black" text="Black"></Button>
    <Button color="brown">brown</Button>
    <Button color="pink">pink</Button>
    <Button color="purple">purple</Button>
    <Button color="violet">violet</Button>
    <Button color="blue">blue</Button>
    <Button color="teal">teal</Button>
    <Button color="green">green</Button>
    <Button color="yellow">yellow</Button>
    <Button color="orange">orange</Button>
    <Button color="red">red</Button>
</ButtonGroup>
`;
    }

    renderHtmlCode() {
        return `
<div class="button-group">
    <button class="button black outline">black</button>
    <button class="button brown outline">brown</button>
    <button class="button pink outline">pink</button>
    <button class="button purple outline">purple</button>
    <button class="button violet outline">violet</button>
    <button class="button blue outline">blue</button>
    <button class="button teal outline">teal</button>
    <button class="button green outline">green</button>
    <button class="button yellow outline">yellow</button>
    <button class="button orange outline">orange</button>
    <button class="button red outline">red</button>
</div>
`;
    }
}