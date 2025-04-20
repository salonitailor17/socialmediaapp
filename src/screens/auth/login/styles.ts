import {StyleSheet} from 'react-native';
import {moderateHeight, moderateWidth} from '../../../utils/responsive';

const useStyles = () => {
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      paddingHorizontal: moderateWidth(5),
      paddingVertical: moderateWidth(5),
    },
    title: {
      textAlign: 'center',
    },
    text: {
      marginTop: moderateHeight(2),
    },
  });
};

export default useStyles;
