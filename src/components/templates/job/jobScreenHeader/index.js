import React from 'react';
import {View,Text,StyleSheet,} from 'react-native';

import {styles} from '../../../../assets/css/common';

import SearchBox from "../../../molecules/job/jobScreenHeader"

function JobScreen(props) {
  return (
    <View style={inlineStyle.jobBox1}>
        <View style={[styles.innerBox]}>
          <View style={styles.innderBox1}>
            <View style={inlineStyle.marginBottom}>
              <Text style={inlineStyle.titleTxt}>Explore Jobs</Text>
            </View>

            <View style={[styles.row]}>
              <SearchBox value={props.value} action={props.action} api={props.api}/>
            </View>
          </View>
       
        </View>
    </View>
  );
}



const inlineStyle = StyleSheet.create({
  jobBox1: {
    backgroundColor: '#F1F4F5',
    paddingTop: 30,
    // paddingLeft:20,
    // paddingRight:20,
    paddingBottom: 30,
  },
  titleTxt: {
    fontSize: 20,
    fontWeight: '900',
    color:'#000',
    fontFamily: 'Poppins-Bold'
  },
  marginBottom: {
    marginBottom: 30,
  },
  searchButton: {
    padding: 10,
    marginLeft: 30,
    backgroundColor: '#F69B32',
    borderRadius: 9,
  },
  jobBox2: {
    paddingTop: 15,
    paddingBottom:15
  },
  nearbyJob: {
    padding: 10,
  },
  nearbyJobBgImage: {
    width: 315,
    height: 184,
  },
  nearbyJobCompanyNameBox: {
    padding: 25,

  },
  nearbyJobCompanyPositionBox: {
    paddingLeft: 25,
    paddingBottom: 20,
  },
  nearbyJobCompanyNameText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'Poppins-Medium'
  },
  nearbyJobCompanyPositionNameText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Poppins-Medium'
  },
  nearbyJobCompanyPositionTypeText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Poppins-Medium'
    // alignSelf: 'flex-start',
  },
  nearbyJobCompanyPositionTypeBox: {
    paddingLeft: 25,
    paddingBottom: 20,
    flexDirection:'row',
  },
  nearbyJobCompanyCountryText: {
    fontSize: 11,
    alignSelf: 'flex-end',
    color: '#fff',
    paddingRight: 25,
    marginTop: 5,
    fontFamily: 'Poppins-Medium'
  },
  column1: {
    flex: 1,
    flexDirection: 'column',
  },
  column2: {
    flex: 2,
    flexDirection: 'column',
  },
  jobImage: {
    width: 85,
    height: 85,
  },
  applyButton:{
    width:'100%',
    marginTop:30,
    paddingTop:15,
    paddingBottom:15,
    textAlign:'center',
    backgroundColor:'orange',
    borderRadius:15
  },
  applyButtonText:{
    color:'#fff',
    textAlign:'center'
  }
});

export default JobScreen;
