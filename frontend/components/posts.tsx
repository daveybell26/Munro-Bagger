import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  View,
} from 'react-native';
import {
  Text,
} from 'react-native-elements';
import { getPosts } from '../store/posts';

function Posts() {
  const listItems = useSelector((state) => state.posts.list.data);
  const listStatus = useSelector((state) => state.posts.status);
  const { body } = listItems[0];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <View>
      <Text>
        {listStatus}
        {body}
        ;
      </Text>

    </View>

  );
}

export default Posts;
