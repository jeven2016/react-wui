import React, {Component} from "react";
import ComponentDescTemplate from "../ComponentDescTemplate";
import {Dropdown, Menu, Button, ButtonGroup, Icon} from "react-wui";

export default class BasicDropdown extends ComponentDescTemplate {

    renderBlockquote() {
        return "普通下拉列表"
    }

    changeItem(key, value) {
        console.log(`${key}=${value}`);
    }

    renderComponent() {
        return <div>
            <Dropdown triggerBy="hover">
                <div key="hover">Hover</div>
                <Menu key="menu1" onChange={this.changeItem.bind(this)}>
                    <Menu.Item value={1} text="Action 1"/>
                    <Menu.Item value={2} text="Action 2"/>
                    <Menu.Item value={3} text="Action 3"/>
                    <Menu.Item value={4} text="Action 4"/>
                </Menu>
            </Dropdown>
            &nbsp;
            &nbsp;
            <Dropdown type="button">
                <Button>Button</Button>
                <Menu onChange={this.changeItem.bind(this)}>
                    <Menu.Item value={1}/>
                    <Menu.Item value={2} text="Action 2"/>
                    <Menu.Item value={3} text="Action 3"/>
                    <Menu.Item value={4} text="Action 4"/>
                </Menu>
            </Dropdown>

            &nbsp;
            <Dropdown type="text">
                <div>
                    text&nbsp;
                    <Icon className="fa fa-arrow-circle-o-down"/>
                </div>
                <Menu onChange={this.changeItem.bind(this)}>
                    <Menu.Item value={1}/>
                    <Menu.Item value={2} text="Action 2"/>
                    <Menu.Item value={3} text="Action 3"/>
                    <Menu.Item value={4} text="Action 4"/>
                </Menu>
            </Dropdown>
        </div>;
    }

    renderReactCode() {
        return super.renderReactCode();
    }

    renderHtmlCode() {
        return super.renderHtmlCode();
    }
}