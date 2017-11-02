import React, {Component} from "react";
import {generateClassName, setValueInMap, updateChildrenByCallback} from "./Utils";

export default class ButtonGroup extends Component {
    static defaultProps = {
        disabled: false,
        className: 'button-group'
    };

    updateChildrenClassName() {
        const {
            type,
            children,
            color,
            disabled,
            size,
            outline,
            circle,
        } = this.props;

        let map = new Map();
        setValueInMap(map, 'type', type);
        setValueInMap(map, 'size', size);
        setValueInMap(map, 'color', color);
        setValueInMap(map, 'disabled', disabled ? "disabled" : null);
        setValueInMap(map, 'outline', outline ? "outline" : null);
        setValueInMap(map, 'circle', circle ? "circle" : null);

        if (map.size > 0) {
            let buttonClassNameSuffix = generateClassName(map);
            return updateChildrenByCallback(children, (elem) => {
                let elemClassName = elem.props.className + " " + buttonClassNameSuffix;
                return React.cloneElement(elem, {className: elemClassName});
            });
        }
        return children;
    }

    render() {
        const {
            block,
            className,
        } = this.props;

        let newClassName = block ? `${className} block` : className;
        let newChildren = this.updateChildrenClassName();

        return (
            <div className={newClassName}>
                {newChildren}
            </div>
        );
    }
}