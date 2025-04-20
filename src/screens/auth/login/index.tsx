import {ToastAndroid, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {AppButton, AppInput, AppText} from '../../../components';
import routes from '../../../navigation/routes';

import useStyles from './styles';
import {login} from '../../../store/actions/auth/login';

const validateEmail = email => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const passwordValidation = pass => {
  var re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  return re.test(pass);
};

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const styles = useStyles();
  const navigation = useNavigation<NavigationProp<any, any>>();

  const dispatch = useDispatch();
  const {data, error} = useSelector(state => state.auth);

  useEffect(() => {
    if (data) {
      ToastAndroid.show(data?.message, 1000);
    }

    if (error) {
      ToastAndroid.show(error, 1000);
    }
  }, [data, error]);

  const handleLogin = () => {
    if (email === '') {
      setEmailError('Email is required.');
    } else if (!validateEmail(email)) {
      setEmailError('Enter valid email address.');
    } else if (password === '') {
      setPasswordError('Password is required.');
    } else if (!passwordValidation(password)) {
      setPasswordError('Enter valid password.');
    } else {
      dispatch(login({email, password}));
    }
  };

  const handleRegistration = () => {
    navigation.navigate(routes.auth.registration);
  };

  return (
    <View style={styles.wrapper}>
      <AppInput
        title="Email"
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
        error={emailError}
        setError={setEmailError}
      />
      <AppInput
        title="Password"
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        error={passwordError}
        setError={setPasswordError}
        maxLength={10}
        isPassword
      />
      <AppButton onPress={handleLogin} label="Login" />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.text}
        onPress={handleRegistration}>
        <AppText label="Don't have an account? Register" centere />
      </TouchableOpacity>
    </View>
  );
};

export default Login;
