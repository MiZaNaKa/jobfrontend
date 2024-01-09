import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable
} from 'react-native';

import {styles} from '../../../../assets/css/common';

import { useNavigation } from '@react-navigation/native';

import Loading from '../../Loading/Loading';

import NotFound from '../../notFound';

import assetsManager from '../../../../assets/AssetsManager';

import MsIcon24 from '../../../atoms/icon/MsIcon24';

import {jobCategory} from "../../../../constants/job"

function convert(value)
{
    if(value>=100000)
    {
        value=(value/100000)
       
        var num=Math.trunc(value)
        value=num+"lak"
    }
    else if(value>=1000000){
      var num=Math.trunc((value/100000) )
      value=num+"M"
    }
   
    return value;
}


function JobScreen(props) {
  const navigation = useNavigation();

  return (
    <View style={[inlineStyle.jobBox1]}>
      <View style={styles.innerBox}>
        <View style={styles.innderBox1}>
          <View style={styles.marginB10}>
            <Text style={[styles.txt16,styles.txtBold,styles.txtBlack]}>POPULAR JOBS</Text>
          </View>

          {props.loading ?
            <View style={[styles.marginT24,styles.marginB40]}>
              <Loading/>
            </View>
            :
            <View>
              {props.data.length>0 ?
                <View>
                  {props.data.map((value, index) => {
                    return (
                      <Pressable  key={index} onPress={() => navigation.navigate('JobDetail',{id:value._id})}>
                          <View style={[styles.row, styles.bgWhite, styles.marginB10,styles.borderRadius5,styles.boxShadow]}>
                            <View style={inlineStyle.column1}>
                              <Image
                                style={inlineStyle.jobImage}
                                source={assetsManager.jobIcon}
                                resizeMode="contain"
                              />
                            </View>

                            <View style={[inlineStyle.column2]}>
                              <View style={{paddingLeft:10}}>
                                <View style={[{paddingTop:5,marginBottom:5}]}>
                                  {value.job_title.length > 30 ? (
                                    <Text style={[styles.txt16,styles.txtBlack,{lineHeight:19}]}>
                                      {value.job_title.slice(0, 15)}.....
                                    </Text>
                                  ) : (
                                    <Text style={[styles.txt16,styles.txtBlack,{lineHeight:19}]}>{value.job_title}</Text>
                                  )}
                                </View>

                                <View style={{marginBottom:5}}>
                                  <Text style={[styles.txtgray,styles.txt12,]}>{value.job_type} - ${convert(value.minimum)} To $ {convert(value.maximum)} </Text>
                                </View>
                                {parseInt(value.category)<20 ?
                                  <View>
                                    <Text style={[styles.txtgray,styles.txt12,]}>
                                      {jobCategory[parseInt(value.category)-1].name}                                      
                                    </Text>
                                  </View>
                                  :
                                  null
                                }
                              </View>
                              
                            </View>
                          </View>
                        </Pressable>
                      
                      
                    );
                  })}
                  
                </View>
                :
                <View style={[styles.marginT20,styles.marginB20]}>
                  <NotFound/>
                </View>
              }
            </View>
          }

        </View>
        
        
      </View>
    </View>
  );
}

const inlineStyle = StyleSheet.create({
  jobBox1: {
    backgroundColor: '#F1F4F5',
    paddingTop: 10,
    paddingBottom: 30,
  },

  marginBottom: {
    marginBottom: 20,
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
    resizeMode: 'contain',
    // flex: 1,
    borderRadius:5,
    width:100,
    height:50
  },
});



export default JobScreen;
