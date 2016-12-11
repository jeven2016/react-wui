import React, {Component, PropTypes} from 'react';
import Highlight from "react-highlight";


const DividerDropdown = () => {
    return (
        <div className="elem-line">
            <blockquote className="text color-blue">Dropdown with divider 带分割线的下拉列表</blockquote>
            <div className="elem-line">
                <div className="dropdown">
                    <i className="icon fa fa-angle-down"></i>

                    <div className="info">Country</div>
                    <ul className="menu">
                        <li className="divider"></li>
                        <li className="item ">China</li>
                        <li className="divider"></li>
                        <li className="item">USA</li>
                        <li className="divider"></li>
                        <li className="item">Russian</li>
                        <li className="divider"></li>
                        <li className="item ">English</li>
                    </ul>
                </div>
            </div>
            <Highlight className="html">
                {`<div class="dropdown without-min-width">

    <!-- icon 是dropdown内部样式，但fa fa-angle-down是源自font awesome的样式 -->
    <i class="icon fa fa-angle-down"></i>

    <div class="info">Country</div>
    <ul class="menu">
        <li class="item ">China</li>
        <li class="divider"></li>
        <li class="item">USA</li>
        <li class="divider"></li>
        <li class="item">Russian</li>
        <li class="divider"></li>
        <li class="item ">English</li>
    </ul>
</div>`
                }
            </Highlight>
        </div>
    );
};

export default DividerDropdown;