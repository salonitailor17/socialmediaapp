import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {moderateHeight, moderateWidth} from '../../utils/responsive';

const useStyles = () => {
  return StyleSheet.create({
    container: {
      height: moderateHeight(8),
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: colors.secondary,
      width: moderateWidth(90),
      alignSelf: 'center',
      marginBottom: moderateHeight(2),
      borderRadius: moderateWidth(10),
    },
  });
};

export default useStyles;
