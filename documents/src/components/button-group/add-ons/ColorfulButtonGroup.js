import React from 'react';
import {ButtonGroup, Button} from "react-wui";
import ComponentDescTemplate from "../../ComponentDescTemplate";


export default class ColorfulButtonGroup extends ComponentDescTemplate {

    renderBlockquote() {
        return "不同色彩的按钮";
    }

    renderComponent() {
        return <ButtonGroup>
            <Button color="black" nativeType="submit">Black</Button>
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

<ButtonGroup>
    <Button color="black">black</Button>
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
    <button class="button black">black</button>
    <button class="button brown">brown</button>
    <button class="button pink">pink</button>
    <button class="button purple">purple</button>
    <button class="button violet">violet</button>
    <button class="button blue">blue</button>
    <button class="button teal">teal</button>
    <button class="button green">green</button>
    <button class="button yellow">yellow</button>
    <button class="button orange">orange</button>
    <button class="button red">red</button>
</div>
`;
    }
}