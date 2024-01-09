import React from 'react';
import { TouchableOpacity, Text, StyleSheet,View } from 'react-native';
import PropTypes from 'prop-types';



const Button = props => {
  return (
    <View>
      {props.shadow ?
        <TouchableOpacity style={[styles.shadowButton,{backgroundColor:props.bgColor,borderWidth:props.borderWidth,borderColor:props.border,borderRadius:props.borderRadius,paddingTop:props.paddingTB,paddingBottom:props.paddingTB}]} onPress={props.action}>
          <Text style={[styles.buttonText,{textAlign: props.txt,color:props.txtColor,fontSize:props.fontSize,fontWeight:props.bold ? '600' :'300'}]}>{props.title}</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity style={[styles.button,{backgroundColor:props.bgColor,borderWidth:props.borderWidth,borderColor:props.border,borderRadius:props.borderRadius,paddingTop:props.paddingTB,paddingBottom:props.paddingTB}]} onPress={props.action}>
          <Text style={[styles.buttonText,{textAlign: props.txt,color:props.txtColor,fontSize:props.fontSize,fontWeight:props.bold ? '600' :'300'}]}>{props.title}</Text>
        </TouchableOpacity>
      }
    </View>
    
    
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    textAlign: 'center',
    alignContent: 'center',
    backgroundColor: '#E8E8E8',
    borderRadius: 20,
    padding: 8,
    backgroundColor: 'white',
    // alignItems: 'center',


    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  shadowButton:{
    justifyContent: 'center',
    textAlign: 'center',
    alignContent: 'center',
    backgroundColor: '#E8E8E8',
    borderRadius: 20,
    padding: 8,
    backgroundColor: 'white',
    alignItems: 'center',


    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#f57f17',
    fontSize: 16,
    textAlign:'center',
    fontFamily:'Poppins-Medium'
    // fontWeight:'700'
  },
});

export default Button;

Button.propTypes = {
  title: PropTypes.string,
  action: PropTypes.func,
};