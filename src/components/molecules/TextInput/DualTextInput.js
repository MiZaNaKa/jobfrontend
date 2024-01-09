import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Animated, TouchableOpacity } from 'react-native';
import dualtextInputStyles from './DualTextInput.Styles';
import {styles} from '../../../assets/css/common';
import TextInputBox from '../../atoms/Input/TextInputBox';

const DualTextInput = (props) => {
  return (
    <View style={[dualtextInputStyles.dualTextInputConatiner,props.customDualTextInput]}>
        <View style={{width: '50%', paddingRight: 3,}}>
          <TouchableOpacity onPress={props.onPressOne}>
            <TextInputBox
                editable = {props.editableOne} icon={props.iconOne} placholderColor={"#808080"}
                placholder={props.placeholderOne} number={props.number} secureTextEntry={props.secureTextEntry}
                action={props.actionOne} value={props.valueOne} 
                textColor= {props.valueOne === '' ? styles.textInputBoxFakePlaceholderFontStyle : styles.textInputBoxFontStyle } />
          </TouchableOpacity>
        </View>
        <View style={{width: '50%',paddingLeft: 3,}}>
          <TouchableOpacity onPress={props.onPressTwo}>
            <TextInputBox
                editable = {props.editableTwo} placholderColor={"#808080"} icon={props.iconTwo}
                placholder={props.placeholderTwo} number={props.number} secureTextEntry={props.secureTextEntry}
                action={props.actionTwo} value={props.valueTwo}
                textColor= {props.valueTwo === '' ? styles.textInputBoxFakePlaceholderFontStyle : styles.textInputBoxFontStyle }/>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default DualTextInput;