import React, {Component} from "react";
import ComponentDescTemplate from "../ComponentDescTemplate";
import {Dropdown, Menu, Button, Divider, Icon} from "react-wui";

export default class DividerDropdown extends ComponentDescTemplate {

    renderBlockquote() {
        return "菜单中使用分隔符"
    }


    renderComponent() {
        return <Dropdown triggerBy="click" type="button">
            <Button>Button</Button>
            <Menu>
                <Divider/>
                <Menu.Item value={1} text="Action 1"></Menu.Item>
                <Divider/>
                <Menu.Item value={2} text="Action 2"/>
                <Divider/>
                <Menu.Item value={3} text="Action 3"/>
                <Divider/>
                <Menu.Item value={4} text="Action 4"/>
            </Menu>
        </Dropdown>;
    }

    renderReactCode() {
        return `
import {Dropdown, Menu, Button, Divider} from "react-wui";
        
<Dropdown triggerBy="click" type="button">
    <Button>Button</Button>
    <Menu>
        <Divider/>
        <Menu.Item value={1} text="Action 1"/>
        <Divider/>
        <Menu.Item value={2} text="Action 2"/>
        <Divider/>
        <Menu.Item value={3} text="Action 3"/>
        <Divider/>
        <Menu.Item value={4} text="Action 4"/>
    </Menu>
</Dropdown>
`
    }

    renderHtmlCode() {
        return `
<div class="button-dropdown">
    <button class="button" type="button"></button>
    <div class="menu">
        <div class="divider"></div>
        <div class="item" data-value="1"></div>
        <div class="divider"></div>
        <div class="item" data-value="2"></div>
        <div class="divider"></div>
        <div class="item" data-value="3"></div>
        <div class="divider"></div>
        <div class="item" data-value="4"></div>
    </div>
</div>
`
    }

}