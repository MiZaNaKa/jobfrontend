import React from 'react';
import { View, Text, Image  } from 'react-native';
import styles from './ForgotPassword.style';
import assetsManager from '../../../../assets/AssetsManager';

const ForgotPasswordHeader = (props) => {
    return(
        <View style={styles.headercontainer}>
            <Image resizeMode='contain' source={assetsManager.forgotpassword} style={styles.imageHeader} />
            <View style={styles.text}>
                <Text style={styles.title}>Forgot password</Text>
                <Text style={styles.subtitle}>Please enter your email address. You will receive a link to create a new password.</Text>
            </View>
        </View>
    )   
}

export default ForgotPasswordHeader;