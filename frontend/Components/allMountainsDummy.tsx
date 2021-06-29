import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  View,
} from 'react-native';
import {
  Text,
} from 'react-native-elements';
import { getMountains } from '../store/getAllMountains.store';

function Posts() {
  const listStatus = useSelector((state:any) => state.allMountains.status);
  // const { body } = listItems[0];

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
