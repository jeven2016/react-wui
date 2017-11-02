import React, {Component} from "react";
import BasicInput from './BasicInput';
import IconInput from './IconInput';
import InputSize from './InputSize';
import LabeledInput from './LabeledInput';
import FlexibleInput from './FlexibleInput';
import InputType from './InputType';

const InputIndex = () => {
    return (<div>
        <blockquote className="border primary">
            <h2 className="elem-line text color-blue">Input 输入框</h2>
            <p className="elem-line text comment">常用的Input组件示例</p>
        </blockquote>
        <BasicInput/>
        <InputSize/>
        <IconInput/>
        <LabeledInput/>
        <FlexibleInput/>
        <InputType/>

    </div>);
};

export default InputIndex;
