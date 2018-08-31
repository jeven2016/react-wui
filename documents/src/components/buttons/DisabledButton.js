import React, {Component} from "react";
import {Button} from 'react-wui';
import ComponentDescTemplate from '../ComponentDescTemplate';

export default class DisabledButton extends ComponentDescTemplate {
    renderBlockquote() {
        return <div>
            <p className="text color-blue">Disabled Button </p>
        </div>;
    }

    renderComponent() {
        return <div>
            <div className="elem-line">
                <Button disabled onClick={()=>alert("disabled")}>Disabled2</Button>
                <a className="button primary disabled">Disabled</a>
                <button className="button" disabled>Disabled</button>
            </div>
        </div>;
    }

    renderReactCode() {
        return `
<Button disabled> Disabled</Button>
<a className="button primary disabled">Disabled</a>
<Button disabled> Disabled</Button>     
`;
    }

    renderHtmlCode() {
        return `
<button className="button disabled"> Disabled</button>
<a className="button primary disabled">Disabled</a>
<button className="button" disabled> Disabled</button>      
`;
    }
}