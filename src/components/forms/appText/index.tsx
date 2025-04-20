import {Text, TextStyle} from 'react-native';
import React, {memo} from 'react';

import colors from '../../../assets/colors';
import {moderateHeight} from '../../../utils/responsive';

interface AppTextProps {
  label: string | number;
  color?: string;
  style?: TextStyle;
  size?: number;
  fontWeight?: any;
  centere?: boolean;
}

const AppText = ({
  label,
  color,
  style,
  size,
  fontWeight,
  centere,
}: AppTextProps) => {
  return (
    <Text
      style={[
        style,
        {
          color: color ? color : colors.secondary,
          fontSize: size ? size : moderateHeight(1.8),
          fontWeight: fontWeight ? fontWeight : '500',
          textAlign: centere ? 'center' : 'auto',
        },
      ]}>
      {label}
    </Text>
  );
};

export default memo(AppText);
