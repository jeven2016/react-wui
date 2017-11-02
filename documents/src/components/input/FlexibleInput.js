import React from 'react';
import {Input, Icon, InputGroup, Button} from "react-wui";
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
                    <Input expanded/>
                </InputGroup>
                <br/><br/>
                <InputGroup block>
                    <InputGroup.Label>
                        <Icon className="fa fa-subway"/>
                    </InputGroup.Label>
                    <Input expanded/>
                    <InputGroup.Label>
                        End
                    </InputGroup.Label>
                </InputGroup>
                <br/><br/>
                <InputGroup block>
                    <InputGroup.Label>
                        <Icon className="fa fa-search"/>
                    </InputGroup.Label>
                    <Input expanded/>
                    <Button color="green">GO</Button>
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
    <Input expanded/>
</InputGroup>

<InputGroup block>
    <InputGroup.Label>
        <Icon className="fa fa-subway"/>
    </InputGroup.Label>
    <Input expanded/>
    <InputGroup.Label>
        End
    </InputGroup.Label>
</InputGroup>

<InputGroup block>
    <InputGroup.Label>
        <Icon className="fa fa-search"/>
    </InputGroup.Label>
    <Input expanded/>
    <Button color="green">GO</Button>
</InputGroup>        
`;
    }

    renderHtmlCode() {
        return super.renderHtmlCode();
    }
}