import React, {Component} from "react"

export default class Dropdown extends Component {
    static defaultProps = {
        dropdownClassName: "dropdown"
    };

    render() {
        const {
            triggerBy, /*trigger showing the menu by click or hover event*/
            open,
            children,
            dropdownClassName,
            alignMenu
        } = this.props;


        return (
            <div className={dropdownClassName}>
                {children}
            </div>
        );
    }
}