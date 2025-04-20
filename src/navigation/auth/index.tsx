import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../../screens/auth/login';
import Registration from '../../screens/auth/registration';
import routes from '../routes';

const Stack = createNativeStackNavigator();

const AuthNaviator = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.auth.login}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.auth.login} component={Login} />
      <Stack.Screen name={routes.auth.registration} component={Registration} />
    </Stack.Navigator>
  );
};

export default AuthNaviator;
