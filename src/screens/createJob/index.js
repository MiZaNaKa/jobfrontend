import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import {withNavigation} from 'react-navigation';

import {styles} from '../../assets/css/common';

import CreateJobTemplate from '../../components/templates/createJob';

function createJob() {
  return (
    <View style={styles.container}>
      <ScrollView>        
        <CreateJobTemplate/>
      </ScrollView>
    </View>
  );
}

export default withNavigation(createJob);
