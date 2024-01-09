import React, {useEffect, useState, useRef} from 'react';
import {View, Text,ScrollView} from 'react-native';
import SimpleReactValidator from 'simple-react-validator';
import ForgotPasswordHeader from '../../../molecules/Authentication/ForgotPassword/ForgotPasswordHeader';
import ForgotPasswordInput from '../../../molecules/Authentication/ForgotPassword/ForgotPasswordInput';
import ForgotPasswordBtn from '../../../molecules/Authentication/ForgotPassword/ForgotPasswordBtn';

const ForgotPasswordOrgan = (props) => {

  const simpleValidator = useRef(new SimpleReactValidator());
    const [, forceUpdate] = useState();

    const CheckValidation =async() => {
      const formValid = simpleValidator.current.allValid()
      if (!formValid) {
        simpleValidator.current.showMessages()
        forceUpdate(1)
      }
      else{
        props.onPressForgotPassword({
          email: props.email
        });
      }
    };

  return(
    <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}>
            <ForgotPasswordHeader />
            <ForgotPasswordInput 
              email={props.email}
              setEmail={props.setEmail}
              emailField={props.emailField}
              simpleValidator={simpleValidator}
            />
            <ForgotPasswordBtn 
              CheckValidation={CheckValidation} loading = {props.loading} setLoading = {props.setLoading}
            />
        </ScrollView>
    </View>
  );
}

export default ForgotPasswordOrgan;

