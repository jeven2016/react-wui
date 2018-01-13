import React, {Component} from "react";
import Button from "./Button";

export default class LinkButton extends Button {
    render() {
        const {
            text,
            children,
            nativeType,
            style
        } = this.props;

        let className = this.generateClassName();
        let clickCallback = this.getCallback();
        React.createElement("a", {
            href: "javascript:void(0)",
            className: className,
            onClick: clickCallback,
            type: nativeType ? nativeType : "button",
            style: style
        })

        return (
            <a href="javascript:void(0)" className={this.generateClassName()} onClick={this.getCallback()}
               type={nativeType ? nativeType : "button"} style={style}>
                {text}
                {children}
            </a>
        );
    }
}