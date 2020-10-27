import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import StartAScreen from "./src/screens/StartA";
import SignUpScreen from './src/screens/SignUp';
import ClaimStartScreen from './src/screens/ClaimStart';
import PickAreaScreen from './src/screens/PickArea';
import PhotoOneScreen from './src/screens/PhotoOne';
import PhotoTwoScreen from './src/screens/PhotoTwo';
import PhotoDetailsScreen from './src/screens/PhotoDetails';
import ClaimantDetailsScreen from './src/screens/ClaimantDetails';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="StartAScreen" component={StartAScreen} options={{headerShown: false}} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown: false}} />
      <Stack.Screen name="ClaimStartScreen" component={ClaimStartScreen} options={{headerShown: false}} />
      <Stack.Screen name="PickAreaScreen" component={PickAreaScreen} options={{headerShown: false}} />
      <Stack.Screen name="PhotoOneScreen" component={PhotoOneScreen} options={{headerShown: false}} />
      <Stack.Screen name="PhotoTwoScreen" component={PhotoTwoScreen} options={{headerShown: false}} />
      <Stack.Screen name="PhotoDetailsScreen" component={PhotoDetailsScreen} options={{headerShown: false}} />
      <Stack.Screen name="ClaimantDetailsScreen" component={ClaimantDetailsScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}