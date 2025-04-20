import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {AppText, PostCard} from '../../../components';
import Icon from '../../../assets/icons';

import {moderateHeight, moderateWidth} from '../../../utils/responsive';
import {logout} from '../../../store/actions/auth/login';

const Settings = () => {
  const [postData, setPostData] = useState<object[]>([]);

  const {data} = useSelector(state => state.auth);
  const {data: posts, error} = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (posts?.data?.posts) {
      const data = [...posts?.data?.posts]?.filter(i => i?.likes);
      setPostData(data);
    }
  }, [posts]);

  const handleLogout = () => {
    dispatch(logout());
  };

  const renderItem = ({item, index}) => {
    return <PostCard item={item} index={index} />;
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.wrapper}>
        <View>
          <AppText
            label={data?.data?.user?.fullName}
            size={moderateHeight(2.3)}
            fontWeight={'bold'}
          />
          <AppText label={data?.data?.user?.email} fontWeight={'bold'} />
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={handleLogout}>
          <Icon.Logout />
        </TouchableOpacity>
      </View>

      <FlatList
        data={postData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.flatList}
      />
    </View>
  );
};

export default Settings;
const styles = StyleSheet.create({
  wrapper: {
    padding: moderateWidth(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flatList: {
    rowGap: moderateHeight(1),
    paddingHorizontal: moderateWidth(5),
    paddingVertical: moderateHeight(2),
  },
});
