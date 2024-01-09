import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {styles} from '../../../assets/css/common';
import {withNavigation} from 'react-navigation';

import ButtonN from "../../atoms/Buttons/Button"

import assetsManager from '../../../assets/AssetsManager';


function notFound(props) {
    
  return (
    <View>
        <Image resizeMode='contain'  source={assetsManager.noData}  style={styles.notFound} />
    </View>
  );
}




export default notFound;
