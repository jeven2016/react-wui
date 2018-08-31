import React from 'react';
import {ButtonGroup, Button} from "react-wui";
import ComponentDescTemplate from "../ComponentDescTemplate";

export default class ButtonGroupDisabled extends ComponentDescTemplate {

    renderBlockquote() {
        return "被禁用的Button Group";
    }

    renderComponent() {
        return <div>
            <ButtonGroup>
                <Button disabled onClick={()=>alert("create")}>Create</Button>
                <Button disabled onClick={()=>alert("Modify")}>Modify</Button>
                <Button disabled>Delete</Button>
                <Button disabled>View</Button>
            </ButtonGroup>
        </div>;
    }

    renderReactCode() {
        return `
import {ButtonGroup, Button} from "react-wui";

<ButtonGroup>
    <Button disabled onClick={()=>alert("create")}>Create</Button>
    <Button disabled onClick={()=>alert("Modify")}>Modify</Button>
    <Button disabled>Delete</Button>
    <Button disabled>View</Button>
</ButtonGroup>    
`;
    }

    renderHtmlCode() {
        return `
<div class="button-group">
    <button class="button large disabled">Create</button>
    <button class="button large disabled">Modify</button>
    <button class="button large disabled">Delete</button>
    <button class="button large disabled">View</button>
</div>  
`;
    }
}
