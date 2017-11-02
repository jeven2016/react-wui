import React, {Component} from "react";
import Highlight from "react-highlight";

const CompactDropdown = () => {
    return (
        <div className="elem-line">
            <blockquote className="text color-blue">Compact Dropdown (no max-width defined) 自适应宽度</blockquote>
            <div className="elem-line">
                <div className="elem-line">
                    <div className="dropdown without-min-width">
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
            </div>
            <Highlight className="html">
                {`<div className="dropdown without-min-width">
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
</div>`
                }
            </Highlight>
        </div>
    );
};

export default CompactDropdown;