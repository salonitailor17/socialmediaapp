import React, {memo, useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import {AppButton, AppInput, AppText, Modal} from '../..';
import Icon from '../../../assets/icons';

import {moderateHeight} from '../../../utils/responsive';
import useStyles from './styles';

const PostCard = ({item, index, edit = false}: any) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [caption, setCaption] = useState<string>(item?.caption);
  const [captionError, setCaptionError] = useState<string>('');

  const styles = useStyles();

  const handleModal = () => {
    setVisible(true);
  };

  const handleUpdate = () => {
    setVisible(false);
  };

  return (
    <>
      <View style={styles.wrapper}>
        <Image source={{uri: item?.postImage}} style={styles.image} />

        <AppText label={item?.caption} fontWeight={'600'} style={styles.wrap} />
        <TouchableOpacity activeOpacity={0.8} style={!edit ? styles.icon : {}}>
          {item?.likes ? <Icon.LikeFillIcon /> : <Icon.LikeIcon />}
        </TouchableOpacity>
        {edit && (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.icon}
            onPress={handleModal}>
            <Icon.EditIcon />
          </TouchableOpacity>
        )}
      </View>
      <Modal visible={visible}>
        <View style={styles.cross}>
          <AppText label={'Edit item'} fontWeight={'600'} style={{flex: 1}} />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setVisible(false)}>
            <Icon.ExitIcon
              height={moderateHeight(2.5)}
              width={moderateHeight(2.5)}
            />
          </TouchableOpacity>
        </View>
        <AppInput
          title="Caption"
          placeholder="Enter caption"
          value={caption}
          onChangeText={setCaption}
          error={captionError}
          setError={setCaptionError}
        />
        <AppButton label="Update" onPress={handleUpdate} />
      </Modal>
    </>
  );
};

export default memo(PostCard);
