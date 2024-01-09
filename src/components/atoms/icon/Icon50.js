import React from 'react';
import { Image } from 'react-native';
import styles from './MsIcon.styles';

const Icon50 = (props) => (
    <Image resizeMode='contain' source={ props.iconName } style={styles.icon50} />
);

export default Icon50;