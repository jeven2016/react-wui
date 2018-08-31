import React from "react";
import ComponentDescTemplate from "../ComponentDescTemplate";
import {Button, ButtonGroup, Dropdown, Icon, Menu, preventEvent} from "react-wui";

export default class CompactDropdown extends ComponentDescTemplate {

    renderBlockquote() {
        return "组合";
    }

    clickButtonGroup(evt) {
        alert('hello');
        preventEvent(evt);
    }


    renderComponent() {
        return (
            <div>
                <Dropdown type="button">
                    <ButtonGroup onClick={::this.clickButtonGroup}>
                        <Button outline color="green">bottom left</Button>
                        <Button color="green"><Icon className="fa fa-sort-down"/></Button>
                    </ButtonGroup>
                    <Menu>
                        <Menu.Item value={2} text="Action 2"/>
                        <Menu.Item value={3} text="Action 3"/>
                        <Menu.Item value={4} text="Action 4"/>
                    </Menu>
                </Dropdown>
            </div>
        );
    }

    renderReactCode() {
        return super.renderReactCode();
    }

    renderHtmlCode() {
        return super.renderHtmlCode();
    }
}