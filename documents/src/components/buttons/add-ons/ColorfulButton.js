import React, {Component} from "react";
import {Button} from 'react-wui';
import ComponentDescTemplate from '../../ComponentDescTemplate';


export default class ColorfulButton extends ComponentDescTemplate {

    renderBlockquote() {
        return <div>
            <p className="text color-blue">色彩丰富的按钮</p>
            <p className="text comment">在附属组件中提供了11种色彩丰富的按钮</p>
        </div>;
    }

    renderComponent() {
        return <div>
            <Button color="black">black</Button>
            <Button color="brown">brown</Button>
            <Button color="pink">pink</Button>
            <Button color="purple">purple</Button>
            <Button color="violet">violet</Button>
            <Button color="blue">blue</Button>
            <br/><br/>
            <Button color="teal">teal</Button>
            <Button color="green">green</Button>
            <Button color="yellow">yellow</Button>
            <Button color="orange">orange</Button>
            <Button color="red">red</Button>
            <Button disabled color="red">Disabled</Button>
        </div>;
    }

    renderReactCode() {
        return `
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
<Button disabled color="red">Disabled</Button>        
`;
    }

    renderHtmlCode() {
        return `
<button className="button black">black</button>
<button className="button brown">brown</button>
<button className="button pink">pink</button>
<button className="button purple">purple</button>
<button className="button violet">violet</button>

<button className="button blue">blue</button>
<button className="button teal">teal</button>
<button className="button green">green</button>
<button className="button yellow">yellow</button>
<button className="button orange">orange</button>
<button className="button red">red</button>
<button className="disabled button red">Disabled</button>        
`;
    }
}