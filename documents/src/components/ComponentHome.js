import React, {Component, PropTypes} from 'react';
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
                <div className="col-sm-24 col-md-6">
                    <List/>
                </div>
                <div className="col-sm-24 col-md-18">
                    <div className="block border card">
                        <div className="card-body">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}