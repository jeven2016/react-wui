import React, {Component, PropTypes} from 'react';
import Highlight from "react-highlight";

const InvertedButtonGroup = () => {
    return (<div className="elem-line">
        <blockquote>Inverted Button Group</blockquote>
        <div className="button-group">
            <button className="button black inverted clear-border">Black</button>
            <button className="active button brown inverted clear-border">brown</button>
            <button className="button pink inverted clear-border">pink</button>
            <button className="button purple inverted clear-border">purple</button>
            <button className="button violet inverted clear-border">violet</button>
            <button className="button blue inverted clear-border">blue</button>
            <button className="button teal inverted clear-border">teal</button>
            <button className="button green inverted clear-border">green</button>
            <button className="button yellow inverted clear-border">yellow</button>
            <button className="button orange inverted clear-border">orange</button>
            <button className="button red inverted clear-border">red</button>
        </div>
        <Highlight className="html">
            {` <div class="button-group">
    <button class="button black inverted clear-border">Black</button>
    <button class="active button brown inverted clear-border">brown</button>
    <button class="button pink inverted clear-border">pink</button>
    <button class="button purple inverted clear-border">purple</button>
    <button class="button violet inverted clear-border">violet</button>
    <button class="button blue inverted clear-border">blue</button>
    <button class="button teal inverted clear-border">teal</button>
    <button class="button green inverted clear-border">green</button>
    <button class="button yellow inverted clear-border">yellow</button>
    <button class="button orange inverted clear-border">orange</button>
    <button class="button red inverted clear-border">red</button>
</div>`
            }
        </Highlight>

    </div>);
};

export default InvertedButtonGroup;