import React from 'react';
import { View, Text, Image  } from 'react-native';
import styles from './Login.style';
import assetsManager from '../../../../assets/AssetsManager';

const LoginHeader = (props) => {
    return(
        <View style={styles.headercontainer}>
            <Image resizeMode='contain' source={assetsManager.welcomeback} style={styles.imageHeader} />
            <View style={styles.text}>
                <Text style={styles.title}>Welcome back!</Text>
                <Text style={styles.subtitle}>Please enter your email or login with social accounts</Text>
            </View>
        </View>
    )   
}

export default LoginHeader;