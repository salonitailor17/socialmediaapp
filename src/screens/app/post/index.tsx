import {View, StyleSheet, Image, ToastAndroid} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ImageCropPicker from 'react-native-image-crop-picker';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {AppButton, AppInput} from '../../../components';
import {moderateHeight, moderateWidth} from '../../../utils/responsive';

import routes from '../../../navigation/routes';
import {createPost} from '../../../store/actions/app/createPost';

const Post = () => {
  const [caption, setCaption] = useState<string>('');
  const [captionError, setCaptionError] = useState<string>('');

  const [image, setImage] = useState<any>(undefined);

  const navigation = useNavigation<NavigationProp<any, any>>();

  const dispatch = useDispatch();
  const {data, error} = useSelector(state => state.postCreate);

  useEffect(() => {
    if (data) {
      ToastAndroid.show(data?.message, 1000);
      setCaption('');
      setImage(undefined);
      navigation.navigate(routes.app.home);
    }

    if (error) {
      ToastAndroid.show(error, 1000);
      setCaption('');
      setImage(undefined);
    }
  }, [data, error]);

  const handleImageUpload = () => {
    ImageCropPicker.openPicker({
      mediaType: 'photo',
    })
      .then(response => {
        setImage(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const handleCreate = () => {
    if (caption === '') {
      setCaptionError('Caption is required.');
    } else {
      const formData = new FormData();

      formData.append('caption', caption);
      formData.append('postImage', {
        uri: image?.path,
        name: image?.filename,
        type: image?.mime,
      });
      dispatch(createPost(formData));
    }
  };

  return (
    <View style={styles.wrapper}>
      <AppInput
        title="Caption"
        placeholder="Enter caption"
        value={caption}
        onChangeText={setCaption}
        error={captionError}
        setError={setCaptionError}
      />
      <Image source={{uri: image?.path}} style={styles.img} />
      <AppButton label="Upload Image" onPress={handleImageUpload} />
      <AppButton label="Create Post" onPress={handleCreate} />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: moderateWidth(5),
  },
  img: {
    height: moderateHeight(20),
    width: moderateHeight(20),
    borderRadius: moderateWidth(2),
    alignSelf: 'center',
    marginTop: moderateHeight(2),
  },
});
