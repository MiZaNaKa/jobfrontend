import React from 'react';
import { Image, View } from 'react-native';
import assets from '../../../assets/AssetsManager';
import styles from './Icon.Styles';

const Icon = (props) => (
    <View>
        {
            props.src ? 
            <Image resizeMode='stretch' src={props.src} style={{width: props.width, height: props.height}} /> : 
            props.source ?
            <Image resizeMode='stretch' source={ props.source } style={{width: props.width, height: props.height}} /> :
            <Image resizeMode='stretch' source={ assets.login_eamil_icon } style={{width: props.width, height: props.height}} />
        }
    </View>
);

export default Icon;