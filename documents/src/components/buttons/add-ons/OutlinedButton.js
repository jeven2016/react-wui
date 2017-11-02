import React, {Component} from "react";
import {Button} from 'react-wui';
import ComponentDescTemplate from '../../ComponentDescTemplate';

export default class OutlinedButton extends ComponentDescTemplate {

    renderBlockquote() {
        return <div>
            <p className="text color-blue">内空的按钮</p>
        </div>;
    }

    renderComponent() {
        return <div>
            <Button outline color="black">black</Button>
            <Button outline color="brown">brown</Button>
            <Button outline color="pink">pink</Button>
            <Button outline color="purple">purple</Button>
            <Button outline color="violet">violet</Button>
            <Button outline color="blue">blue</Button>
            <br/><br/>
            <Button outline color="teal">teal</Button>
            <Button outline color="green">green</Button>
            <Button outline color="yellow">yellow</Button>
            <Button outline color="orange">orange</Button>
            <Button outline color="red">red</Button>
            <Button outline disabled color="red">Disabled</Button>
        </div>;
    }

    renderReactCode() {
        return `
<Button outline color="black">black</Button>
<Button outline color="brown">brown</Button>
<Button outline color="pink">pink</Button>
<Button outline color="purple">purple</Button>
<Button outline color="violet">violet</Button>
<Button outline color="blue">blue</Button>
<Button outline color="teal">teal</Button>
<Button outline color="green">green</Button>
<Button outline color="yellow">yellow</Button>
<Button outline color="orange">orange</Button>
<Button outline color="red">red</Button>
<Button outline disabled color="red">Disabled</Button>        
`;
    }

    renderHtmlCode() {
        return `
<button className="button outline black">black</button>
<button className="button outline brown">brown</button>
<button className="button outline pink">pink</button>
<button className="button outline purple">purple</button>
<button className="button outline violet">violet</button>

<button className="button outline blue">blue</button>
<button className="button outline teal">teal</button>
<button className="button outline green">green</button>
<button className="button outline yellow">yellow</button>
<button className="button outline orange">orange</button>
<button className="button outline red">red</button>
<button className="disabled button outline red">Disabled</button>        
`;
    }
}