import React, {Component} from "react";
import ComponentDescTemplate from "../ComponentDescTemplate";
import {Dropdown, Menu, Button, ButtonGroup, Icon} from "react-wui";

export default class MenuPosition extends ComponentDescTemplate {
    renderBlockquote() {
        return "在不同位置显示的菜单";
    }

    changeItem() {

    }

    renderComponent() {
        return (
            <div>
                <Dropdown type="button">
                    <Button>bottom left</Button>
                    <Menu onChange={this.changeItem.bind(this)}>
                        <Menu.Item value={2} text="Action 2"/>
                        <Menu.Item value={3} text="Action 3"/>
                        <Menu.Item value={4} text="Action 4"/>
                    </Menu>
                </Dropdown>
                &nbsp;&nbsp;
                <Dropdown type="button">
                    <Button>bottom right</Button>
                    <Menu onChange={this.changeItem.bind(this)} position="right">
                        <Menu.Item value={2} text="Action 2"/>
                        <Menu.Item value={3} text="Action 3"/>
                        <Menu.Item value={4} text="Action 4"/>
                    </Menu>
                </Dropdown>
                &nbsp;&nbsp;
                <Dropdown type="button">
                    <Button>top left</Button>
                    <Menu onChange={this.changeItem.bind(this)} position="top lef">
                        <Menu.Item value={2} text="Action 2"/>
                        <Menu.Item value={3} text="Action 3"/>
                        <Menu.Item value={4} text="Action 4"/>
                    </Menu>
                </Dropdown>
                &nbsp;&nbsp;
                <Dropdown type="button">
                    <Button>top right</Button>
                    <Menu onChange={this.changeItem.bind(this)} position="top right">
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