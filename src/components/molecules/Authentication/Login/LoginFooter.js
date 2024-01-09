import React from 'react';
import { View, Text, Image, TouchableOpacity  } from 'react-native';
import styles from './Login.style';
import { useNavigation } from '@react-navigation/native';
import Icon from '../../../atoms/icon/Icon';
import assetsManager from '../../../../assets/AssetsManager';
import SizedBox from '../../../atoms/SizdedBox/SizedBox';
const LoginFooter = (props) => {
    const navigation = useNavigation();
    return(
        <View style={styles.footercontainer}>
            <View style={{alignItems: 'center',flexDirection: 'row', justifyContent: 'center',}}>
                <View style={styles.socialIconShape}><Icon source={assetsManager.facebook_icon} width={32} height={32} /></View>
                <SizedBox width={24} height={0} />
                <View style={styles.socialIconShape}><Icon source={assetsManager.google_icon} width={32} height={32} /></View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footertext}>
                    Don’t have an account?{' '}
                </Text>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Registeration');
                }}>
                    <Text style={styles.signup}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )   
}

export default LoginFooter;