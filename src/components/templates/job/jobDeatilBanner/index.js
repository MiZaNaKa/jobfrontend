import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Text
} from 'react-native';

import {styles} from '../../../../assets/css/common';

import Axios from "../../../../services/Job/index"

import assetsManager from '../../../../assets/AssetsManager';
import Icon50 from '../../../atoms/icon/Icon50';
import FullImage from '../../../atoms/FullImage';
import { useNavigation } from '@react-navigation/native';

function jobDeatilBanner(props) {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  
  const closeModal =async () => {
    setModalVisible(!modalVisible)
  };

  const openModal =async () => {
    setModalVisible(!modalVisible)
  };

  const goToEditJob =async (value) => {
    setModalVisible(!modalVisible)
    navigation.navigate('EditJob',{data:value})
  };

  const deleteJob =async (id) => {
    var response =await Axios.deleteJob(id)
    if(response.data.status==1){
      setModalVisible(!modalVisible)
      navigation.navigate('Job')
    }
  };

  return (
    <View>
        <FullImage  action={openModal} cover={assetsManager.jobIcon}/>
        
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
        <View style={styles.modalBox}>
          <View style={[styles.modalInnerBox,{width:'70%',alignItems: 'left',padding:10,borderRadius:0}]}>
            <View>
              <View style={styles.marginB20}>
                <Text style={[styles.txt16,styles.txtBlack]}>More</Text>
              </View>
              <TouchableOpacity 
                onPress={()=>goToEditJob(props.getJobDetail)}
                style={styles.marginB20}
              >
                <Text style={[styles.txt14,styles.txtBlack]}>Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>deleteJob(props.getJobDetail._id)} style={styles.marginB20}>
                <Text style={[styles.txt14,styles.txtBlack]}>Delete</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={openModal} style={styles.marginB20}>
                <Text style={[styles.txt16,styles.txtRed,{textAlign: 'right'}]}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </Modal>
        
       
    </View>


            
  );
}



const inlineStyle = StyleSheet.create({
    page: {
        marginTop:-20,
        paddingBottom:0,
        borderBottomWidth:1,
        borderBottomColor:'#cfcfcf'
    },
});

export default jobDeatilBanner;
