import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  View,
} from 'react-native';
import {
  Text,
} from 'react-native-elements';
import { getMountains } from '../store/getAllMountains.store';

function Posts () {
  const listItems = useSelector((state) => state.allMountains.mountainList);
  const listStatus = useSelector((state) => state.allMountains.status);
  // const { body } = listItems[0];
  console.log(listItems);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMountains());
  }, [dispatch]);

  return (
    <View>
      <Text>
        {listStatus}

      </Text>

    </View>

  );
}

export default Posts;
