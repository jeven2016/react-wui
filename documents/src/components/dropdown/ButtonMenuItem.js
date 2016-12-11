import React, {Component, PropTypes} from 'react';
import Highlight from "react-highlight";

const ButtonMenuItem = () => {
    return (
        <div className="elem-line">
            <blockquote className="text color-blue">Button Menu Items</blockquote>
            <div className="elem-line">
                <div className="dropdown">
                    <i className="icon fa fa-angle-down"></i>
                    <div className="info">
                        Button Item
                    </div>
                    <div className="menu">
                        <button className="item">
                            China
                        </button>
                        <button className="item">
                            USA
                        </button>
                        <button className="item">
                            Russian
                        </button>
                    </div>
                </div>
            </div>
            <Highlight className="html">
                {`<div class="dropdown">
    <i class="icon fa fa-angle-down"></i>
    <div class="info">
       Button Item
    </div>
    <div class="menu">
        <button class="item">
            China
        </button>
        <button class="item">
            USA
        </button>
        <button class="item">
            Russian
        </button>
    </div>
</div>`
                }
            </Highlight>
        </div>
    );
};

export default ButtonMenuItem;