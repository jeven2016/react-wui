import React, {Component} from "react";
import ComponentDescTemplate from "../ComponentDescTemplate";
import {Card, Divider, Icon, ButtonGroup, Button} from "react-wui";

export default class VisitingCard extends ComponentDescTemplate {

    renderBlockquote() {
        return "名片";
    }

    renderComponent() {
        return (
            <div>
                <Card>
                    <Card.row>
                        <h2 className="text color-blue">
                            <Icon className="fa fa-user"/>
                            Your Name
                        </h2>
                        <h5 className="text comment">Leader of this project</h5>
                    </Card.row>
                    <Card.body>
                        Some description, type some words here......
                    </Card.body>
                    <Card.footer>
                        <ButtonGroup block>
                            <Button color="green">
                                <Icon className="fa fa-phone"/>Phone
                            </Button>
                            <Button color="blue">
                                <Icon className="fa fa-mail-reply"/>Email
                            </Button>
                        </ButtonGroup>
                    </Card.footer>
                </Card>
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