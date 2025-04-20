import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';
import {moderateHeight, moderateWidth} from '../../../utils/responsive';

const useStyles = () => {
  return StyleSheet.create({
    wrapper: {
      height: moderateHeight(5),
      paddingHorizontal: moderateWidth(4),
      borderRadius: moderateWidth(1),
      backgroundColor: colors.primary,
      marginHorizontal: moderateWidth(5),
    },
    input: {
      flex: 1,
      paddingVertical: moderateHeight(1),
      height: moderateHeight(5),
      fontSize: moderateHeight(1.5),
    },
  });
};

export default useStyles;
