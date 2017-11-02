import React, {Component} from "react";
import BasicButton from './BasicButton';
import PrimaryButton from './PrimaryButton';
import ButtonSize from './ButtonSize';
import IconButton from './IconButton';
import BlockButton from './BlockButton';
import DisabledButton from './DisabledButton';
import ButtonAddOn from './add-ons/ButtonAddOn';
import ColorfulButton from './add-ons/ColorfulButton';
import OutlinedButton from './add-ons/OutlinedButton';
import CircularButton from './add-ons/CircularButton';

export default class ButtonIndex extends Component {
    static propTypes = {};

    constructor(args) {
        super(args);
        this.state = {}
    }

    render() {
        return (<div>
            <BasicButton/>
            <PrimaryButton/>
            <ButtonSize/>
            <IconButton/>
            <BlockButton/>
            <DisabledButton/>

            {/*Add-ons*/}
            <ButtonAddOn/>
            <ColorfulButton/>
            <OutlinedButton/>
            <CircularButton/>
        </div>);
    }

}