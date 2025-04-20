import {TextInput, TextInputProps, View} from 'react-native';
import React, {memo, useCallback} from 'react';

import useStyles from './styles';
import colors from '../../../assets/colors';

interface AuthInputProps extends TextInputProps {
  onEnterKey?(): void;
}

const SearchInput = ({value, onChangeText, onEnterKey}: AuthInputProps) => {
  const styles = useStyles();

  const handleOnchangeText = useCallback(
    (text: string): void => {
      onChangeText && onChangeText(text);
    },
    [onChangeText],
  );

  const handleOnSubmitEditing = () => {
    onEnterKey && onEnterKey();
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder={'Search here'}
        value={value}
        onChangeText={handleOnchangeText}
        returnKeyType="search"
        onSubmitEditing={handleOnSubmitEditing}
        placeholderTextColor={colors.gray}
      />
    </View>
  );
};

export default memo(SearchInput);
