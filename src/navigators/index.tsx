import React, {ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import BottomTabNavi, {BottomTabMainParamList} from 'navigators/Navi/BottomTab';
// screens
import Home from 'components/screens/Home';
import Main from 'components/screens/Main';
import Recommend from 'components/screens/Recommend';
import Challenge from 'components/screens/Challenge';
import MyPage from 'components/screens/MyPage';
import More from 'components/screens/More';

type StackParamList = {
  Home: undefined;
  Main: undefined;
  Recommend: undefined;
  Challenge: undefined;
  MyPage: undefined;
  More: undefined;
};

const Stack = createStackNavigator<StackParamList>();

export default Navigators = (): ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen
          name="BottomTab"
          component={BottomTabNavi}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Recommend"
          component={Recommend}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Challenge"
          component={Challenge}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyPage"
          component={MyPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="More"
          component={More}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
