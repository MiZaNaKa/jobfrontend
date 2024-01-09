import React from 'react';
import { View, Text, Image  } from 'react-native';
import styles from './Login.style';
import ActionButton from '../../../atoms/Buttons/ActionBtton';
const LoginBtn = (props) => {
    return(
        <View style={styles.btncontainer}>
            <ActionButton backgroundColor='#333333' buttonText='Login' borderRadius={8} height={55} loadingWidth ={22} loadingHeight = {22} onPress={props.CheckValidation} loading = {props.loading} setLoading = {props.setLoading}/>
        </View>
    )   
}

export default LoginBtn;