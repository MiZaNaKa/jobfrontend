import React,{useState,useRef} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
  NativeModules
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
function LoginTemplate() {
    const simpleValidator = useRef(new SimpleReactValidator());
    const [, forceUpdate] = useState();
    const navigation = useNavigation();
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        email:"",
        password:""
    });

    const loginAPI =async() => {
        const formValid = simpleValidator.current.allValid()
        
        if (!formValid) {
            simpleValidator.current.showMessages()
            forceUpdate(1)
        }
        else{
            setLoading(true)
            
            var res = await signUpAPI.Login(data)
            if(res.data.status==1){
                AsyncStorage.setItem("loginJwt", res.data.loginJwt);
                AsyncStorage.setItem("loginUser", JSON.stringify(res.data.loginUser))
                navigation.navigate('Menu')
                NativeModules.DevSettings.reload();
                setLoading(false)
            }
            else{
                setErrorMessage(res.data.message)
                setLoading(false)
            }
            
        }
    };

    
    const emailOnChange =async(value) => {
        setData({...data, email: value});
    };

    
    const passwordOnChange =async(value) => {
        setData({...data, password: value});
    };


    return (
        <View>
            <View style={styles.paddingAll}>
                <MsIcon24 iconName={assetsManager.userIcon} style={{width:100,height:100,marginLeft:'auto',marginRight:'auto',marginBottom:60,marginTop:60}}/>
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

                {simpleValidator.current.message('email', data.email, 'required|email') ?
                    <View style={[styles.row, styles.marginB10]}>
                        <Text style={[styles.txt13,styles.txtRed]}>{simpleValidator.current.message('email', data.email, 'required|email')}</Text>
                    </View>
                    :
                    null
                }


                <View style={[styles.row, styles.marginB10]}>
                    <InputBox
                        placholder="Password"
                        borderColor={'#000'}
                        borderRadius={17}
                        paddingTB={10}
                        paddingR={15}
                        paddingL={15} 
                        maxLength={50}
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

                <Button
                    action={loginAPI}
                    title={loading ? <ActivityIndicator size="small" color="#0000ff" />:"Login"}
                    txt="center"
                    bgColor={'#f57f17'}
                    border="#f57f17"
                    txtColor="#fff"
                    borderRadius={20}
                    fontSize={15}
                    borderWidth={1}
                    bold={true}
                />



                <View style={[styles.marginT10]}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={[styles.txtCenter]}>Create Account</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.marginT20}>
                    <Text style={[styles.txt13,styles.txtRed,styles.txtCenter]}>{errorMessage}</Text>
                </View>

            </View>
        </View>
        
    );
}

export default LoginTemplate;
