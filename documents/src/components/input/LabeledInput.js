import React, {Component} from "react";
import {Input, IconInput, Icon, InputGroup, Button} from "react-wui";
import ComponentDescTemplate from '../ComponentDescTemplate';

export default class LabeledInput extends ComponentDescTemplate {
    renderBlockquote() {
        return "显示Label的输入框";
    }

    renderComponent() {
        return <div>
            <div>
                <InputGroup>
                    <InputGroup.Label>Info</InputGroup.Label>
                    <Input withinGroup expanded/>
                </InputGroup>
                <br/><br/>
                <InputGroup>
                    <Input withinGroup expanded/>
                    <InputGroup.Label>Info</InputGroup.Label>
                </InputGroup>
                <br/><br/>
                <InputGroup>
                    <InputGroup.Label>Info</InputGroup.Label>
                    <Input withinGroup expanded/>
                    <InputGroup.Label>Info</InputGroup.Label>
                </InputGroup>
                <br/><br/>
                <InputGroup>
                    <InputGroup.Label>
                        <Icon className="fa fa-calculator"/>
                    </InputGroup.Label>
                    <InputGroup.Label>
                        <Icon className="fa fa-plane"/>
                    </InputGroup.Label>
                    <Input withinGroup expanded/>
                    <InputGroup.Label>Info</InputGroup.Label>
                </InputGroup>
                <br/><br/>
                <InputGroup>
                    <InputGroup.Label>Info</InputGroup.Label>
                    <Input withinGroup/>
                    <InputGroup.Label>Info</InputGroup.Label>
                </InputGroup>
                <br/><br/>
                <InputGroup>
                    <Input.IconInput leftIcon withinGroup>
                        <Input withinGroup expanded placeholder="search..."/>
                        <Icon className="fa fa-search icon"/>
                    </Input.IconInput>
                    <Button withinGroup>Search</Button>
                </InputGroup>
                <br/><br/>
                <InputGroup>
                    <InputGroup.Label withinGroup>
                        <input type="radio"/>
                    </InputGroup.Label>
                    <Input withinGroup expanded/>
                </InputGroup>
            </div>

        </div>;
    }

    renderReactCode() {
        return `
import {Input, IconInput, Icon, InputGroup, Button} from "react-wui";
<InputGroup>
    <InputGroup.Label>Info</InputGroup.Label>
    <Input withinGroup expanded/>
</InputGroup>
<br/><br/>
<InputGroup>
    <Input withinGroup expanded/>
    <InputGroup.Label>Info</InputGroup.Label>
</InputGroup>
<br/><br/>
<InputGroup>
    <InputGroup.Label>Info</InputGroup.Label>
    <Input withinGroup expanded/>
    <InputGroup.Label>Info</InputGroup.Label>
</InputGroup>
<br/><br/>
<InputGroup>
    <InputGroup.Label>
        <Icon className="fa fa-calculator"/>
    </InputGroup.Label>
    <InputGroup.Label>
        <Icon className="fa fa-plane"/>
    </InputGroup.Label>
    <Input withinGroup expanded/>
    <InputGroup.Label>Info</InputGroup.Label>
</InputGroup>
<br/><br/>
<InputGroup>
    <InputGroup.Label>Info</InputGroup.Label>
    <Input withinGroup/>
    <InputGroup.Label>Info</InputGroup.Label>
</InputGroup>
<br/><br/>
<InputGroup>
    <Input.IconInput leftIcon withinGroup>
        <Input withinGroup expanded placeholder="search..."/>
        <Icon className="fa fa-search icon"/>
    </Input.IconInput>
    <Button withinGroup>Search</Button>
</InputGroup>
<br/><br/>
<InputGroup>
    <InputGroup.Label withinGroup>
        <input type="radio"/>
    </InputGroup.Label>
    <Input withinGroup expanded/>
</InputGroup>
`;
    }

    renderHtmlCode() {
        return `
<div>
    <div class="input-group">
        <div class="label">Info</div>
        <input type="text" class="input element" placeholder=""></div>
    <br><br>
    <div class="input-group"><input type="text" class="input element" placeholder="">
        <div class="label">Info</div>
    </div>
    <br><br>
    <div class="input-group">
        <div class="label">Info</div>
        <input type="text" class="input element" placeholder="">
        <div class="label">Info</div>
    </div>
    <br><br>
    <div class="input-group">
        <div class="label"><i class="fa fa-calculator"></i></div>
        <div class="label"><i class="fa fa-plane"></i></div>
        <input type="text" class="input element" placeholder="">
        <div class="label">Info</div>
    </div>
    <br><br>
    <div class="input-group">
        <div class="label">Info</div>
        <input type="text" class="input element" placeholder="">
        <div class="label">Info</div>
    </div>
    <br><br>
    <div class="input-group">
        <div class="icon-input element left-icon"><input type="text" class="input" placeholder="search..."><i
                class="fa fa-search icon"></i></div>
        <button class="button label" type="button"><!-- react-text: 161 -->Search<!-- /react-text --></button>
    </div>
    <br><br>
    <div class="input-group">
        <div class="label"><input type="radio" value="on"></div>
        <input type="text" class="input element" placeholder="">
    </div>
</div>
`;
    }
}
