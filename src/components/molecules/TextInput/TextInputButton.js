import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import {styles} from '../../../assets/css/common';
import TextInputBox from '../../atoms/Input/TextInputBox';
import {relationship} from '../../../utils/CommonUtils/list_array'

const TextInputActionButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} underlayColor='#FFFFFF' onPress={props.onPress}>
        <TextInputBox 
            editable = {props.editable} icon={props.iconName} placholderColor={props.placholderColor} 
            placholder={props.placholder} number={props.number} secureTextEntry={props.secureTextEntry}
            value = {props.value}
            textColor= {props.valueType === '' ? styles.textInputBoxFakePlaceholderFontStyle : styles.textInputBoxFontStyle }/>
    </TouchableOpacity>
  );
};

export default TextInputActionButton;