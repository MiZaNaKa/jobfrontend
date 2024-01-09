import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Modal,
  StyleSheet,
  RefreshControl,
} from 'react-native';

import Axios from "../../services/Job/index"

import {withNavigation} from 'react-navigation';

import JobSearch from "../../components/templates/job/jobScreenHeader"

import Popular from "../../components/templates/job/popular"

import AppBar from '../../components/organisms/AppBar/AppBar';

import assets from '../../assets/AssetsManager';

import JobModal from '../../components/templates/JobModal'

import {styles} from '../../assets/css/common';

import { store,getLoadingStore } from '../../redux/store/job';

import { useNavigation,useFocusEffect  } from '@react-navigation/native';

function JobDetail() {
  const navigation = useNavigation();
  const [jobList, setJobList] = useState([]);
  const [searchValue,setSearchValue]=useState("")
  const [jobLoading,setJobLoading] = useState(true)
  const [loading,setLoading] = useState(true)
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      setLoading(true)
      setJobLoading(true)
      const getAPI = async () => {
        var response =await Axios.getJobList()
        if(response.data.status==1){
          setJobList(response.data.success.data.success.data);
        }
        setJobLoading(false)
    }
    getAPI()
      .catch(console.error);

    }, [])
  )

  useEffect(() => {
    const getAPI = async () => {
      var response =await Axios.getJobList()
      if(response.data.status==1){
        setJobList(response.data.success.data.success.data);
      }
      setLoading(false)
      setJobLoading(false)
    }
    getAPI()
      .catch(console.error);
  }, [])

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setModalVisible(false)
      setJobList(store.getState().jobList);      
      setJobLoading(false)
    });
    
    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = getLoadingStore.subscribe(() => {
      var loading=getLoadingStore.getState().loading
      setJobLoading(loading)
    });
    
    return unsubscribe;
  }, []);



  const searchJobAPI =async  () => {
    setJobLoading(true)
    var obj={
      search:searchValue
    }
    var response =await Axios.getSearchJob(obj)
   
    if(response.data.status==1){
      setJobList(response.data.success.data.success.data);
    }
    setJobLoading(false)
  };

  const searchJob = (value) => {
    setSearchValue(value)
  };


  const closeModal =async () => {
    setModalVisible(!modalVisible)
  };


  const onRefresh =async () => {
    var response =await Axios.getJobList()
    if(response.data.status==1){
      setJobList(response.data.success.data.success.data);
    }
    setLoading(false)
  };

  return (
    <View style={styles.container}>
      <AppBar 
        title="Jobs"
        backIconName ={assets.backicon} 
        onPressBack={()=>navigation.goBack()} 
        onPressAction={() => setModalVisible(true)}
        lastIconName={assets.filterIcon}
        isImage={true}
        text=""
      />
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
       
       
        <JobSearch value={searchValue} action={searchJob} api={searchJobAPI}/>

        
        <Popular loading={jobLoading} data={jobList}/>
       

        <Modal
          backdropColor="transparent"
          animationType={"slide"}
          transparent
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
        <View style={inlineStyle.centeredView}>
          <View style={[inlineStyle.modalView]}>
            <JobModal 
              action={closeModal}
            />
          </View>
        </View>
        </Modal>
        
      </ScrollView>

    </View>
  );
}

const inlineStyle = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    
  }
});





export default withNavigation(JobDetail);
