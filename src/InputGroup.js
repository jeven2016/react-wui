import React, {Component} from "react";
import {updateChildrenByCallback, appendClassIfAbsent, hasClass, setValueInMap, generateClassName} from "./Utils";
import Input from "./Input";


class InputLabel extends Component {
    static defaultProps = {
        className: "label"
    };

    render() {
        const {className, children} = this.props;
        return (
            <div className={className}>
                {children}
            </div>
        );
    }
}

export default class InputGroup extends Component {
    static defaultProps = {
        disabled: false,
        className: "input-group",

        //the elements need to append the "element" class
        elementClassNames: ["input", "icon-input"],

        //the elements need to append the "label" class
        labelClassNames: ["button"]
    };

    static Label = InputLabel;

    getNewElement(element, className) {
        let newClassName = appendClassIfAbsent(element, className);
        return React.cloneElement(element, {className: newClassName});
    }

    render() {
        const {block, children, className, elementClassNames, labelClassNames} = this.props;
        let newChildren = children;

        let map = new Map();
        setValueInMap(map, "block", block ? "block" : null);
        let newClassName = generateClassName(map, className);

        if (newChildren) {
            newChildren = updateChildrenByCallback(newChildren, (elem) => {
                //ensure the class "elem" is appended for sub input element
                if (hasClass(elem, elementClassNames)) {
                    let suffix = "element";
                    if (block && hasClass(elem, "input")) {
                        suffix = "expanded " + suffix;
                    }
                    return this.getNewElement(elem, suffix);
                }

                //ensure the class "label" is appended
                if (hasClass(elem, labelClassNames)) {
                    return this.getNewElement(elem, "label");
                }
                return elem;
            });
        }
        return (
            <div className={newClassName}>
                {newChildren}
            </div>
        )
    }
}