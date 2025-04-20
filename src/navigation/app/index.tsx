import React from 'react';
import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import routes from '../routes';
import AppBottomTab from './AppBottomTab';

import Home from '../../screens/app/home';
import Post from '../../screens/app/post';
import Settings from '../../screens/app/settings';

const Tab = createBottomTabNavigator();

const bottomTabScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarHideOnKeyboard: true,
};

const AppNavigator = () => {
  const tabBar = (props: BottomTabBarProps) => <AppBottomTab {...props} />;
  return (
    <Tab.Navigator
      tabBar={tabBar}
      screenOptions={bottomTabScreenOptions}
      initialRouteName={routes.app.home}>
      <Tab.Screen name={routes.app.home} component={Home} />
      <Tab.Screen name={routes.app.post} component={Post} />
      <Tab.Screen name={routes.app.setting} component={Settings} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
