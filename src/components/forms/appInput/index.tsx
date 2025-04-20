import {View, TextInput, TextInputProps} from 'react-native';
import React, {Dispatch, SetStateAction, memo} from 'react';

import AppText from '../appText';
import colors from '../../../assets/colors';
import useStyles from './styles';

interface AppInputProps extends TextInputProps {
  error?: string;
  title?: string;
  setError?: Dispatch<SetStateAction<any>>;
  onChangeText: Dispatch<SetStateAction<any>>;
  isPassword?: boolean;
}

const AppInput = ({
  title = '',
  value,
  onChangeText,
  error = '',
  setError,
  maxLength,
  placeholder,
  isPassword = false,
}: AppInputProps) => {
  const styles = useStyles();

  const handleOnchangeText = text => {
    onChangeText && onChangeText(text);
    setError && setError('');
  };

  const borderColor = error ? colors.red : colors.gray;

  return (
    <View>
      <View style={styles.title}>
        <AppText label={title} style={styles.titleLable} />
      </View>
      <View style={[styles.wrapper, {borderColor: borderColor}]}>
        <TextInput
          style={[styles.input]}
          value={value}
          placeholder={placeholder}
          onChangeText={handleOnchangeText}
          maxLength={maxLength}
          secureTextEntry={isPassword}
        />
      </View>
      {error && (
        <AppText label={error} style={styles.error} color={colors.red} />
      )}
    </View>
  );
};

export default memo(AppInput);
