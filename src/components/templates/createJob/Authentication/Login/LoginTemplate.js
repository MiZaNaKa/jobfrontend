import React, {useEffect, useState} from 'react';
import { getLoginData, getData, storeData, storeDataMulti, getDataMulti } from '../../../../services/Authentication/controller';
import { useNavigation } from '@react-navigation/native';
import LoginOrgan from '../../../organisms/Authentication/Login/Login';
import { View } from 'react-native';
import CustomToast from '../../../../utils/CommonUtils/ToastMessage';

const LoginTemplate = (props) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [loading,setLoading] = useState(false);
  const [isLogged,setIsLogged] = useState(false);
  
  const [rememberMe, setRememberMe] = useState(false);
  const [accessToken, setAccessToken] = useState('');

  //Toast
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [header, setHeader] = useState('');

  
  const showToast = (header, message) => {
      setHeader(header)
      setMessage(message);
      setIsVisible(true);
    };
  
    const hideToast = () => {
      setIsVisible(false);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const onPressLogin = (data) => {
    fetchData(data.email,data.pass);
  }

  const fetchData = async (email, pass) => {
    setLoading(true)
    try {
      const data = await getLoginData(email, pass);
      if (data.api_status == 200) {
        if(rememberMe){
          // To-do: Need to encrypt the password
          const dataToStore = [
            ["keeploggedin", true],
            ["username", email],
            ["password", pass],
            ["userid", data.user_id],
          ];
          
          await storeDataMulti(dataToStore);
        }
        if(data.access_token){
          await storeData("access_token",data.access_token);
          showToast('Success', "Login Successfully")
          setTimeout(() => {
            navigation.navigate('Home');
          }, 1000);
        }else{
          showToast('Success', data.message)
          navigation.navigate('OtpScreen');
        }
        setLoading(false)
      }else if(data.api_status == 400){
        showToast('Fail', data.errors.error_text)
      } 
      setLoading(false)
    } catch (error) {
    } finally {
    }
  };

  useEffect(() => {
    (async () => {
      try {
          const keysToRetrieve = ["keeploggedin", "access_token"];
          const retrievedData = await getDataMulti(keysToRetrieve);
          const retrievedDataObject = Object.fromEntries(retrievedData);

          if(retrievedDataObject["keeploggedin"] && retrievedDataObject["access_token"]){
            navigation.navigate('Home');
          }
      } catch (error) {
      }
    })();
  }, [navigation, setAccessToken]);

  const onPressPass = () => {
    setSecureTextEntry(!secureTextEntry)
  };

  return(
    <View style={{flex: 1}}>
      <CustomToast isVisible={isVisible} message={message} header={header} hideToast={hideToast} />
      <LoginOrgan 
        rememberMe={rememberMe}
        handleRememberMeChange={handleRememberMeChange}
        email={email}
        pass={pass}
        setEmail={setEmail}
        setPass={setPass}
        emailField={"email"}
        passField={"pass"}
        onPressLogin={onPressLogin}
        onPressPass={onPressPass}
        secureTextEntry={secureTextEntry}
        loading = {loading}
        setLoading = {setLoading}
      />
    </View>
  );
}

export default LoginTemplate;

