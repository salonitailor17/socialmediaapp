import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiRoutes, {BASE_URL} from '../../routes';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const login = data => {
  return async dispatch => {
    try {
      const response = await axios.post(`${BASE_URL}${apiRoutes.login}`, data);

      await AsyncStorage.setItem('loginData', JSON.stringify(response.data));
      dispatch({type: LOGIN_SUCCESS, payload: response.data});
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      dispatch({type: LOGIN_FAILURE, payload: errorMessage});
    }
  };
};

export const loadUserFromStorage = () => {
  return async dispatch => {
    try {
      const savedData = await AsyncStorage.getItem('loginData');
      if (savedData) {
        dispatch({type: LOGIN_SUCCESS, payload: JSON.parse(savedData)});
      }
    } catch (error) {
      console.log('Error loading user from storage', error);
    }
  };
};

export const logout = () => {
  return async dispatch => {
    await AsyncStorage.removeItem('loginData');
    dispatch({type: LOGOUT});
  };
};
