import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from '../../../assets/css/common';

import gridStyle from './gridStyle';

import { jobTypeStore,jobCategoryStore } from '../../../redux/store/job';

import Action from '../../../redux/actions/job' 

function Grid(props) {
  const [selectedId,setSelectedId]=useState("")

  useEffect(() => {
    var jobType=jobTypeStore.getState().jobType
    
    var jobCat=jobCategoryStore.getState().value
    if(props.type=="JobType"){
      setSelectedId(jobType)
    }
    else if(props.type=="JobCategory"){
      setSelectedId(jobCat)
    }
    
  }, [])


  const searchByJobType =async (value, type) => {
    
    if(selectedId===value && selectedId){
      setSelectedId("")
      if(type=="JobType"){
        jobTypeStore.dispatch(Action.getJobTypeStore(""))
      }
      else if(type=="JobCategory"){        
        jobCategoryStore.dispatch(Action.getJobCategoryStore(""))
      }
      
    }
    else{
      setSelectedId(value)
      if(type=="JobType"){
        jobTypeStore.dispatch(Action.getJobTypeStore(value))
      }
      else if(type=="JobCategory"){
        jobCategoryStore.dispatch(Action.getJobCategoryStore(value))
      }
      
    }

  };

  const functionCombined=(value, type)=> {
    searchByJobType(value, type);
    // searchByJobCategor
  }  


  return (
    <View>
      <View style={[gridStyle.gridBox]}>
        {props.data.map((value, index) => {
          return (
            <View key={index} style={[gridStyle.gridInner,]}>
              <TouchableOpacity 
                onPress={() => functionCombined(value.id,props.type)}
              >
                <View style={[gridStyle.gridContact,styles.borderRadius20,{backgroundColor: selectedId === value.id ? "#f57f17":"#fff"}]}>
                  <Text style={[styles.txtCenter, styles.txt12, styles.txtBlack]}>
                    {value.name}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
}
// test
export default Grid;
