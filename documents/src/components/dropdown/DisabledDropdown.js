import React, {Component, PropTypes} from 'react';
import Highlight from "react-highlight";

const DisabledDropdown = () => {
    return (
        <div className="elem-line">
            <blockquote className="text color-blue">Disabled Dropdown</blockquote>
            <div className="elem-line">
                <div className="dropdown disabled">
                    <i className="icon fa fa-angle-down"></i>
                    <div className="info">
                        <i className="fa fa-list"></i>&nbsp;Disabled
                    </div>
                    <div className="menu">
                        <div className="item" data-value="0">
                            <i className="fa fa-qq"></i> &nbsp;QQ
                        </div>
                    </div>
                </div>

                <div className="simple dropdown disabled ">
                    <i className="icon fa fa-angle-down"></i>
                    <div className="info">Country</div>
                    <div className="menu">
                        <div className="item">China</div>
                        <div className="item" data-value="1">USA</div>
                        <a className="item" data-value="1" href="#"> Link</a>
                        <div className="item active" data-value="2">Russian</div>
                    </div>
                </div>

                <div className="button-dropdown">
                    <button className="button"><strong>Disabled Dropdown</strong>&nbsp;
                        <i className="icon fa fa-angle-down"></i>
                    </button>
                    <div className="menu">
                        <div className="item text align-left" data-value="0"><i className="fa fa-cab"></i> &nbsp;China
                        </div>
                    </div>
                </div>
            </div>
            <Highlight className="html">
                {`<div class="dropdown disabled">
    <i class="icon fa fa-angle-down"></i>
    <div class="info">
        <i class="fa fa-list"></i>&nbsp;Disabled
    </div>
    <div class="menu">
        <div class="item" data-value="0">
            <i class="fa fa-qq"></i> &nbsp;QQ
        </div>
    </div>
</div>

<div class="simple dropdown  ">
    <i class="icon fa fa-angle-down"></i>
    <div class="info">Country</div>
    <div class="menu">
        <div class="item" >China</div>
        <div class="item" data-value="1">USA</div>
        <a class="item" data-value="1" href="#"> Link</a>
        <div class="item active" data-value="2">Russian</div>
    </div>
</div>

 <div className="button-dropdown">
    <button className="button">
        <strong>Disabled Dropdown</strong>&nbsp;
        <i className="icon fa fa-angle-down"></i>
    </button>
    <div className="menu">
        <div className="item text align-left" data-value="0"><i className="fa fa-cab"></i> &nbsp;China
        </div>
    </div>
</div>
`
                }
            </Highlight>
        </div>
    );
};

export default DisabledDropdown;