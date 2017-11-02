import React, {Component} from "react";
import Highlight from "react-highlight";

const SimpleDropdown = () => {
    return (
        <div className="elem-line">
            <blockquote className="text color-blue">Simple Dropdown</blockquote>
            <div className="elem-line">
                <div className="simple dropdown  ">
                    <i className="icon fa fa-angle-down"></i>
                    <div className="info">Country</div>
                    <div className="menu">
                        <div className="item">China</div>
                        <div className="item" data-value="1">USA</div>
                        <a className="item" data-value="1" href="#"> Link</a>
                        <div className="item active" data-value="2">Russian</div>
                    </div>
                </div>
            </div>
            <Highlight className="html">
                {`<div class="simple dropdown  ">
    <i class="icon fa fa-angle-down"></i>
    <div class="info">Country</div>
    <div class="menu">
        <div class="item" >China</div>
        <div class="item" data-value="1">USA</div>
        <a class="item" data-value="1" href="#"> Link</a>
        <div class="item active" data-value="2">Russian</div>
    </div>
</div>`
                }
            </Highlight>
        </div>
    );
};

export default SimpleDropdown;