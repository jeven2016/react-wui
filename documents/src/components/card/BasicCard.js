import React, {Component} from "react";
import ComponentDescTemplate from "../ComponentDescTemplate";
import {Card, Divider} from "react-wui";

export default class BasicCard extends ComponentDescTemplate {

    renderBlockquote() {
        return "Card";
    }

    renderComponent() {
        return (
            <div>
                <Card>
                    <Card.header>Header</Card.header>
                    <Card.body>Body</Card.body>
                    <Card.footer>Body</Card.footer>
                </Card>
                <Card>
                    <Card.header>Header</Card.header>
                    <Divider/>
                    <Card.body>Body</Card.body>
                    <Divider/>
                    <Card.footer>Body</Card.footer>
                </Card>
            </div>);
    }

    renderReactCode() {
        return super.renderReactCode();
    }

    renderHtmlCode() {
        return super.renderHtmlCode();
    }
}