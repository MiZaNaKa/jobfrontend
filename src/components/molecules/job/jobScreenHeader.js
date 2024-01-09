import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {styles} from '../../../assets/css/common';

import InputFile from "../../atoms/Input/Input"
import SearchIcon from "../../atoms/SearchIcon/SearchIcon"

import { store } from '../../../redux/store/job';

import Action from '../../../redux/actions/job';

import Axios from "../../../services/Job"

import assetsManager from '../../../assets/AssetsManager';


function jobScreenHeader(props) {
  const [searchValue,setSearchValue]=useState("")

  const searchJob = (value) => {
    setSearchValue(value)
  };

  const searchJobAPI =async  () => {
    
    var response =await Axios.getSearchJob(searchValue)
   
    if (response.data.api_status === 200) {
      store.dispatch(Action.getPopularJob(response.data.data))
    }
  };


  return (
    <View style={styles.row}>
      <View style={{width:'75%'}}>
        <InputFile 
          shadow={true} 
          icon={assetsManager.orangeSearch}
          placholderColor={"#f57f17"} 
          editable={true}
          paddingTB={10}
          paddingR={8}
          paddingL={4}  
          borderRadius={15} 
          placholder="Search for jobs here" 
          border={true} 
          borderColor={'#fff'} 
          maxLength={100} 
          number={false} 
          secureTextEntry={false} 
          action={props.action} 
          value={props.value}
          inputWidth={'80%'}
          area={false}
        />
      </View>

      <TouchableOpacity onPress={props.api} style={[inlineStyle.searchButton,styles.yellowShadow]}>
        <SearchIcon/>
      </TouchableOpacity>
      
    </View>
  );
}



const inlineStyle = StyleSheet.create({
  searchButton: {
    padding: 10,
    paddingLeft:15,
    paddingRight:15,
    marginLeft: 15,
    backgroundColor: '#ED713C',
    borderRadius: 15,
  },

});

export default jobScreenHeader;
