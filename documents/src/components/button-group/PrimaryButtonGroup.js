import React, {Component} from "react";
import {ButtonGroup, Button} from "react-wui";
import ComponentDescTemplate from "../ComponentDescTemplate";


export default class PrimaryButtonGroup extends ComponentDescTemplate {
    renderBlockquote() {
        return "Primary Button Group";
    }

    renderComponent() {
        return <ButtonGroup>
            <Button type="primary">Create</Button>
            <Button disabled>Disabled</Button>
            <Button>Delete</Button>
            <Button>View</Button>
        </ButtonGroup>;
    }

    renderReactCode() {
        return `
import {ButtonGroup, Button} from "react-wui";

<ButtonGroup>
    <Button type="primary">Create</Button>
    <Button disabled>Disabled</Button>
    <Button>Delete</Button>
    <Button>View</Button>
</ButtonGroup>;  
`;
    }

    renderHtmlCode() {
        return `
<div className="button-group">
    <button class="button primary">Create</button>
    <button class="button primary">Modify</button>
    <button class="button primary">Delete</button>
    <button class="button primary">View</button>
</div>        
`;
    }

}