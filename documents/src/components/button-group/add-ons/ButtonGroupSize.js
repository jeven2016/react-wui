import React from 'react';
import {ButtonGroup, Button} from "react-wui";
import ComponentDescTemplate from "../../ComponentDescTemplate";

export default class ButtonGroupSize extends ComponentDescTemplate {

    renderBlockquote() {
        return "Button Group的大小";
    }

    renderComponent() {
        return <div>
            <ButtonGroup size="large">
                <Button>Create</Button>
                <Button>Modify</Button>
                <Button>Delete</Button>
                <Button>View</Button>
            </ButtonGroup>
            <br/>
            <ButtonGroup size="medium">
                <Button>Create</Button>
                <Button>Modify</Button>
                <Button>Delete</Button>
                <Button>View</Button>
            </ButtonGroup>
            <br/>
            <ButtonGroup size="small">
                <Button>Create</Button>
                <Button>Modify</Button>
                <Button>Delete</Button>
                <Button>View</Button>
            </ButtonGroup>
        </div>;
    }

    renderReactCode() {
        return `
import {ButtonGroup, Button} from "react-wui";

<ButtonGroup size="large">
    <Button>Create</Button>
    <Button>Modify</Button>
    <Button>Delete</Button>
    <Button>View</Button>
</ButtonGroup>
<br/>
<ButtonGroup size="medium">
    <Button>Create</Button>
    <Button>Modify</Button>
    <Button>Delete</Button>
    <Button>View</Button>
</ButtonGroup>
<br/>
<ButtonGroup size="small">
    <Button>Create</Button>
    <Button>Modify</Button>
    <Button>Delete</Button>
    <Button>View</Button>
</ButtonGroup>
`;
    }

    renderHtmlCode() {
        return `
<div class="button-group">
    <button class="button large">Create</button>
    <button class="button large">Modify</button>
    <button class="button large">Delete</button>
    <button class="button large">View</button>
</div>
<br/>
<div class="button-group">
    <button class="button medium">Create</button>
    <button class="button medium">Modify</button>
    <button class="button medium">Delete</button>
    <button class="button medium">View</button>
</div>
<br/>
<div class="button-group">
    <button class="button small">Create</button>
    <button class="button small">Modify</button>
    <button class="button small">Delete</button>
    <button class="button small">View</button>
</div>   
`;
    }
}
