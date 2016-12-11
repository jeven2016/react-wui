import React, {Component, PropTypes} from 'react';
import Highlight from "react-highlight";
import BasicDropdown  from './BasicDropdown';
import DividerDropdown  from './DividerDropdown';
import ButtonDropdown  from './ButtonDropdown';
import CompactDropdown  from './CompactDropdown';
import SimpleDropdown  from './SimpleDropdown';
import DisabledDropdown  from './DisabledDropdown';
import ButtonMenuItem  from './ButtonMenuItem';

const DropdownIndex = () => {
    return (
        <div>
            <blockquote className="border primary">
                <h2 className="elem-line text color-blue">Dropdown 下拉列表</h2>
                <p className="elem-line text comment">常用的Input组件示例</p>
            </blockquote>

            <BasicDropdown/>
            <DividerDropdown/>
            <ButtonDropdown/>
            <CompactDropdown/>
            <SimpleDropdown/>
            <DisabledDropdown/>
            <ButtonMenuItem/>

        </div>
    );
};

export default DropdownIndex;