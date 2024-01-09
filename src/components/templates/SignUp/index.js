import React,{useState,useRef} from 'react';
import {
NativeModules,
  View,
  Text,
  ActivityIndicator
} from 'react-native';


import InputBox from '../../atoms/Input/Input'
import {styles} from '../../../assets/css/common'
import MsIcon24 from '../../atoms/icon/MsIcon24';
import assetsManager from '../../../assets/AssetsManager';
import SimpleReactValidator from 'simple-react-validator';
import Button from '../../atoms/Buttons/Button';
import { useNavigation } from '@react-navigation/native';
import signUpAPI from '../../../services/signUpAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SignUpTemplate() {
    const simpleValidator = useRef(new SimpleReactValidator());
    const [, forceUpdate] = useState();
    const navigation = useNavigation();
    const [getOTP, setOTP] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        email:"",
        opt:"",
        password:"",
        name:""
    });

    const createAccAPI =async() => {
        const formValid = simpleValidator.current.allValid()
        
        if (!formValid) {
            simpleValidator.current.showMessages()
            forceUpdate(1)
        }
        else{
            setLoading(true)
            var res = await signUpAPI.checkNCreate(data)
            if(res.data.status==1){
                AsyncStorage.setItem("loginJwt", res.data.data.loginJwt);
                AsyncStorage.setItem("loginUser", JSON.stringify(res.data.data.loginUser))
                NativeModules.DevSettings.reload();
            }
            else{
                setErrorMessage(res.data.message)
            }
            setLoading(false)
           
        }
    };

    
    const emailOnChange =async(value) => {
        setData({...data, email: value});
    };

    
    const passwordOnChange =async(value) => {
        setData({...data, password: value});
    };

    
    const nameOnChange =async(value) => {
        setData({...data, name: value});
    };

    
    const otpOnChange =async(value) => {
        setData({...data, otp: value});
    };

    const getOTPAPI =async() => {
        if(data.email){
            setLoading(true)
            var res = await signUpAPI.getOTP(data.email)
            
            if(res.data.status==1){
                setOTP(true)
            }
            else{
                setErrorMessage(res.data.message)
            }
            setLoading(false)
        }
    };

    
    const backAPI =async() => {
        setOTP(false)
        setErrorMessage("")
        setData({...data, password: "",otp:"",name:""});
    };
    

    


    return (
        <View>
            <View style={styles.paddingAll}>
                <MsIcon24 iconName={assetsManager.signUpIcon} style={{width:100,height:100,marginLeft:'auto',marginRight:'auto',marginBottom:60,marginTop:60}}/>
                <View style={[styles.row, styles.marginB10]}>
                    <InputBox
                        placholder="Email"
                        borderColor={'#000'}
                        borderRadius={17}
                        paddingTB={10}
                        paddingR={15}
                        paddingL={15} 
                        maxLength={50}
                        number={false}
                        secureTextEntry={false}
                        action={emailOnChange}
                        value={data.email}
                        placholderColor={'#808080'}
                        area={false}
                    />
                </View>

                {getOTP ?
                    <View>
                        <View>
                            <View style={[styles.row, styles.marginB10]}>
                                <InputBox
                                    placholder="Name"
                                    borderColor={'#000'}
                                    borderRadius={17}
                                    paddingTB={10}
                                    paddingR={15}
                                    paddingL={15} 
                                    maxLength={30}
                                    number={false}
                                    secureTextEntry={false}
                                    action={nameOnChange}
                                    value={data.name}
                                    placholderColor={'#808080'}
                                    area={false}
                                />
                            </View>

                            {simpleValidator.current.message('name', data.name, 'required') ?
                                <View style={[styles.row, styles.marginB10]}>
                                    <Text style={[styles.txt13,styles.txtRed]}>{simpleValidator.current.message('name', data.name, 'required')}</Text>
                                </View>
                                :
                                null
                            }
                        </View>

                        <View>
                            <View style={[styles.row, styles.marginB10]}>
                                <InputBox
                                    placholder="Password"
                                    borderColor={'#000'}
                                    borderRadius={17}
                                    paddingTB={10}
                                    paddingR={15}
                                    paddingL={15} 
                                    maxLength={12}
                                    number={false}
                                    secureTextEntry={true}
                                    action={passwordOnChange}
                                    value={data.password}
                                    placholderColor={'#808080'}
                                    area={false}
                                />
                            </View>

                            {simpleValidator.current.message('password', data.password, 'required') ?
                                <View style={[styles.row, styles.marginB10]}>
                                    <Text style={[styles.txt13,styles.txtRed]}>{simpleValidator.current.message('password', data.password, 'required')}</Text>
                                </View>
                                :
                                null
                            }
                        </View>

                        <View>
                            <View style={[styles.row, styles.marginB10]}>
                                <InputBox
                                    placholder="OTP"
                                    borderColor={'#000'}
                                    borderRadius={17}
                                    paddingTB={10}
                                    paddingR={15}
                                    paddingL={15} 
                                    maxLength={6}
                                    number={false}
                                    secureTextEntry={false}
                                    action={otpOnChange}
                                    value={data.otp}
                                    placholderColor={'#808080'}
                                    area={false}
                                />
                            </View>

                            {simpleValidator.current.message('otp', data.otp, 'required') ?
                                <View style={[styles.row, styles.marginB10]}>
                                    <Text style={[styles.txt13,styles.txtRed]}>{simpleValidator.current.message('otp', data.otp, 'required')}</Text>
                                </View>
                                :
                                null
                            }
                        </View>

                        <View style={styles.row}>
                            <View style={styles.flexOne}>
                                <Button
                                    action={backAPI}
                                    title="Back"
                                    txt="center"
                                    bgColor={'#fff'}
                                    border="#f57f17"
                                    txtColor="#000"
                                    borderRadius={20}
                                    fontSize={13}
                                    borderWidth={1}
                                    bold={true}
                                />
                            </View>

                            <View style={{flex:0.4}}>

                            </View>

                            <View style={styles.flexOne}>
                                <Button
                                    action={createAccAPI}
                                    title={loading ? <ActivityIndicator size="small" color="#f57f17" />:"Create Account"}
                                    txt="center"
                                    bgColor={'#f57f17'}
                                    border="#f57f17"
                                    txtColor="#fff"
                                    borderRadius={20}
                                    fontSize={13}
                                    borderWidth={1}
                                    bold={true}
                                />
                            </View>
                        </View>

                        
                        

                    </View>
                    :
                    <Button
                        action={getOTPAPI}
                        title={loading ? <ActivityIndicator size="small" color="#f57f17" />:"Get OTP"}
                        txt="center"
                        bgColor={'#f57f17'}
                        border="#f57f17"
                        txtColor="#fff"
                        borderRadius={20}
                        fontSize={15}
                        borderWidth={1}
                        bold={true}
                    />
                }

                

                <View style={styles.marginT10}>
                    <Text style={[styles.txt13,styles.txtRed,styles.txtCenter]}>{errorMessage}</Text>
                </View>
                

                

                

            </View>
        </View>
        
    );
}

export default SignUpTemplate;
