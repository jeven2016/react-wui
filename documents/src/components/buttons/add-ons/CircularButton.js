import React, {Component} from "react";
import {Button} from 'react-wui';
import ComponentDescTemplate from '../../ComponentDescTemplate';

export default class CircularButton extends ComponentDescTemplate {

    renderBlockquote() {
        return <p className="text color-blue">圆形按钮</p>;
    }

    renderComponent() {
        return <div>
            <Button circle color="blue" outline>
                <i className="fa fa-google"/>
            </Button>
            <Button circle color="brown" outline>
                <i className="fa fa-facebook"/>
            </Button>
            <Button circle color="green" outline>
                <i className="fa fa-amazon"/>
            </Button>
            <Button circle color="orange" outline>
                <i className="fa fa-microphone"/>
            </Button>
        </div>;
    }

    renderReactCode() {
        return null;
    }

    renderHtmlCode() {
        return null;
    }

}