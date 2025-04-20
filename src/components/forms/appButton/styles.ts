import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';
import {moderateHeight, moderateWidth} from '../../../utils/responsive';

const useStyles = () => {
  return StyleSheet.create({
    wrapper: {
      backgroundColor: colors.secondary,
      padding: moderateHeight(1.5),
      borderRadius: moderateWidth(2),
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: moderateHeight(2),
    },
  });
};

export default useStyles;
