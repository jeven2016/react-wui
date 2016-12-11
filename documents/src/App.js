import React, {Component, PropTypes} from 'react';
import Header from './Header';


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
                Wheel UI Framework
            </div>
            <div className="banner-icon">
                W
            </div>
            <div className="content">
                一个致力于提供丰富Web体验的框架，同时也是一个糅合各类框架优点的新框架。<br/>
                便捷、强大、易理解、易扩展是Wheel UI不变的诉求。
            </div>
            <div className="line">
                <button className="button teal ">
                 <i className="fa fa-book"/>   Get Started
                </button>
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