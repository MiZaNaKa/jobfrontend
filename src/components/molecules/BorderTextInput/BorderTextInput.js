import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './BorderTextInput.Styles';
import Icon from '../../atoms/icon/Icon';
import EditTextInput from '../../atoms/EditTextInput/EditTextInput';
import ToucahbleIcon from '../TouchableIcon/TouchableIcon';

const BorderTextInput = (props) => (
    <View 
        style={ props.borderTextInputStyle ? props.borderTextInputStyle : styles.borderTextInputStyle}>
        <View style={props.prifixIconAndTextInputStyle ? props.prifixIconAndTextInputStyle : styles.prifixIconAndTextInputStyle}>
            { props.preFit ? <Icon source={props.preFit} width={props.preFitWidth} height={props.preFitHeight} /> : null }
            <View style={props.textInputStyle ? props.textInputStyle : styles.textInputStyle}>
                <EditTextInput 
                    onChangeText={props.onChangeText} value={props.value} fieldName={props.fieldName} 
                    placeholder= {props.placeholder} number={props.number} secureTextEntry={props.secureTextEntry} />
            </View>
        </View>
        {/* { props.postFit ? <Icon source={props.postFit} width={props.postFitWidth} height={props.postFitHeight} /> : null } */}
        { props.postFit ? <ToucahbleIcon onPress={props.onPress} source={props.postFit} iconWidth={props.postFitWidth} iconHeight={props.postFitHeight} /> : null }
    </View>
);
export default BorderTextInput;