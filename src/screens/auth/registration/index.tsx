import {ToastAndroid, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {AppButton, AppInput, AppText} from '../../../components';

import useStyles from './styles';
import {register} from '../../../store/actions/auth/registration';

const validateEmail = email => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const passwordValidation = pass => {
  var re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  return re.test(pass);
};

const Registration = () => {
  const [fullName, setFullName] = useState<string>('');
  const [fullNameError, setFullNameError] = useState<string>('');

  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const styles = useStyles();
  const navigation = useNavigation<NavigationProp<any, any>>();

  const dispatch = useDispatch();
  const {data, error} = useSelector(state => state.register);

  useEffect(() => {
    if (data?.status === 'SUCCESS') {
      ToastAndroid.show(data?.message, 1000);
      navigation.goBack();
    }

    if (error) {
      ToastAndroid.show(error, 1000);
    }
  }, [data, error]);

  const handleLogin = () => {
    if (fullName === '') {
      setFullNameError('Full name is required.');
    } else if (email === '') {
      setEmailError('Email is required.');
    } else if (!validateEmail(email)) {
      setEmailError('Enter valid email address.');
    } else if (password === '') {
      setPasswordError('Password is required.');
    } else if (!passwordValidation(password)) {
      setPasswordError('Enter valid password.');
    } else {
      dispatch(register({fullName, email, password}));
    }
  };

  const handleRegistration = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.wrapper}>
      <AppInput
        title="Full Name"
        placeholder="Enter full name"
        value={fullName}
        onChangeText={setFullName}
        error={fullNameError}
        setError={setFullNameError}
      />
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
      />
      <AppButton onPress={handleLogin} label="Registration" />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.text}
        onPress={handleRegistration}>
        <AppText label="Already have an account? Login" centere />
      </TouchableOpacity>
    </View>
  );
};

export default Registration;
