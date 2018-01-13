import React, {Component} from "react";
import ComponentDescTemplate from "../ComponentDescTemplate";
import {Dropdown, Menu, Button, ButtonGroup, Icon} from "react-wui";

export default class CompactDropdown extends ComponentDescTemplate {

    renderBlockquote() {
        return "组合";
    }

    renderComponent() {
        return (
            <div>
            <Dropdown type="button">
                <ButtonGroup>
                    <Button outline color="green">bottom left</Button>
                    <Button color="green"><Icon className="fa fa-arrow-down"/></Button>
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