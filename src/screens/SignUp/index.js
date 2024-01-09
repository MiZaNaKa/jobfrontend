import React from 'react';
import {
  ScrollView,
  View,
  Text
} from 'react-native';
import {withNavigation} from 'react-navigation';

import {styles} from '../../assets/css/common';

import SignUp from '../../components/templates/SignUp';

function Login() {
  return (
    <View style={styles.container}>
      <ScrollView>
        
        <SignUp/>
      </ScrollView>
    </View>
  );
}

export default withNavigation(Login);
