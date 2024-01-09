import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {styles} from '../../../assets/css/common';



function ApplyModalDate(props) {
  
  return (
    <View style={{width:'100%'}}>
      <ScrollView>
        {props.data.map((value,index)=>{
          return <TouchableOpacity onPress={()=>props.action(value)} key={index} style={[styles.marginB10,styles.marginT15]} >
              <Text>{value}</Text>
            </TouchableOpacity>
        })}
       </ScrollView>
    </View>
  );
}



const inlineStyle = StyleSheet.create({
  searchButton: {
    padding: 10,
    marginLeft: 30,
    backgroundColor: '#F69B32',
    borderRadius: 9,
  },
});

export default ApplyModalDate;
