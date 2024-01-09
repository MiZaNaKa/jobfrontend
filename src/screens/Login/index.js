import React from 'react';
import {
  ScrollView,
  View,
  Text
} from 'react-native';
import { withNavigation } from 'react-navigation';

import {styles} from '../../assets/css/common';

import LoginTemplate from '../../components/templates/Login';

function Login() {
  return (
    <View style={styles.container}>
      <ScrollView>
        
        <LoginTemplate/>
      </ScrollView>
    </View>
  );
}

export default withNavigation(Login);
