import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import ForgotPasswordOrgan from '../../../organisms/Authentication/ForgotPassword/ForgotPassword';
import { View } from 'react-native';
import assetsManager from '../../../../assets/AssetsManager';
import { forgotPassword } from '../../../../services/Authentication/controller';
import CustomToast from '../../../../utils/CommonUtils/ToastMessage';
import ToucahbleIcon from '../../../molecules/TouchableIcon/TouchableIcon';

const ForgotPasswordTemplate = (props) => {
  const navigation = useNavigation();

  const [email, setEmail] = useState();
  const [loading,setLoading] = useState(false);

  const onPressForgotPassword = (data) => {
    doForgotPassword(data.email);
  }

  const doForgotPassword = async (email) => {
    setLoading(true)
    try {
      const data = await forgotPassword(email);
      console.log(data);
      if (data.api_status == 200) {
        showToast('Success', "ForgotPassword Successfully")
        // navigation.navigate('Login');
        setLoading(false)
      } else {
        showToast('Fail', data.errors.error_text)
        setLoading(false)
      }
    } catch (error) {
    } finally {
    }
  };

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

  const onPressBack = () => {
    navigation.goBack();
  };
  return(
    <View style={{flex: 1}}>
      <View style={{ borderBottomWidth: 0.3, borderColor: '#A6A6A6', justifyContent: 'center',padding: 16, zIndex: isVisible ? 1 : 1001}} >
          <ToucahbleIcon iconWidth={9} iconHeight={16} source={assetsManager.back_back_icon} onPress = {onPressBack} />
      </View>
      <CustomToast isVisible={isVisible} message={message} header={header} hideToast={hideToast} />
      <ForgotPasswordOrgan
        email={email}
        setEmail={setEmail}
        emailField={"email"}
        onPressForgotPassword={onPressForgotPassword}
        loading = {loading}
        setLoading = {setLoading}
        />
      
    </View>
  );
}

export default ForgotPasswordTemplate;

