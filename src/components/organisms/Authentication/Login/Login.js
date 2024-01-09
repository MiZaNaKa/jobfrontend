import React, {useEffect, useState, useRef} from 'react';
import {View, Text,ScrollView, Dimensions} from 'react-native';
import SimpleReactValidator from 'simple-react-validator';
import LoginHeader from '../../../molecules/Authentication/Login/LoginHeader';
import LoginInput from '../../../molecules/Authentication/Login/LoginInput';
import LoginBtn from '../../../molecules/Authentication/Login/LoginBtn';
import LoginFooter from '../../../molecules/Authentication/Login/LoginFooter';

const LoginOrgan = (props) => {

  const simpleValidator = useRef(new SimpleReactValidator());
    const [, forceUpdate] = useState();

    const CheckValidation =async() => {
      const formValid = simpleValidator.current.allValid()
      if (!formValid) {
        simpleValidator.current.showMessages()
        forceUpdate(1)
      }
      else{
        props.onPressLogin({
          email: props.email,
          pass: props.pass,
        });
    
      }
    };

  return(
    <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}>
          <LoginHeader />
          <LoginInput 
              email={props.email}
              pass={props.pass}
              setEmail={props.setEmail}
              setPass={props.setPass}
              emailField={props.emailField}
              passField={props.passField}
              rememberMe={props.rememberMe}
              handleRememberMeChange={props.handleRememberMeChange}
              simpleValidator={simpleValidator}
              onPressPass={props.onPressPass}
              secureTextEntry={props.secureTextEntry}
          />
          <LoginBtn CheckValidation={CheckValidation} loading = {props.loading} setLoading = {props.setLoading}/>
          <LoginFooter />
        </ScrollView>
    </View>
  );
}

export default LoginOrgan;

