import React, {Component, PropTypes} from 'react';
import BasicButtonGroup from './BasicButtonGroup';
import PrimaryButtonGroup from './PrimaryButtonGroup';
import IconButtonGroup from './IconButtonGroup';
import BlockButtonGroup from './BlockButtonGroup';
import ColorfulButtonGroup from './add-ons/ColorfulButtonGroup';
import InvertedButtonGroup from './add-ons/InvertedButtonGroup';
import ButtonGroupAddOn from './add-ons/ButtonGroupAddOn';
import OutlinedButtonGroup from './add-ons/OutlinedButtonGroup';

export default class ButtonGroupIndex extends Component {

    render() {
        return (<div>
            <blockquote className="border primary">
                <h2 className="elem-line text color-blue">Button Group</h2>
                <p className="elem-line text comment">您可以使用Button Group将多个Button组合使用。</p>
            </blockquote>

            <BasicButtonGroup/>
            <PrimaryButtonGroup/>
            <IconButtonGroup/>
            <BlockButtonGroup/>

            <ButtonGroupAddOn/>
            <ColorfulButtonGroup/>
            <InvertedButtonGroup/>
            <OutlinedButtonGroup/>
        </div>);
    }

}