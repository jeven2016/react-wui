import React, {Component} from "react";
import Header from './Header';
import {Link} from 'react-router';


export default class App extends Component {
    static propTypes = {};

    constructor(args) {
        super(args);
        this.state = {}
    }

    render() {
        return (<div>
            <Header/>
            <Banner/>
            <div> {this.props.children}</div>
            <div>Foot</div>
        </div>);
    }

}

const Banner = () => {
    return (<div className="banner-container">
        <div className="banner">
            <div className="title text color-white">
                Wui
            </div>
            <div className="banner-icon">
                W
            </div>
            <div className="content">
                <p>一个支持响应式布局并致力于提供丰富Web体验的前端框架</p>
                <p>With MIT License</p>
            </div>
            <div className="line">
                <Link className="button teal" to="/components">
                    <i className="fa fa-book"/>
                    Get Started
                </Link>
                <button className="button purple ">
                    <i className="fa fa-github"/> Download
                </button>
            </div>
            <div className="line">
                Current release v0.5.0
            </div>
            <div className="line">&nbsp;</div>
        </div>
    </div>)
};