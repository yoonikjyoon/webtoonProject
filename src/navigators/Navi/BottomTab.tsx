import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BottomTabBar} from 'navigators/Option/BottomTabBar';
import {
  BOTTOM_TAB_CONTAINER_HEIGHT,
  BOTTOM_TAB_CONTAINER_SAFEAREA_HEIGHT,
} from 'constants/bottomTab';
// screens
import Main from 'components/screens/Main';
import Recommend from 'components/screens/Recommend';
import Challenge from 'components/screens/Challenge';
import MyPage from 'components/screens/MyPage';
import More from 'components/screens/More';

export type BottomTabMainParamList = {
  Main: undefined;
  Recommend: undefined;
  Challenge: undefined;
  MyPage: undefined;
  More: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabMainParamList>();

const BottomTabNavi = (): ReactElement => {
  const insets = useSafeAreaInsets();
  const addBottomHeight = insets.bottom
    ? BOTTOM_TAB_CONTAINER_SAFEAREA_HEIGHT
    : 0;
  const bottomTabContainerHeight =
    BOTTOM_TAB_CONTAINER_HEIGHT + addBottomHeight;

  return (
    <BottomTab.Navigator
      sceneContainerStyle={{marginBottom: bottomTabContainerHeight}}
      backBehavior="initialRoute" // for Android
      initialRouteName="Main"
      tabBar={props => <BottomTabBar {...props} />}>
      <BottomTab.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="Recommend"
        component={Recommend}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="Challenge"
        component={Challenge}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="MyPage"
        component={MyPage}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="More"
        component={More}
        options={{headerShown: false}}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavi;
