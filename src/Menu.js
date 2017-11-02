import React, {Component} from "react";

class Item extends Component {
    static defaultProps = {
        itemClassName: "item"
    };

    render() {
        const {itemClassName, value, children} = this.props;
        return <div className={itemClassName} data-value={value}>
            {children}
        </div>;
    }
}


export default class Menu extends Component {
    static defaultProps = {
        menuClassName: "menu"
    };
    static Item = Item;

    render() {
        const {menuClassName, children} = this.props;
        return (
            <div className={menuClassName}>
                {children}
            </div>
        )
    }
}
