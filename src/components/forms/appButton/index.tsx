import {TouchableOpacity, ViewStyle} from 'react-native';
import React, {memo} from 'react';

import AppText from '../appText';
import colors from '../../../assets/colors';

import useStyles from './styles';

interface AppButtonProps {
  label: string;
  onPress?(): void;
  style?: ViewStyle;
}

const AppButton = ({label = '', onPress, style}: AppButtonProps) => {
  const styles = useStyles();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.wrapper, style]}>
      <AppText label={label} color={colors.primary} />
    </TouchableOpacity>
  );
};

export default memo(AppButton);
