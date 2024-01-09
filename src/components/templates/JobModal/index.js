import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';

import {styles} from '../../../assets/css/common';

import JobType from '../../molecules/JobType/JobType';

import JobCategory from '../../molecules/Category';

import GridBox from '../../molecules/Grid/grid';

import Icon15 from '../../atoms/icon/Icon15';

import assetsManager from '../../../assets/AssetsManager';

import Button from '../../atoms/Buttons/Button';

import Axios from "../../../services/Job"

import Action from "../../../redux/actions/job"

import { jobTypeStore,store,jobCategoryStore,getLoadingStore } from '../../../redux/store/job';



function Grid(props) {
  const [sliderValue, setSliderValue] = useState(300);

  const [jobType,setJobType]=useState("")

  const [jobCategory,setJobCategory]=useState("")

  useEffect(() => {
    const unsubscribe = jobTypeStore.subscribe(() => {
      var jobType=jobTypeStore.getState().jobType
      setJobType(jobType)
    });
    
    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = jobCategoryStore.subscribe(() => {
      var value=jobCategoryStore.getState().value
      setJobCategory(value)
    });
    
    return unsubscribe;
  }, []);

  

  const sliderChange=(value)=>{

    setSliderValue(value)
  }

  const searchJob=async ()=>{
    getLoadingStore.dispatch(Action.getLoading(true))
    var request={
      category:jobCategory,
      jobType:jobType
    }
    var responseNear =await Axios.getSearchJob(request)
    if(responseNear.data.status==1){
      store.dispatch(Action.getPopularJob(responseNear.data.success.data.success.data))
    }
    
  }

  const clearAction=async ()=>{
    getLoadingStore.dispatch(Action.getLoading(true))
    jobTypeStore.dispatch(Action.getJobTypeStore(""))
    jobCategoryStore.dispatch(Action.getJobCategoryStore(""))
    var response =await Axios.getJobList()
    if(response.data.status==1){
      store.dispatch(Action.getPopularJob(response.data.success.data.success.data))
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={[styles.marB20,styles.row]}>
          <View style={{marginTop:9}}>
            <Icon15 action={props.action} iconName={assetsManager.closeIcon}/>
          </View>
          
          <Text style={[styles.txt20,styles.marginL30,styles.txtBlack]}>Filter Jobs</Text>

        </View>

        
        
        <View style={[styles.row,styles.marB20]}>
          <Text style={[styles.txt16,styles.txtBlack]}>Job Type </Text>
        </View>

        <GridBox clickFunction={props.clickFunction} value={jobType} type="JobType" data={JobType}/>

        <View style={[styles.row,styles.marB20,styles.marginT15]}>
          <Text style={[styles.txt16,styles.txtBlack]}>Category</Text>
        </View>

        <GridBox value={jobCategory} type="JobCategory" data={JobCategory}/>

        <View style={[styles.row,styles.marB20,styles.marginT20]}>
          <View style={styles.flexOne}>
            <Button
              title="Clear"
              txt="left"
              bgColor={'#fff'}
              border="#fff"
              txtColor="#000"
              borderRadius={20}
              action={clearAction}
              bold={true}
              shadow={false}
            />
          </View>
          <View style={styles.flexOne}>
            <Button
              title="Show Result"
              txt="center"
              bgColor={'#f57f17'}
              border="#f57f17"
              txtColor="#fff"
              borderRadius={20}
              action={searchJob}
              bold={true}
              shadow={true}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}





export default Grid;
