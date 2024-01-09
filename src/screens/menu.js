import React,{useEffect} from 'react';
import { Button, View, NativeModules } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Menu({ navigation }) {

  const [jwt, setJWT] = React.useState('');

  useEffect(() => {
    const getAPI = async () => {
        var value =await AsyncStorage.getItem('loginJwt')
        setJWT(value)
    }
    getAPI()
      .catch(console.error);
  }, [])

  const LogOut=async()=>{
    await AsyncStorage.removeItem("userInfo");
    await AsyncStorage.removeItem("loginJwt");
    setJWT("")
    NativeModules.DevSettings.reload();
  }

  return ( 
    <View style={{flex:1,marginTop:100,padding:30}}>
        {jwt ?
            <View>
                <View style={{marginBottom:20}}>
                    <Button
                        title="Go to Job"
                        onPress={() => navigation.navigate('Job')}
                        style={{
                        marginLeft:10,
                        }}
                    />
                </View>

                <View style={{marginBottom:20}}>
                    <Button
                        title="Create Job"
                        onPress={() => navigation.navigate('CreateJob')}
                        style={{
                        marginLeft:10,
                        }}
                    />
                </View>

                <View style={{marginBottom:20}}>
                    <Button
                        title="LogOut"
                        onPress={LogOut}
                        style={{
                        marginLeft:10,
                        }}
                    />
                </View>
            </View>
            :
            <View>
                <View style={{marginBottom:20}}>
                    <Button
                        title="Login"
                        style={{ 
                        }}
                        onPress={() => navigation.navigate('Login')}
                    />
                </View>

                <View style={{marginBottom:20}}>
                    <Button
                        title="SignUp"
                        style={{ 
                        }}
                        onPress={() => navigation.navigate('SignUp')}
                    />
                </View>

            </View>
        }
    </View>
      
  );
}

export default Menu; 