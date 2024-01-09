import React from 'react';
import { View, Text, Image, TouchableOpacity  } from 'react-native';
import style from './ForgotPassword.style';
import {styles} from '../../../../assets/css/common';
import { useNavigation } from '@react-navigation/native';
import assetsManager from '../../../../assets/AssetsManager';
import BorderTextInput from '../../BorderTextInput/BorderTextInput';

const ForgotPasswordInput = (props) => {
    const navigation = useNavigation();
    const simpleValidator = props.simpleValidator;
    return(
        <View style={style.inputcontainer}>
            <Text style={style.emailLabel}>Email</Text>
            <BorderTextInput placeholder='Your Email' number={false} preFit={assetsManager.login_eamil_icon} preFitWidth={18} preFitHeight={16} value={props.email} onChangeText={props.setEmail}/>
            {simpleValidator.current.message(props.emailField, props.email, 'required') ?
                        <Text style={[styles.txt12,styles.txtRed,{marginLeft: 18}]}>{simpleValidator.current.message(props.emailField, props.email, 'required')}</Text>
                        :
                        null
                        }
        </View>
    )   
}

export default ForgotPasswordInput;