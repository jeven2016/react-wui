import React, {Component} from "react";
import Highlight from "react-highlight";

const ButtonDropdown = () => {
    return (
        <div className="elem-line">
            <blockquote className="text color-blue">Button Dropdown</blockquote>
            <div className="elem-line">
                <div className="button-dropdown">
                    <button className="button"><strong>Country</strong>&nbsp;<i className="icon fa fa-angle-down"></i>
                    </button>
                    <div className="menu">
                        <div className="item text align-left" data-value="0"><i className="fa fa-cab"></i> &nbsp;China
                        </div>
                        <li className="divider"></li>
                        <div className="item text align-left" data-value="1"><i className="fa fa-cab"></i> &nbsp;USA
                        </div>
                        <li className="divider"></li>
                        <a className="item text align-left" data-value="1" href="#"><i className="fa fa-cab"></i> &nbsp;
                            Link</a>
                        <li className="divider"></li>
                        <div className="item text align-left" data-value="2"><i className="fa fa-cab"></i> &nbsp;Russian
                        </div>
                    </div>
                </div>
            </div>
            <Highlight className="html">
                {`<div class="button-dropdown">
    <button class="button"><strong>Country</strong>&nbsp;<i class="icon fa fa-angle-down"></i></button>
    <div class="menu">
        <div class="item text align-left" data-value="0"><i class="fa fa-cab"></i> &nbsp;China</div>
        <li class="divider"></li>
        <div class="item text align-left" data-value="1"><i class="fa fa-cab"></i> &nbsp;USA</div>
        <li class="divider"></li>
        <a class="item text align-left" data-value="1" href="#"><i class="fa fa-cab"></i> &nbsp; Link</a>
        <li class="divider"></li>
        <div class="item text align-left" data-value="2"><i class="fa fa-cab"></i> &nbsp;Russian</div>
    </div>
</div>`
                }
            </Highlight>
        </div>
    );
};

export default ButtonDropdown;