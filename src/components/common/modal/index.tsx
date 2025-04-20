import React, {memo, ReactElement} from 'react';
import {Modal as RNModal, View} from 'react-native';

import useStyles from './styles';

type RNModalProps = {
  visible: boolean;
  children: ReactElement | ReactElement[];
};

const Modal = ({visible, children}: RNModalProps) => {
  const styles = useStyles();

  return (
    <RNModal transparent visible={visible} statusBarTranslucent>
      <View style={styles.modal}>
        <View style={styles.wrapper}>{children}</View>
      </View>
    </RNModal>
  );
};

export default memo(Modal);
