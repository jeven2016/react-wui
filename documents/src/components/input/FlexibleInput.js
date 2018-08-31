import React from 'react';
import {Button, Icon, Input, InputGroup} from "react-wui";
import ComponentDescTemplate from '../ComponentDescTemplate';

export default class FlexibleInput extends ComponentDescTemplate {

    renderBlockquote() {
        return "弹性输入框";
    }

    renderComponent() {
        return (
            <div>
                <InputGroup block>
                    <InputGroup.Label>
                        <Icon className="fa fa-subway"/>
                    </InputGroup.Label>
                    <Input expanded withinGroup/>
                </InputGroup>
                <br/><br/>
                <InputGroup block>
                    <InputGroup.Label>
                        <Icon className="fa fa-subway"/>
                    </InputGroup.Label>
                    <Input expanded withinGroup/>
                    <InputGroup.Label>
                        End
                    </InputGroup.Label>
                </InputGroup>
                <br/><br/>
                <InputGroup block>
                    <InputGroup.Label>
                        <Icon className="fa fa-search"/>
                    </InputGroup.Label>
                    <Input expanded withinGroup/>
                    <Button color="green" withinGroup>GO</Button>
                </InputGroup>
            </div>
        );
    }

    renderReactCode() {
        return `
import {Input, Icon, InputGroup, Button} from "react-wui";

<InputGroup block>
    <InputGroup.Label>
        <Icon className="fa fa-subway"/>
    </InputGroup.Label>
    <Input expanded withinGroup/>
</InputGroup>
<br/><br/>
<InputGroup block>
    <InputGroup.Label>
        <Icon className="fa fa-subway"/>
    </InputGroup.Label>
    <Input expanded withinGroup/>
    <InputGroup.Label>
        End
    </InputGroup.Label>
</InputGroup>
<br/><br/>
<InputGroup block>
    <InputGroup.Label>
        <Icon className="fa fa-search"/>
    </InputGroup.Label>
    <Input expanded withinGroup/>
    <Button color="green" withinGroup>GO</Button>
</InputGroup>      
`;
    }

    renderHtmlCode() {
        return `
<div>
    <div class="input-group block">
        <div class="label"><i class="fa fa-subway"></i></div>
        <input type="text" class="input expanded element" placeholder=""></div>
    <br><br>
    <div class="input-group block">
        <div class="label"><i class="fa fa-subway"></i></div>
        <input type="text" class="input expanded element" placeholder="">
        <div class="label">End</div>
    </div>
    <br><br>
    <div class="input-group block">
        <div class="label"><i class="fa fa-search"></i></div>
        <input type="text" class="input expanded element" placeholder="">
        <button class="button green label" type="button">GO</button>
    </div>
</div>      
`;
    }
}