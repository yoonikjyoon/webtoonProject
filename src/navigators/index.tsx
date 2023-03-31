import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// screens
import Home from '../components/screens/Home';

type StackParamList = {
  Home: undefined;
};

const Stack = createStackNavigator<StackParamList>();

export default Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
