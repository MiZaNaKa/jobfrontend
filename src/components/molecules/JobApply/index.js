import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {styles} from '../../../assets/css/common';
import {withNavigation} from 'react-navigation';

import InputFile from "../../atoms/Input/Input"
import SearchIcon from "../../atoms/SearchIcon/SearchIcon"


function JobApply() {
  const [searchValue,setSearchValue]=useState("")

  const searchJob = (value) => {
    setSearchValue(value)
  };

  const searchJobAPI =async  () => {

    var response =await Axios.getSearchJob(searchValue)
    if (response.data.api_status === 200) {
      setJobList(response.data.data);
    }
  };


  return (
    <View style={styles.row}>
      
      <InputFile placholder="Search for jobs here" border={true} borderColor={'#fff'} maxLength={10} number={false} secureTextEntry={true} action={searchJob} value={searchValue}/>

      <TouchableOpacity onPress={searchJobAPI} style={inlineStyle.searchButton}>
        <SearchIcon/>
      </TouchableOpacity>
    </View>
  );
}



const inlineStyle = StyleSheet.create({
  searchButton: {
    padding: 10,
    marginLeft: 30,
    backgroundColor: '#F69B32',
    borderRadius: 9,
  },
});

export default JobApply;
