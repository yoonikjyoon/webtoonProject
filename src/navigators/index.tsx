import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// screens
import Home from '../components/screens/Home';

type StackParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export default Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
