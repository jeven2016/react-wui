/**
 *
 * Created by zjtech on 16-7-29.
 */
import React, {Component, PropTypes} from "react";
import {Router, Route, IndexRoute} from "react-router";
import {NoMatchComponent} from './NoMatchComponent'

import ComponentHome from '../elements/layout/components/ComponentHome';
import App from '../elements/App';
import ButtonIndex from '../elements/layout/components/buttons/ButtonIndex';
import InputIndex from '../elements/layout/components/input/InputIndex';
import ButtonGroupIndex from '../elements/layout/components/button-group/ButtonGroupIndex';

/**
 * Router configuration
 */
export default class RouterConfig extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired
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
                    </Route>
                    <Route path="*" component={NoMatchComponent}/>
                </Route>
            </Router>
        );
    }
}

