import React from 'react';
import { View, Text, Image  } from 'react-native';
import styles from './ForgotPassword.style';
import ActionButton from '../../../atoms/Buttons/ActionBtton';
const ForgotPasswordBtn = (props) => {
    return(
        <View style={styles.btncontainer}>
            <ActionButton backgroundColor='#333333' buttonText='Send' borderRadius={8} onPress={props.CheckValidation} height={55} loadingWidth ={22} loadingHeight = {22} loading = {props.loading} setLoading = {props.setLoading}/>
        </View>
    )   
}

export default ForgotPasswordBtn;