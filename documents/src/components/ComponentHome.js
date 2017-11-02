import React, {Component} from "react";
import List from './List'
import BasicButton from './buttons/BasicButton'

export default class ComponentHome extends Component {
    static propTypes = {};

    constructor(args) {
        super(args);
        this.state = {}
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-12 col-md-2 offset-md-1 col-lg-2 offset-lg-2">
                    <List/>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-6 ">
                    <div className="block card clear-boder ">
                        <div className="card-body">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}