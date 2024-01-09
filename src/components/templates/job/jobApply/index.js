import React, {useEffect, useState,useRef} from 'react';

import {View, Text, Modal, TouchableOpacity,ScrollView} from 'react-native';

import {styles} from '../../../../assets/css/common';

import assetsManager from '../../../../assets/AssetsManager';

import InputBox from '../../../atoms/Input/Input';

import ApplyModalDate from '../../../molecules/ApplyModalDate';

import AppBar from '../../../organisms/AppBar/AppBar';

import Axios from "../../../../services/Job"

import { useNavigation } from '@react-navigation/native';

import MsIcon24 from '../../../atoms/icon/MsIcon24';

import MsCheckBox from '../../../atoms/checkIcon';

import SimpleReactValidator from 'simple-react-validator';

function jobApply(props) {
  
  const simpleValidator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState();
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
  const [startDate, setStartDate] = useState(false);

  const [endDate, setEndDate] = useState(false);

  const [totalYear, setTotalYear] = useState([]);

  const [require, setRequire] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const [priceError, setPriceError] = useState("");
  
  const place1 = 'From Date';

  const place2 = 'To Date';

  useEffect(() => {
    const d = new Date();
    var totalYear = [];
    var count = 50;

    for (var i = 0; i < count; i++) {
      var minusYear = d.getFullYear() - i;
      totalYear.push(minusYear);
    }

    setTotalYear(totalYear);
  }, []);

  const nameOnChange = value => {
    setUserInfo({...userInfo, user_name: value});
  };

  const phoneOnChange = value => {
    setUserInfo({...userInfo, phone_number: value});
  };

  const locationOnChange = value => {
    setUserInfo({...userInfo, location: value});
  };

  const emailOnChange = value => {
    setUserInfo({...userInfo, email: value});
  };

  const positionOnChange = value => {
    setUserInfo({...userInfo, position: value});
  };

  const wordOnChange = value => {
    setUserInfo({...userInfo, where_did_you_work: value});
  };

  const descriptionOnChange = value => {
    setUserInfo({...userInfo, experience_description: value});
  };

  const fromDateOnChange = value => {
    setUserInfo({...userInfo, experience_start_date: value});
    setStartDate(!startDate);
  };

  const toDateOnChange = value => {
    setUserInfo({...userInfo, experience_end_date: value});
    setEndDate(!endDate);
  };

  const startDateModalAction = value => {
    setStartDate(!startDate);
  };

  const endDateModalAction = value => {
    setEndDate(!startDate);
  };

  const handleCheckboxChange = value => {
    setIsChecked(!isChecked)
    if(!isChecked ===false){
      setUserInfo({...userInfo, i_currently_work: 'off'});
    }
    else{
      setUserInfo({...userInfo, i_currently_work: 'on'});
    }
  };


  const Submit =async(value) => {
    const obj = userInfo;
    const formValid = simpleValidator.current.allValid()
    
    if (!formValid) {
      simpleValidator.current.showMessages()
      forceUpdate(1)
    }
    else{
      if(parseInt(obj.experience_start_date)>parseInt(obj.experience_end_date)){
        setPriceError("start date cannot be greater than end date")
      }
      else{
        
        setPriceError("")
        var response=await Axios.applyJob(obj)
      
        if (response.data.api_status === 200) {
          navigation.navigate('Job')
        }
      }
    }
  };

  

  return (
    <View style={styles.container}>
      <AppBar
        title={props.jobTitle}
        backIconName={assetsManager.backicon}
        onPressBack={() => {navigation.goBack()}}
        onPressAction={Submit}
        isImage={false}
        text="Send"
      />
      <ScrollView>
        <View
          style={[
            styles.borBottomWidth1,
            styles.borderColorG,
            styles.marginB10,
          ]}>
          
          <View style={styles.paddingAll}>
            <View style={[styles.row, styles.marginB10]}>
              <View style={{flex:0.7}}>
                <View style={[styles.marginT10,]}>
                  <MsIcon24 iconName={assetsManager.userIcon}/>
                  
                </View>
              </View>

              <View style={styles.flexSix}>
                <InputBox
                  placholder="Name"
                  borderColor={'#cfcfcf'}
                  borderRadius={17}
                  paddingTB={8}
                  paddingR={15}
                  paddingL={15} 
                  maxLength={50}
                  number={false}
                  secureTextEntry={false}
                  action={nameOnChange}
                  value={userInfo.user_name}
                  placholderColor={'#808080'}
                  area={false}
                />
              </View>
            </View>

            {simpleValidator.current.message('name', userInfo.user_name, 'required') ?
              <View style={[styles.row, styles.marginB10]}>
                <View style={{flex:0.7}}>
                      
                </View>

                <View style={styles.flexSix}>
                  <Text style={[styles.txt12,styles.txtRed]}>{simpleValidator.current.message('name', userInfo.user_name, 'required')}</Text>
                </View>
              </View>
              :
              null
            }

            
            

            <View style={[styles.row, styles.marginB10]}>
              <View style={{flex:0.7}}>
                <View style={[styles.marginT10]}>
                  <MsIcon24 iconName={assetsManager.phoneIcon}/>
                  
                </View>
              </View>

              <View style={styles.flexSix}>
                <InputBox
                  placholder="Phone"
                  borderColor={'#cfcfcf'}
                  borderRadius={17}
                  paddingTB={8}
                  paddingR={15}
                  paddingL={15} 
                  maxLength={12}
                  number={true}
                  secureTextEntry={false}
                  action={phoneOnChange}
                  value={userInfo.phone_number}
                  placholderColor={'#808080'}
                  area={false}
                />
              </View>
            </View>

            {simpleValidator.current.message('phone', userInfo.phone_number, 'required') ?
              <View style={[styles.row, styles.marginB10]}>
                <View style={{flex:0.7}}>
                      
                </View>

                <View style={styles.flexSix}>
                  <Text style={[styles.txt12,styles.txtRed]}>{simpleValidator.current.message('phone', userInfo.phone_number, 'required')}</Text>
                </View>
              </View>
              :
              null
            }

            

            <View style={[styles.row, styles.marginB10]}>
              <View style={{flex:0.7}}>
                <View style={[styles.marginT10]}>
                  <MsIcon24 iconName={assetsManager.locationIcon} />
                </View>
              </View>

              <View style={styles.flexSix}>
                <InputBox
                  placholder="Location"
                  borderColor={'#cfcfcf'}
                  borderRadius={17}
                  paddingTB={8}
                  paddingR={15}
                  paddingL={15} 
                  maxLength={150}
                  number={false}
                  secureTextEntry={false}
                  action={locationOnChange}
                  value={userInfo.location}
                  numberOfLines={3}
                  placholderColor={'#808080'}
                  area={true}
                />
              </View>
            </View>

            {simpleValidator.current.message('location', userInfo.location, 'required') ?
              <View style={[styles.row, styles.marginB10]}>
                <View style={{flex:0.7}}>
                      
                </View>

                <View style={styles.flexSix}>
                  <Text style={[styles.txt12,styles.txtRed]}>{simpleValidator.current.message('location', userInfo.location, 'required')}</Text>
                </View>
              </View>
              :
              null
            }

            <View style={[styles.row, styles.marginB10]}>
              <View style={{flex:0.7}}>
                <View style={[styles.marginT10]}>
                  <MsIcon24 iconName={assetsManager.email} />
                </View>
              </View>

              <View style={styles.flexSix}>
                <InputBox
                  placholder="Email"
                  borderColor={'#cfcfcf'}
                  borderRadius={17}
                  paddingTB={8}
                  paddingR={15}
                  paddingL={15} 
                  maxLength={100}
                  number={false}
                  secureTextEntry={false}
                  action={emailOnChange}
                  value={userInfo.email}
                  placholderColor={'#808080'}
                  area={false}
                />
              </View>
            </View>

            {simpleValidator.current.message('email', userInfo.email, 'required|email') ?
              <View style={[styles.row, styles.marginB10]}>
                <View style={{flex:0.7}}>
                      
                </View>

                <View style={styles.flexSix}>
                  <Text style={[styles.txt12,styles.txtRed]}>{simpleValidator.current.message('email', userInfo.email, 'required|email')}</Text>
                </View>
              </View>
              :
              null
            }

            
          </View>
        </View>

        <View style={[styles.marginB20]}>
          <View style={styles.paddingAll}>
            <View style={[styles.marB20,]}>
              <Text style={[styles.txt16, styles.txtBlack]}>Experience</Text>
            </View>
            <View style={[styles.row, styles.marginB10]}>
              <View style={{flex:0.7}}>
                <View style={[styles.marginT10]}>
                  <MsIcon24 iconName={assetsManager.positionIcon} />
                </View>
              </View>

              <View style={styles.flexSix}>
                <InputBox
                  placholder="Position"
                  borderColor={'#cfcfcf'}
                  borderRadius={17}
                  paddingTB={8}
                  paddingR={15}
                  paddingL={15} 
                  maxLength={70}
                  number={false}
                  secureTextEntry={false}
                  action={positionOnChange}
                  value={userInfo.position}
                  shadow={false}
                  placholderColor={'#808080'}
                  area={false}
                />
              </View>
            </View>

            {simpleValidator.current.message('position', userInfo.position, 'required') ?
              <View style={[styles.row, styles.marginB10]}>
                <View style={{flex:0.7}}>
                      
                </View>

                <View style={styles.flexSix}>
                  <Text style={[styles.txt12,styles.txtRed]}>{simpleValidator.current.message('position', userInfo.position, 'required')}</Text>
                </View>
              </View>
              :
              null
            }

            <View style={[styles.row, styles.marginB10]}>
              <View style={{flex:0.7}}>
                <View style={[styles.marginT10]}>
                  <MsIcon24 iconName={assetsManager.workIcon} />
                </View>
              </View>

              <View style={styles.flexSix}>
                <InputBox
                  placholder="Where did you work"
                  borderColor={'#cfcfcf'}
                  borderRadius={17}
                  paddingTB={8}
                  paddingR={15}
                  paddingL={15} 
                  maxLength={150}
                  number={false}
                  secureTextEntry={false}
                  action={wordOnChange}
                  value={userInfo.where_did_you_work}
                  numberOfLines={2}
                  placholderColor={'#808080'}
                  area={false}
                />
              </View>
            </View>

            {simpleValidator.current.message('where_did_you_work', userInfo.where_did_you_work, 'required') ?
              <View style={[styles.row, styles.marginB10]}>
                <View style={{flex:0.7}}>
                      
                </View>

                <View style={styles.flexSix}>
                  <Text style={[styles.txt12,styles.txtRed]}>{simpleValidator.current.message('where_did_you_work', userInfo.where_did_you_work, 'required')}</Text>
                </View>
              </View>
              :
              null
            }

            <View style={[styles.row, styles.marginB10]}>
              <View style={{flex:0.7}}>
                <View style={[styles.marginT10]}>
                  <MsIcon24 iconName={assetsManager.descriptionIcon} />
                </View>
              </View>

              <View style={styles.flexSix}>
                <InputBox
                  placholder="Description"
                  borderColor={'#cfcfcf'}
                  borderRadius={17}
                  paddingTB={8}
                  paddingR={15}
                  paddingL={15} 
                  maxLength={200}
                  number={false}
                  secureTextEntry={false}
                  action={descriptionOnChange}
                  value={userInfo.experience_description}
                  numberOfLines={3}
                  placholderColor={'#808080'}
                  area={true}
                />
              </View>
            </View>

            {simpleValidator.current.message('experience_description', userInfo.experience_description, 'required') ?
              <View style={[styles.row, styles.marginB10]}>
                <View style={{flex:0.7}}>
                      
                </View>

                <View style={styles.flexSix}>
                  <Text style={[styles.txt12,styles.txtRed]}>{simpleValidator.current.message('experience_description', userInfo.experience_description, 'required')}</Text>
                </View>
              </View>
              :
              null
            }

            

            <View style={[styles.row, styles.marginB10]}>
              <View style={{flex:0.7}}>
                <View style={[styles.marginT10]}>
                  <MsIcon24 iconName={assetsManager.calendar} />
                </View>
              </View>

              <View style={styles.flexSix}>
                <View style={styles.row}>
                  <View style={[styles.flexTwo, styles.marginR10]}>
                    <TouchableOpacity
                      onPress={startDateModalAction}
                      style={[
                        styles.borderWidth1,
                        styles.borderColorG,
                        styles.borderRadius20,
                        styles.paddingAll,
                        {height: 40,paddingLeft:15},
                      ]}>
                      {userInfo.experience_start_date ? (
                        <Text style={[styles.txt14, styles.placeHolderColor]}>
                          {userInfo.experience_start_date}
                        </Text>
                      ) : (
                        <Text style={[styles.txt14, styles.placeHolderColor]}>
                          {place1}
                        </Text>
                      )}
                    </TouchableOpacity>
                    {/* <InputBox
                      placholder="From Date"
                      borderColor={'#cfcfcf'}
                      borderRadius= {10}
                      padding= {10}
                      maxLength={10}
                      number={false}
                      secureTextEntry={false}
                      action={fromDateOnChange}
                      value={userInfo.experience_start_date}
                    /> */}
                      {simpleValidator.current.message('experience start date', userInfo.experience_start_date, 'required')?
                        <View style={styles.marginT10}>
                          <Text style={[styles.txt12,styles.txtRed]}>{simpleValidator.current.message('experience start date', userInfo.experience_start_date, 'required')}</Text>
                        </View>
                        :
                        null
                      }
                      
                      
                  </View>

                  <View style={styles.flexTwo}>
                    <TouchableOpacity
                      onPress={endDateModalAction}
                      style={[
                        styles.borderWidth1,
                        styles.borderColorG,
                        styles.borderRadius20,
                        styles.paddingAll,
                        {height: 40,paddingLeft:15},
                      ]}>
                      {userInfo.experience_end_date ? (
                        <Text style={[styles.txt14, styles.placeHolderColor]}>
                          {userInfo.experience_end_date}
                        </Text>
                      ) : (
                        <Text style={[styles.txt14, styles.placeHolderColor]}>
                          {place2}
                        </Text>
                      )}
                    </TouchableOpacity>

                    {/* <TouchableOpacity style={[styles.borderWidth1,styles.borderColorG,styles.borderRadius10,styles.paddingAll,{height:50}]}>
                      <Text style={[styles.txt14,styles.txtLightGray]}>{userInfo.experience_end_date ? userInfo.experience_end_date :place2}</Text>
                    </TouchableOpacity> */}
                    {/* <InputBox
                      placholder="To Date"
                      borderColor={'#cfcfcf'}
                      borderRadius= {10}
                      padding= {10}
                      maxLength={10}
                      number={false}
                      secureTextEntry={false}
                      action={toDateOnChange}
                      value={userInfo.experience_end_date}
                    /> */}
                    {simpleValidator.current.message('experience_end_date', userInfo.experience_end_date, 'required')?
                      <View style={styles.marginT10}>
                        <Text style={[styles.txt12,styles.txtRed]}>{simpleValidator.current.message('experience end date', userInfo.experience_end_date, 'required')}</Text>
                      </View>
                      :
                      null
                    }
                  </View>
                </View>
              </View>
            </View>

            <View style={[styles.row, styles.marginB10,styles.boxCenter,{width:'50%'}]}>
              <MsCheckBox
                value={isChecked}
                onValueChange={handleCheckboxChange} 
              />
              <Text style={[styles.txt12,styles.paddingAll,styles.txtBlack]}>I currently work here</Text>

            </View>

            <View>
              <Text style={[styles.txt12,styles.txtRed]}>{priceError}</Text>
            </View>

            
          </View>
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={startDate}
        onRequestClose={() => {
          setStartDate(!startDate);
        }}>
        <View style={[styles.modalBox]}>
          <View style={[styles.modalInnerBox, {width: '85%'}]}>
            <ApplyModalDate action={fromDateOnChange} data={totalYear} />
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={endDate}
        onRequestClose={() => {
          setEndDate(!endDate);
        }}>
        <View style={[styles.modalBox]}>
          <View style={[styles.modalInnerBox, {width: '85%'}]}>
            <ApplyModalDate action={toDateOnChange} data={totalYear} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default jobApply;
