import React, {Component} from "react"
import classnames from "classnames";
import {preventEvent} from '../event/EventFuntions';

/**
 * Button component
 */
export default class Button extends Component {
    static defaultProps = {
        disabled: false,
        className: 'button'
    };

    generateClassName() {
        const {
            type,
            block,
            color,
            className,
            disabled,
            active = false,
            size,
            outline,
            circle,
        } = this.props;

        let clsName = classnames(className, {
            [type]: type,
            [size]: size,
            [color]: color,
            block: block,
            disabled: disabled,
            active: active,
            outline: outline,
            circle: circle
        });
        return clsName;
    }

    getCallback() {
        const {
            disabled,
            onClick,
        } = this.props;

        //ensure the click event won't be triggered if the button is disabled
        let clickCallback = onClick;
        if (disabled) {
            clickCallback = (e) => {
                preventEvent(e);
            }
        }
        if (!clickCallback) {
            clickCallback = (e) => {
            };
        }
        return clickCallback;
    }

    render() {
        const {
            text,
            children,
            nativeType,
            style
        } = this.props;

        return (
            <button className={this.generateClassName()} onClick={this.getCallback()}
                    type={nativeType ? nativeType : "button"} style={style}>
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