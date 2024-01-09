import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  StyleSheet
} from 'react-native';

import Axios from "../../services/Job/index"

import {withNavigation} from 'react-navigation';

import JobDeatilBanner from '../../components/templates/job/jobDeatilBanner';

import JobDeatilContact from '../../components/templates/job/jobDeatilContact';

import Loading from '../../components/templates/Loading/Loading';

import { styles } from '../../assets/css/common';

import Button from '../../components/atoms/Buttons/Button';


import { useNavigation,useFocusEffect  } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

function JobDetail(props) {
  const navigation = useNavigation();
  const [getJobDetail, setJobDetail] = useState({});
  const [getUserInfo, setUserInfo] = useState([]);
  const [getData, setGetData] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      
      const getAPI = async () => {
        var response =await Axios.getJobDetail(props.route.params.id)
        if(response.data.status==1){
          setJobDetail(response.data.success.data.success.data);
        }
        var value =await AsyncStorage.getItem('loginUser')
        setUserInfo(value)
        setGetData(true)
    }
    getAPI()
      .catch(console.error);

    }, [])
  )
  
  useEffect(() => {
    const getAPI = async () => {
      
      var response =await Axios.getJobDetail(props.route.params.id)
      if(response.data.status==1){
        setJobDetail(response.data.success.data.success.data);
      }
      var value =await AsyncStorage.getItem('loginUser')
      setUserInfo(value)
      setGetData(true)
    }
    getAPI()
      .catch(console.error);
  }, [])

  return (
    <View style={[styles.container]}>
     
      {getData ?
        <ScrollView>
          <View>
            
            <View style={{marginBottom:5}}>
              <JobDeatilBanner getJobDetail={getJobDetail}/>
            </View>
            

            <JobDeatilContact getJobDetail={getJobDetail} getUserInfo={getUserInfo}/>

          </View>
        </ScrollView>
        :
        <Loading/>
      }

      {/* {getData ?
        <View>
          <View style={inlineStyle.innerMain}>
            <View style={styles.marginB40}>
              {getUserInfo.user_id === getJobDetail.user_id ?
                <Button
                  title={"Show Applies ("+ getJobDetail.apply_count +")"}
                  txt="center"
                  bgColor={'#f57f17'}
                  border="#f57f17"
                  txtColor="#fff"
                  borderRadius={20}
                  bold={true}
                  shadow={true}
                  action={() =>navigation.navigate('JobAppliance',{id:getJobDetail.id})}
                />
                :
                <Button
                  title={getJobDetail.apply ? "Already Applied" :"Apply"}
                  txt="center"
                  bgColor={'#f57f17'}
                  border="#f57f17"
                  txtColor="#fff"
                  borderRadius={20}
                  bold={true}
                  shadow={true}
                  action={() =>getJobDetail.apply ? "": navigation.navigate('JobApply',{id:getJobDetail.id,title:getJobDetail.title})}
                />
              }
              
              
            </View>
          </View>
        </View>
        :
        null
      } */}

    </View>
  );
}

const inlineStyle = StyleSheet.create({
  innerMain: {
    width:'80%',
    marginLeft:'auto',
    marginRight:'auto',
  },
});


export default withNavigation(JobDetail);
