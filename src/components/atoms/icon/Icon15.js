import React from 'react';
import { Image ,TouchableOpacity} from 'react-native';
import styles from './MsIcon.styles';

const Icon15 = (props) => (
    <TouchableOpacity onPress={props.action}>
        <Image resizeMode='contain'  source={ props.iconName }  style={styles.icon15} />
    </TouchableOpacity>
);

export default Icon15;