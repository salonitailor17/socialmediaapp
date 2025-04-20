import {StyleSheet} from 'react-native';
import {moderateHeight, moderateWidth} from '../../../utils/responsive';

const useStyles = () => {
  return StyleSheet.create({
    wrapper: {
      borderWidth: moderateWidth(0.3),
      borderRadius: moderateWidth(1),
      marginTop: moderateHeight(1),
    },
    input: {
      borderRadius: moderateWidth(3),
      paddingHorizontal: moderateWidth(4),
      paddingVertical: moderateWidth(1.8),
    },
    title: {
      flexDirection: 'row',
      columnGap: moderateWidth(1),
      marginTop: moderateHeight(2),
    },
    titleLable: {
      textTransform: 'capitalize',
    },
    error: {
      alignSelf: 'flex-end',
      marginTop: moderateHeight(0.5),
    },
  });
};

export default useStyles;
