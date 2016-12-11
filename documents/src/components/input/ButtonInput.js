import React from 'react';
import Highlight from "react-highlight";

const ButtonInput = () => {
    return (
        <div className="elem-line">
            <blockquote className="text color-blue">Combined with Button</blockquote>
            <div className="elem-line cross-line">
                <div className="input-group">
                    <div className="label">http://</div>
                    <input type="text" className="input element" placeholder="......"/>
                    <button type="button" className="label button primary">GO</button>
                </div>

                <div className="input-group">
                    <div className="label">http://</div>
                    <input type="text" className="input element" placeholder="......"/>
                    <div className="dropdown">
                        <i className="icon fa fa-angle-down"></i>
                        <div className="info">Country</div>
                        <div className="menu">
                            <div className="item" data-value="0">China</div>
                            <div className="item" data-value="1">USA</div>
                            <a className="item" data-value="1" href="#"> Link</a>
                            <div className="item active" data-value="2">Russian</div>
                        </div>
                    </div>
                    <div className="button-dropdown">
                        <input type="hidden" name="country"/>
                        <button className="button"><strong>Country</strong>&nbsp;<i className="icon fa fa-angle-down"></i>
                        </button>
                        <div className="menu">
                            <div className="item text align-left" data-value="0"><i className="fa fa-cab"></i> &nbsp;China</div>
                            <li className="divider"></li>
                            <div className="item text align-left" data-value="1"><i className="fa fa-cab"></i> &nbsp;USA</div>
                            <li className="divider"></li>
                            <a className="item text align-left" data-value="1" href="#"><i className="fa fa-cab"></i> &nbsp;Link</a>
                            <li className="divider"></li>
                            <div className="item text align-left" data-value="2"><i className="fa fa-cab"></i> &nbsp;Russian
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Highlight className="html">
                {`<div class="input-group">
    <div class="label">http://</div>
    <input type="text" class="input element" placeholder="......"/>
    <button type="button" class="label button primary">GO</button>
</div>`
                }
            </Highlight>
        </div>
    );
};

export default ButtonInput;