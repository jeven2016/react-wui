import React, {Component} from "react";
import Highlight from "react-highlight";
import {Button} from 'react-wui';
import ComponentDescTemplate from '../ComponentDescTemplate';

export default class PrimaryButton extends ComponentDescTemplate {
    renderBlockquote() {
        return 'Primary按钮';
    }

    renderComponent() {
        return (<div>
            <Button type="primary">
                Primary
            </Button>
            <Button type="primary" active>
                Active
            </Button>
            <Button type="primary" disabled>
                Disabled
            </Button>
        </div>);
    }

    renderReactCode() {
        return `
//import this button from react-wui       
import {Button} form 'react-wui';

<Button type="primary">Primary</Button>

<Button type="primary" active>Active</Button>

<Button type="primary" disabled>Disabled</Button>`;
    }

    renderHtmlCode() {
        return `
<button class="primary button">
    Primary
</button>
<button class="primary button active">
    Active
</button>
<button class="primary button disabled">
    Disabled
</button>`;
    }


}