import React from 'react';
import { TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';
import styles from './ActionButton.Styles';
import Loading from '../../templates/Loading/Loading';

const ActionButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.9}>
      <View style={{borderRadius: props.borderRadius, backgroundColor: props.backgroundColor, alignItems: 'center', width: props.width, height: props.height,justifyContent: 'center'}}>
        {props.loading ? 
          <View style={{ justifyContent: 'center', alignItems: 'center', width: props.loadingWidth, height: props.loadingHeight }}>
            <ActivityIndicator animating={true} size="large" color="#FFFFFF" />
          </View> :
        <View style={{}}><Text style={styles.textStyle}>{props.buttonText}</Text></View> }
      </View>
    </TouchableOpacity>
  );
};

export default ActionButton;