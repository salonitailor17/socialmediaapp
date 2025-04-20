import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';
import {moderateWidth} from '../../../utils/responsive';

const useStyles = () => {
  return StyleSheet.create({
    modal: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    wrapper: {
      backgroundColor: colors.primary,
      borderRadius: moderateWidth(3),
      width: moderateWidth(90),
      padding: moderateWidth(3),
    },
  });
};

export default useStyles;
