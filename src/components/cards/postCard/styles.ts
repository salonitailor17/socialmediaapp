import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';
import {moderateHeight, moderateWidth} from '../../../utils/responsive';
import globalStyles from '../../../assets/styles';

const useStyles = () => {
  return StyleSheet.create({
    wrapper: {
      backgroundColor: colors.primary,
      padding: moderateWidth(1),
      flexDirection: 'row',
      justifyContent: 'space-between',
      columnGap: moderateWidth(3),
      borderRadius: moderateWidth(2),
      alignItems: 'center',
      ...globalStyles().shadow,
    },
    image: {
      height: moderateHeight(8),
      width: moderateHeight(8),
      borderRadius: moderateWidth(2),
      resizeMode: 'contain',
      ...globalStyles().shadow,
      backgroundColor: colors.primary,
    },
    wrap: {
      flex: 1,
    },
    icon: {
      paddingRight: moderateHeight(2),
    },
    cross: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
};

export default useStyles;
