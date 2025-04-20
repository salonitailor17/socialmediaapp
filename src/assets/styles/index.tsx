import {StyleSheet} from 'react-native';
import colors from '../colors';
import {moderateHeight} from '../../utils/responsive';

const globalStyles = () => {
  return StyleSheet.create({
    shadow: {
      shadowColor: colors.secondary,
      shadowOffset: {
        width: 0,
        height: moderateHeight(0.6),
      },
      shadowOpacity: 0.1,
      shadowRadius: moderateHeight(0.5),
      elevation: moderateHeight(0.7),
    },
  });
};

export default globalStyles;
