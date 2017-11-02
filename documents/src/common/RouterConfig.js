/**
 *
 * Created by zjtech on 16-7-29.
 */
import React, {Component} from "react";
import {Router, Route, IndexRoute} from "react-router";
import NoMatchComponent from './NoMatchComponent'

import ComponentHome from '../components/ComponentHome';
import App from '../App';
import ButtonIndex from '../components/buttons/ButtonIndex';
import InputIndex from '../components/input/InputIndex';
import ButtonGroupIndex from '../components/button-group/ButtonGroupIndex';
import DropdownIndex from '../components/dropdown/DropdownIndex';

/**
 * Router configuration
 */
export default class RouterConfig extends Component {
    static propTypes = {
        // history: PropTypes.object.isRequired
    };

    render() {
        return (
            <Router history={this.props.history}>
                <Route path="/" component={App}>
                    <Route path="components" component={ComponentHome}>
                        <IndexRoute component={ButtonIndex}/>
                        <Route path="button" component={ButtonIndex}/>
                        <Route path="button-group" component={ButtonGroupIndex}/>
                        <Route path="input" component={InputIndex}/>
                        <Route path="dropdown" component={DropdownIndex}/>
                    </Route>
                    <Route path="*" component={NoMatchComponent}/>
                </Route>
            </Router>
        );
    }
}

