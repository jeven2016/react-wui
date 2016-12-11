import React, {Component, PropTypes} from 'react';
import Highlight from "react-highlight";

export default class IconButtonGroup extends Component {
    render() {
        return (<div>
            <blockquote className="text color-blue">Icon Button Group</blockquote>
            <div className="elem-line">
                <div className="button-group">
                    <button className="button"><i className="fa fa-wechat"/></button>
                    <button className="button"><i className="fa fa-weibo"/></button>
                    <button className="button"><i className="fa fa-qq"/>&nbsp;QQ</button>
                    <button className="button"><i className="fa fa-facebook"/></button>
                    <button className="button"><i className="fa fa-twitter"/></button>
                </div>
            </div>
            <Highlight className="html">
                {` <div class="button-group">
    <button class="button"><i class="fa fa-wechat"/></button>
    <button class="button"><i class="fa fa-weibo"/></button>
    <button class="button"><i class="fa fa-qq"/>&nbsp;QQ</button>
    <button class="button"><i class="fa fa-facebook"/></button>
    <button class="button"><i class="fa fa-twitter"/></button>
</div>`
                }
            </Highlight>
        </div>);
    }

}