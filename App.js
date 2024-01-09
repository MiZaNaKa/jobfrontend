import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Menu from './src/screens/menu';

import Login from './src/screens/Login'

import SignUp from './src/screens/SignUp' 
import JobScreen from './src/screens/job/JobScreen';
import JobDetail from './src/screens/job/JobDetail';
import CreateJob from './src/screens/createJob';
import EditJob from './src/screens/job/EditJob';

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
            <Stack.Screen name="Job" component={JobScreen} /> 
            <Stack.Screen name="JobDetail" component={JobDetail} /> 
            <Stack.Screen name="CreateJob" component={CreateJob} /> 
            <Stack.Screen name="EditJob" component={EditJob} /> 
            
            
            
        </Stack.Navigator>
    </NavigationContainer>
    );
}

export default Navigation;