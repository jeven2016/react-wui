import React from "react";
import {render} from "react-dom";
import {hashHistory} from "react-router";
import RouterConfig from './common/RouterConfig'

import '../libs/fa/css/font-awesome.min.css';
import '../libs/highlight/styles/github.css';
import '../libs/wui/wui-bundle-min.css';
import './common/_Style.scss'

render((
        <RouterConfig history={hashHistory}/>
    ),
    document.getElementById('root')
);