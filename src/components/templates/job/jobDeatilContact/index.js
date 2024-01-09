import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';

import {styles} from '../../../../assets/css/common';
import PropTypes from 'prop-types';

import assetsManager from '../../../../assets/AssetsManager';

import Icon15 from '../../../atoms/icon/Icon15';
import TimeSince from '../../../../utils/DateTime';

import {jobCategory} from "../../../../constants/job"

function jobDeatilContact(detail) {
  console.log(detail)
  return (
    <View>
        <View style={[styles.paddingAll,styles.marginB5]}>
          <Text style={[styles.txt16,styles.txtBlack,styles.txtCenter]}>{detail.getJobDetail.job_title}</Text>
        </View>

        <View>
          <View style={[styles.rowCenter,styles.marginB10]}>
            <Icon15  iconName={assetsManager.locationIcon}/>            
            <Text style={[styles.txt14,styles.txtBlack,styles.paddingLeft10]}>{detail.getJobDetail.location}</Text>
          </View>

          <View style={styles.marginB20}>
            <View style={inlineStyle.innerMain}>
              <View style={[styles.marginT24,styles.marginB20]}>
                <Text style={[styles.txt16,styles.txtBold,styles.txtBlack,]}>{detail.getJobDetail.title}</Text>
              </View>

              <View style={styles.paddingLeft20}>
                <View style={[styles.row,styles.marginB15]}>
                  <Icon15  iconName={assetsManager.workIcon}/>
                  
                  <Text style={[styles.txt12,styles.txtBlack,styles.paddingLeft20,{lineHeight:14}]}>{detail.getJobDetail.job_type}</Text>
                </View>

                {/* <View style={[styles.row,styles.marginB15]}>
                  <Icon15  iconName={assetsManager.timesIcon}/>                  
                  <Text style={[styles.txt12,styles.txtBlack,styles.paddingLeft20,{lineHeight:14}]}>
                    {TimeSince(new Date(Date.now()-detail.getJobDetail.time))}
                    
                  </Text>
                </View> */}

                {parseInt(detail.getJobDetail.category)<20 ?
                  <View style={[styles.row,styles.marginB15]}>
                    <Icon15  iconName={assetsManager.jobType}/>
                    
                    <Text style={[styles.txt12,styles.txtBlack,styles.paddingLeft20,{lineHeight:14}]}>
                      {jobCategory[parseInt(detail.getJobDetail.category)-1].name}
                      </Text>
                  </View>
                  
                  :
                  null
                }

                <View style={[styles.row]}>
                  <Icon15  iconName={assetsManager.money}/>
                  
                  <Text style={[styles.txt12,styles.txtBlack,styles.paddingLeft20,{lineHeight:14}]}>
                    {detail.getJobDetail.minimum}$ To {detail.getJobDetail.maximum}$</Text>
                </View>
              </View>

              <View style={[styles.marginT24,styles.marB20]}>
                <Text style={[styles.txt16,styles.txtBlack,styles.txtBold]}>description</Text>
              </View>

              {detail.getJobDetail.description.length > 100 ? (
                <View style={[{marginBottom:25}]}>
                  <View style={[styles.row,styles.marB20]}>
                    <Text style={[styles.txt12,styles.txtBlack,styles.paddingLeft20,{lineHeight:18}]}>{detail.getJobDetail.description}</Text>
                  </View>
                </View>
              ) : (
                <View style={[{height:150,flex:1}]}>
                  <View style={[styles.row,styles.marB20]}>
                    <Text style={[styles.txt12,styles.txtBlack,styles.paddingLeft20,{lineHeight:18}]}>{detail.getJobDetail.description}</Text>
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>
    </View>
    
  );
}

jobDeatilContact.propTypes = {
  detail: PropTypes.object,
};



const inlineStyle = StyleSheet.create({
  innerMain: {
    width:'80%',
    marginLeft:'auto',
    marginRight:'auto',
  },
});

export default jobDeatilContact;
