import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import JobScreen from '../screens/job/JobScreen';
import ChangePassword from '../screens/general/ChangePassword';
import MyInformation from '../screens/general/MyInformation';
import JobDetail from '../screens/job/JobDetail';
import Testing from '../screens/Testing';
import GeneralHome from '../screens/general/main'
import ManageSession from '../screens/general/ManageSession';

import JobApply from '../screens/job/JobApply';
import DeleteAccount from '../screens/general/delete_account';
import MyAccount from '../screens/general/my_account';
import Messenger from '../screens/messenger/home/Messenger';
import TwoFactorAuth from '../screens/general/two_factor_auth';

import NearBusiness from '../screens/job/NearBusiness';
import EditProfile from '../screens/general/EditProfile';
import BlockedUser from '../screens/general/BlockedUser';

import JobAppliance from '../screens/job/JobAppliance';
import EditJob from '../screens/job/EditJob';
import MyAddress from '../screens/general/MyAddress';
import CreateMyAddress from '../screens/general/CreateMyAddress';
import EditMyAddress from '../screens/general/EditMyAddress';

import Verification from '../screens/general/Verification';
// import Login from '../screens/Authentication/Login';
import Registeration from '../screens/Registeration';
import ForgotPassword from '../screens/Authentication/ForgotPassword';
import OtpScreen from '../screens/otp';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Menu from '../screens/menu';
import CreateJob from '../screens/createJob';

const Stack = createNativeStackNavigator();
function  Navigation() {
    return(
    <NavigationContainer>
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}
        > 
            
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="CreateJob" component={CreateJob} />
            
            
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="NearBusiness" component={NearBusiness} /> 
            <Stack.Screen name="JobApply" component={JobApply} /> 
            <Stack.Screen name="GeneralHome" component={GeneralHome} /> 
            <Stack.Screen name="Job" component={JobScreen} /> 
            <Stack.Screen name="ManageSession" component={ManageSession} />
            <Stack.Screen name="JobDetail" component={JobDetail} />
            <Stack.Screen name="DeleteAccount" component={DeleteAccount} />
            <Stack.Screen name="MyAccount" component={MyAccount} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Messenger" component={Messenger} />
            <Stack.Screen name="TwoFactorAuth" component={TwoFactorAuth} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="BlockedUser" component={BlockedUser} />
            <Stack.Screen name="JobAppliance" component={JobAppliance} />
            <Stack.Screen name="MyInformation" component={MyInformation} />
            <Stack.Screen name="EditJob" component={EditJob} />
            <Stack.Screen name="MyAddress" component={MyAddress} />
            <Stack.Screen name="CreateMyAddress" component={CreateMyAddress} />
            <Stack.Screen name="EditMyAddress" component={EditMyAddress} />
            <Stack.Screen name="Verification" component={Verification} />
            {/* <Stack.Screen name="Registeration" component={Registeration} /> */}
            {/* <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> */}
            
            <Stack.Screen name="OtpScreen" component={OtpScreen} />
            <Stack.Screen name="Registeration" component={Registeration} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            
            
        </Stack.Navigator>
    </NavigationContainer>
    );
}

export default Navigation;