// In App.js in a new project

import * as React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/components/Login';
import Signup from './src/components/Signup';
import ForgotPassword from './src/components/ForgotPassword';
import VerifyAccount from './src/components/VerifyAccount';
import UpdatePassword from './src/components/UpdatePassword';
import Button from './src/components/Button';
import WeatherScreen from './src/components/WeatherScreen';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Splash from './src/components/Splash';
import Dashboard from './src/components/Dashboard';
import Home from './src/components/Home';
import Chart from './src/components/Chart';
function HomeScreen() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Dashboard">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="VerifyAccount"
            component={VerifyAccount}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="UpdatePassword"
            component={UpdatePassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DashBoard"
            component={DashBoard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Chart"
            component={Chart}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Button"
            component={Button}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="WeatherScreen"
            component={WeatherScreen}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />  */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
