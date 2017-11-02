import React, {Component} from "react";
import ComponentDescTemplate from "../ComponentDescTemplate";
import {Dropdown, Menu} from "react-wui";


export default class BasicDropdown extends ComponentDescTemplate {

    renderBlockquote() {
        return "普通下拉列表"
    }

    renderComponent() {
        return <Dropdown>
            <div className="info">Info</div>
            <Menu>
                <Menu.Item value="0">Action #1</Menu.Item>
                <Menu.Item value="1">Action #2</Menu.Item>
                <Menu.Item value="2">Action #3</Menu.Item>
                <Menu.Item value="3">Action #4</Menu.Item>
            </Menu>
        </Dropdown>;
    }

    renderReactCode() {
        return super.renderReactCode();
    }

    renderHtmlCode() {
        return super.renderHtmlCode();
    }
}