import React, {useState} from 'react';

import {View, Text,ScrollView} from 'react-native';

import {styles} from '../../../assets/css/common';

import assetsManager from '../../../assets/AssetsManager';

import AppBar from '../../organisms/AppBar/AppBar';

import { useNavigation } from '@react-navigation/native';

import MsIcon24 from '../../atoms/icon/MsIcon24';

import Icon15 from '../../atoms/icon/Icon15';

import Button from '../../atoms/Buttons/Button';

import Loading from '../Loading/Loading';

import TimeSince from '../../../utils/DateTime';


function JobAppliance(props) {

  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({
    job_id:props.jobID,
    user_name: '',
    phone_number: '',
    location: '',
    email: '',
    position: '',
    where_did_you_work: '',
    experience_description: '',
    experience_start_date: '',
    experience_end_date: '',
    i_currently_work: 'off',
  });
  

  return (
    <View style={styles.container}>
      <AppBar
        title="Job Appliance"
        backIconName={assetsManager.backicon}
        onPressBack={() => {navigation.goBack()}}
        isImage={false}
        text=""
      />

      {props.loading ?
        <Loading/>
        :
        <ScrollView>
          {props.data.map((value, index)=>{
            return <View key={index} style={[styles.innerBox,styles.marginB15,styles.marginT5]}>
              <View style={[styles.row,styles.marginB10]}>
                <View style={{flex:1.6}}>
                  <MsIcon24 
                    imageLink={value.job_info.page.cover} onPress = {()=>{}} style={{ width: 139,height: 140,borderRadius:20}} />
                </View>

                <View style={styles.flexTwo}>
                  <View style={styles.marginB10}>
                    <Text style={[styles.txt16,styles.txtBold,styles.txtBlack]}>{value.user_name}</Text>
                  </View>
                  <View>
                    <View>
                      <View style={[styles.row,styles.marginB10]}>
                        <Icon15  iconName={assetsManager.locationIcon}/>
                        
                        <Text style={[styles.txt12,styles.txtBlack,styles.paddingLeft10,{lineHeight:18}]}>{value.location}</Text>
                      </View>

                      <View style={[styles.row,styles.marginB10]}>
                        <Icon15  iconName={assetsManager.timesIcon}/>
                        
                        <Text style={[styles.txt12,styles.txtBlack,styles.paddingLeft10,{lineHeight:18}]}>
                          {TimeSince(new Date(Date.now()-value.job_info.time))}
                        </Text>
                      </View>

                      <View style={[styles.row,styles.marginB10]}>
                        <Icon15  iconName={assetsManager.phoneIcon}/>
                        
                        <Text style={[styles.txt12,styles.txtBlack,styles.paddingLeft10,{lineHeight:18}]}>
                          {value.phone_number}
                        </Text>
                      </View>

                      <View style={[styles.row]}>
                        <Icon15  iconName={assetsManager.email}/>
                        
                        <Text numberOfLines={1}  style={[styles.txt12,styles.txtBlack,styles.paddingLeft10,{lineHeight:18,flex:1}]}>
                          {value.email}
                        </Text>
                      </View>
                    </View>

                  </View>
                </View>
              </View>

              <Button
                title="Message"
                txt="center"
                bgColor={'#f57f17'}
                border="#f57f17"
                txtColor="#fff"
                borderRadius={0}
                fontSize={16}
                borderWidth={1}
                bold={true}
              />

              <View style={styles.marginT40}>
                <View style={styles.marginB10}>
                  <Text style={[styles.txt16,styles.txtBold,styles.txtBlack]}>Position</Text>
                </View>

                <View style={styles.marginB30}>
                  <Text style={[styles.txt14,styles.txtBlack]}>IT</Text>
                </View>

                <View style={[styles.row,styles.marginB10]}>
                  <View style={styles.flexThree}>
                    <View style={styles.marginB20}>
                      <Text style={[styles.txt16,styles.txtBold,styles.txtBlack]}>Start Date</Text>
                    </View>
                    
                    <View>
                      <Text style={[styles.txt14,styles.txtBlack]}>2023</Text>
                    </View>
                  </View>

                  <View style={styles.flexOne}>
                    <View style={styles.marginB20}>
                      <Text style={[styles.txt16,styles.txtBold,styles.txtBlack]}>End Date</Text>
                    </View>
                    <View>
                      <Text style={[styles.txt14,styles.txtBlack]}>2023</Text>
                    </View>
                  </View>
                </View>

                <Text style={[styles.txt14,styles.txtBlack]}>Testing Job Post</Text>

              </View>
            </View>
          })}
          
        </ScrollView>
      }

    </View>
  );
}

export default JobAppliance;
