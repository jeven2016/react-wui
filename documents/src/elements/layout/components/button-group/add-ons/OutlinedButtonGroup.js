import React, {Component, PropTypes} from 'react';
import Highlight from "react-highlight";

const OutlinedButtonGroup = props => {
    return (<div className="elem-line">
        <blockquote>Outlined Button Group</blockquote>
        <div className="button-group">
            <button className="button black  outline">Black</button>
            <button className="active button brown  outline">brown</button>
            <button className="button pink  outline">pink</button>
            <button className="button purple  outline">purple</button>
            <button className="button violet  outline">violet</button>
            <button className="button blue  outline">blue</button>
            <button className="button teal  outline">teal</button>
            <button className="button green  outline">green</button>
            <button className="button yellow  outline">yellow</button>
            <button className="button orange  outline">orange</button>
            <button className="button red  outline">red</button>
        </div>
        <Highlight className="html">
            {`<div className="button-group">
    <button className="button black  outline">Black</button>
    <button className="active button brown  outline">brown</button>
    <button className="button pink  outline">pink</button>
    <button className="button purple  outline">purple</button>
    <button className="button violet  outline">violet</button>
    <button className="button blue  outline">blue</button>
    <button className="button teal  outline">teal</button>
    <button className="button green  outline">green</button>
    <button className="button yellow  outline">yellow</button>
    <button className="button orange  outline">orange</button>
    <button className="button red  outline">red</button>
</div>`
            }
        </Highlight>
    </div>);
};


export default OutlinedButtonGroup;
