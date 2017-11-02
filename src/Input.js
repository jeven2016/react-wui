import React, {Component} from "react";
import {setValueInMap, generateClassName} from "./Utils";

class IconInput extends Component {
    static defaultProps = {
        disabled: false,
        className: "icon-input",
    };

    render() {
        const {children, leftIcon, className, size, block} = this.props;

        let map = new Map();
        setValueInMap(map, "leftIcon", leftIcon ? "left-icon" : null);
        map.set("size", size);
        map.set("block", block ? "block" : null);

        let newClassName = generateClassName(map, className);

        return <div className={newClassName}>
            {children}
        </div>;
    }
}


class Input extends Component {
    static defaultProps = {
        type: "text",
        disabled: false,
        className: "input",
        placeholder: ""
    };

    static IconInput = IconInput;

    render() {
        const {
            size,
            type,
            block,
            className,
            placeholder,
            disabled,
            rootStyle
        } = this.props;

        let map = new Map();
        setValueInMap(map, "size", size);
        setValueInMap(map, "block", block ? "block" : null);
        setValueInMap(map, "disabled", disabled ? "disabled" : null);
        let newClassName = generateClassName(map, className);

        return (
            <input className={newClassName} type={type} placeholder={placeholder} style={rootStyle}/>
        );

    }
}

export default Input;