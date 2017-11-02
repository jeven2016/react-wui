import React, {Component} from "react"
import {preventEvent} from './EventHandlers';

/**
 * Button component
 */
export default class Button extends Component {
    static defaultProps = {
        disabled: false,
        className: 'button'
    };

    render() {
        const {
            type,
            text,
            children,
            block,
            color,
            nativeType,
            className,
            disabled,
            active = false,
            onClick,
            size,
            outline,
            circle,
            ...other
        } = this.props;

        let map = new Map();
        map.set('type', type);
        map.set('size', size);
        map.set('color', color);
        map.set('block', block ? 'block' : null);
        map.set('disabled', disabled ? "disabled" : null);
        map.set('active', active && !disabled ? "active" : null);
        map.set('outline', outline ? "outline" : null);
        map.set('circle', circle ? "circle" : null);

        //get the final class to set
        let finalClassName = className;
        map.forEach((val, key) => {
            if (val) {
                finalClassName += ' ' + val;
            }
        });

        //ensure the click event won't be triggered if the button is disabled
        let clickCallback = onClick;
        if (disabled) {
            clickCallback = (e) => {
                preventEvent(e);
            }
        }

        return (
            <button className={finalClassName} onClick={clickCallback}
                    type={nativeType ? nativeType : "button"} {...other}>
                {text}
                {children}
            </button>
        );
    }

  /*  static propTypes = {
        type: PropTypes.string,   //it can only be blank or 'primary' and it has nothing to do with native html type
        nativeType: PropTypes.string, //the native html type, like 'button' or 'submit'
        text: PropTypes.string, // the text of the button
        block: PropTypes.bool, //whether the button is a 'block' button whose width is '100%' and occupy the whole row
        color: PropTypes.string, //the color
        className: PropTypes.string, //the class name of button
        disabled: PropTypes.bool, //disable this button
        active: PropTypes.bool, // active this button
        onClick: PropTypes.func, //the click callback provided
        size: PropTypes.string, //the size of the button
        outline: PropTypes.bool,
        circle: PropTypes.bool
    };*/
}