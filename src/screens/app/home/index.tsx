import {View, FlatList, StyleSheet, ToastAndroid} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {PostCard, SearchInput} from '../../../components';

import {moderateHeight, moderateWidth} from '../../../utils/responsive';
import {fetchPosts} from '../../../store/actions/app/post';

const Home = () => {
  const [originalData, setOriginalData] = useState<object[]>([]);
  const [filteredData, setFilteredData] = useState<object[]>([]);
  const [search, setSearch] = useState<string>('');

  const dispatch = useDispatch();
  const {data: posts, error} = useSelector(state => state.posts);
  const {data} = useSelector(state => state.auth);
  const {data: createPost} = useSelector(state => state.postCreate);

  useEffect(() => {
    if (data?.data) {
      dispatch(fetchPosts(data?.data?.user?.userName));
    }
  }, [data, createPost]);

  useEffect(() => {
    if (posts?.status === 'SUCCESS') {
      setOriginalData(posts?.data?.posts);
      setFilteredData(posts?.data?.posts);
    }
    if (error) {
      setOriginalData([]);
      setFilteredData([]);
      ToastAndroid.show(error, 10000);
    }
  }, [posts, error]);

  useEffect(() => {
    if (search.trim() === '') {
      setFilteredData(originalData);
    } else {
      const filtered = originalData.filter((item: any) =>
        item?.caption?.toLowerCase().includes(search.toLowerCase()),
      );
      setFilteredData(filtered);
    }
  }, [search, originalData]);

  const renderItem = ({item, index}) => {
    return <PostCard item={item} index={index} edit />;
  };

  const onChangeText = (keyword: string) => {
    setSearch(keyword);
  };

  return (
    <View style={styles.wrapper}>
      <SearchInput onChangeText={onChangeText} value={search} />
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.flatList}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  flatList: {
    rowGap: moderateHeight(1),
    paddingVertical: moderateHeight(2),
    paddingHorizontal: moderateWidth(5),
  },
  wrapper: {
    flex: 1,
    paddingTop: moderateWidth(5),
  },
});
