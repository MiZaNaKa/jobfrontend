import {
    Image,
    StyleSheet,
    View
  } from 'react-native';
import React, {useEffect, useState} from 'react';
import assetsManager from '../../../assets/AssetsManager';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from './style';
import MsIcon24 from '../icon/MsIcon24';
import { useNavigation } from '@react-navigation/native';


function FullImage(props) {
    const [getUserInfo, setUserInfo] = useState([]);
    useEffect(() => {
    
        const getAPI = async () => {
          var value =await AsyncStorage.getItem('loginUser')
          var asyValue=JSON.parse(value)
          setUserInfo(asyValue)
        }
        getAPI()
          .catch(console.error);
    }, [])


    const navigation = useNavigation();

    const backPage=()=>{
        navigation.goBack()
    }
    return (
        <View style={Styles.positionRelative}>
            <View style={Styles.iconBox}>
                <MsIcon24 style={{width:20,height:20}} onPress={backPage}  iconName={assetsManager.backicon}/>
            </View>

            {props._id === getUserInfo.userID ?
                <View style={Styles.moreBox}>
                    <MsIcon24 onPress={props.action}  iconName={assetsManager.more}/>
                </View>
                :
                null
            }
            
            
            <Image
                source={props.cover}
                resizeMode="contain"
                style={inlineStyle.image}
            />


        </View>
    )
}


  
  
  
export default FullImage;
  
const inlineStyle = StyleSheet.create({
    image:{
        width:'100%',
        height:185
    }
});