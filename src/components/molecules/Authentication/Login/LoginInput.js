import React from 'react';
import { View, Text, Image, TouchableOpacity  } from 'react-native';
import style from './Login.style';
import {styles} from '../../../../assets/css/common';
import { useNavigation } from '@react-navigation/native';
import assetsManager from '../../../../assets/AssetsManager';
import MsCheckBox from '../../../atoms/checkIcon';
import BorderTextInput from '../../BorderTextInput/BorderTextInput';

const LoginInput = (props) => {
    const navigation = useNavigation();
    const simpleValidator = props.simpleValidator;
    return(
        <View style={style.inputcontainer}>
            <BorderTextInput placeholder='Your Email' number={false} preFit={assetsManager.login_eamil_icon} preFitWidth={18} preFitHeight={16} value={props.email} onChangeText={props.setEmail}/>
            {simpleValidator.current.message(props.emailField, props.email, 'required') ?
                        <Text style={[styles.txt12,styles.txtRed,{marginLeft: 18}]}>{simpleValidator.current.message(props.emailField, props.email, 'required')}</Text>
                        :
                        null
                        }
            <View style={{marginVertical:8}}></View>
            <BorderTextInput placeholder='Password' number={false} secureTextEntry={props.secureTextEntry} preFit={assetsManager.login_password_icon}
             preFitWidth={16} preFitHeight={18} postFit={props.secureTextEntry ?assetsManager.login_close_eye_icon: assetsManager.login_open_eye_icon} postFitWidth={18} postFitHeight={16} value={props.pass} onChangeText={props.setPass} onPress={props.onPressPass}/>
             {simpleValidator.current.message(props.passField, props.pass, 'required') ?
                        <Text style={[styles.txt12,styles.txtRed,{marginLeft: 18}]}>{simpleValidator.current.message(props.passField, props.pass, 'required')}</Text>
                        :
                        null
                        }
            <View style={{marginVertical:4}}></View>
            <View style={style.checkboxrow}>
                <View style={style.checkbox}>
                    <MsCheckBox value={props.rememberMe} onValueChange={props.handleRememberMeChange} tintColorTrue={'#333'} tintColorFalse={'#333'}/>
                    <Text style={style.rememberMe}>Remember me</Text>
                </View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('ForgotPassword');
                }}>
                    <Text style={styles.forgot}>Forgot password</Text>
                </TouchableOpacity>
            </View>
        </View>
    )   
}

export default LoginInput;