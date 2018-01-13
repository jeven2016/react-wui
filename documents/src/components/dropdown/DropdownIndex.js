import React from "react";
import BasicDropdown from './BasicDropdown';
import DividerDropdown from './DividerDropdown';
import MenuPosition from "./MenuPosition";
import CompactDropdown from "./CompactDropdown";

const DropdownIndex = () => {
    return (
        <div>
            <blockquote className="border primary">
                <h2 className="elem-line text color-blue">Dropdown 下拉列表</h2>
                <p className="elem-line text comment">常用的Input组件示例</p>
            </blockquote>

            <BasicDropdown/>
            <DividerDropdown/>
            <MenuPosition/>
            <CompactDropdown/>

        </div>
    );
};

export default DropdownIndex;