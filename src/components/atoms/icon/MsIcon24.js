import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from './MsIcon.styles';

const MsIcon24 = (props) => (
    <TouchableOpacity onPress={props.onPress}>
        <Image resizeMode='stretch' src={props.imageLink} source={ props.iconName } style={[styles.iconConfig, props.style]} />
    </TouchableOpacity>
   
); 
//test azm
//test----------------------
export default MsIcon24;