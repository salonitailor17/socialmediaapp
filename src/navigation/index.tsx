import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';

import AuthNaviator from './auth';
import AppNavigator from './app';

import {loadUserFromStorage} from '../store/actions/auth/login';

const Navigator = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const {data} = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserFromStorage());
  }, []);

  useEffect(() => {
    if (data?.status === 'SUCCESS') {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [data]);

  return (
    <NavigationContainer>
      <GestureHandlerRootView style={styles.wrapper}>
        {loggedIn ? <AppNavigator /> : <AuthNaviator />}
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
});
