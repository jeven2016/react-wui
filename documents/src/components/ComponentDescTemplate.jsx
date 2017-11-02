import React, {Component, PropTypes} from 'react'
import Highlight from "react-highlight";

export default class ComponentDescTemplate extends Component {

    constructor(args) {
        super(args);
        this.state = {
            showCode: false,
            sourceCodeType: 'html'
        }
    }

    renderBlockquote() {
        return null;
    }

    renderComponent() {
        return null;
    }

    renderReactCode() {
        return null;
    }

    renderHtmlCode() {
        return null;
    }

    showCode() {
        let showState = !this.state.showCode;
        this.setState({showCode: showState});
    }

    renderSourceCode(type) {
        this.setState({
            sourceCodeType: type
        });

    }

    render() {
        let code = "", sourceCode = "";
        let htmlBtnClass, reactBtnClass;
        console.log(this.state.sourceCodeType);
        if (this.state.sourceCodeType === 'html') {
            sourceCode = this.renderHtmlCode();
            htmlBtnClass = "primary button small";
            reactBtnClass = "button small";
        }
        if (this.state.sourceCodeType === 'react') {
            sourceCode = this.renderReactCode();
            htmlBtnClass = "button small";
            reactBtnClass = "primary button small";
        }

        if (this.state.showCode) {
            code = <div className="folder card border" style={{width: '100%'}}>
                <div className="card-header gray" style={{height: '2rem'}}>
                    <div className="button-group clear-border">
                        <button className={htmlBtnClass} onClick={this.renderSourceCode.bind(this, 'html')}>
                            Html
                        </button>
                        <button className={reactBtnClass} onClick={this.renderSourceCode.bind(this, 'react')}>
                            React
                        </button>
                    </div>
                </div>
                <div className="card-body">
                    <div className="text comment" style={{margin: 'auto'}}>
                        <Highlight className="html">
                            {sourceCode}
                        </Highlight>
                    </div>
                </div>
            </div>;
        }

        return (
            <div className="component-folder">
                <blockquote>
                    <div className="text color-blue">
                        {this.renderBlockquote()} &nbsp;
                        <i className="fa fa-code pull-right" style={{cursor: 'pointer'}} onClick={::this.showCode}/>
                    </div>
                </blockquote>
                <div className="elem-line">
                    {this.renderComponent()}
                </div>

                {code}
            </div>

        );
    }
}