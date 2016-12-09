import React, {Component, PropTypes} from 'react';
import BasicInput from './BasicInput';
import IconInput from './IconInput';
import InputSize from './InputSize';
import LabeledInput from './LabeledInput';
import ButtonInput from './ButtonInput';
import FlexibleInput from './FlexibleInput';

const InputIndex = () => {
    return (<div>
        <blockquote className="border primary">
            <h2 className="elem-line text color-blue">Input 输入框</h2>
            <p className="elem-line text comment">常用的Input组件示例</p>
        </blockquote>
        <BasicInput/>
        <IconInput/>
        <InputSize/>
        <LabeledInput/>
        <ButtonInput/>
        <FlexibleInput/>

    </div>);
};

export default InputIndex;
