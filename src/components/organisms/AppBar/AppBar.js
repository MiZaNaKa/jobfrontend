/*For App Bar */
import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import commonStyle from './AppBar.Styles';
import {styles} from '../../../assets/css/common';
import InputBox from '../../atoms/Input/Input';

const AppBar = (props) => {
  return (
    <View style={[commonStyle.appBar,styles.boxShadow]}>
      <View style={{flexDirection:'column'}}>
        <TouchableOpacity onPress={props.onPressBack}>
          <Image source={props.backIconName} resizeMode='cover' style={commonStyle.HeaderBackButton} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 6,flexDirection:'column', marginLeft: 16}}>
        {props.input ?
          <InputBox
            placholder={"search"}
            borderColor={'#fff'}
            borderRadius= {0}
            padding= {3}
            action={props.action}
            value={props.value}
            submitAction={props.submitAction}
          />
          :
          <Text style={[styles.txt20, styles.txtBlack, commonStyle.titleFontFamily]}>{props.title}</Text>
        }
      </View>
      {
        props.isImage ? 
        <View style={{flexDirection:'column', marginLeft: 16}}>
          <TouchableOpacity onPress={props.onPressAction}>
            <Image source={props.lastIconName} style={commonStyle.listRightItemIcon} />
          </TouchableOpacity>
        </View> :
        <View style={{flexDirection:'column', marginLeft: 16}}>
          <TouchableOpacity onPress={props.onPressAction}>
            <Text style={[styles.txt16,styles.txtBold,styles.txtBlack]}>{props.text}</Text>
          </TouchableOpacity>
        </View>
      }
      
    </View>
  );
};

export default AppBar;