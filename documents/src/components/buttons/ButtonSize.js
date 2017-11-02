import React, {Component} from "react";
import Highlight from "react-highlight";
import {Button} from 'react-wui';
import ComponentDescTemplate from '../ComponentDescTemplate';

export default class ButtonSize extends ComponentDescTemplate {

    renderBlockquote() {
        return '按鈕的大小';
    }

    renderComponent() {
        return (<div>
            <Button type="primary" size="large">
                Large
            </Button>
            <Button type="primary" size="medium">
                Medium
            </Button>
            <Button type="primary">
                Default
            </Button>
            <Button type="primary" size="small">
                Small
            </Button>
        </div>);
    }

    renderReactCode() {
        return `
//import this button from react-wui       
import {Button} form 'react-wui';

<Button type="primary" size="large">Large</Button>
<Button type="primary" size="medium">Medium</Button>
<Button type="primary">Default</Button>
<Button type="primary" size="small">Small</Button>`;
    }

    renderHtmlCode() {
        return `
<button class="large primary button">Large</button>
<button class="medium primary button">Medium</button>
<button class="primary button">Default</button>
<button class="small primary button">Small</button>`;
    }

}