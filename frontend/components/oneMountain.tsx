import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  View, Text,
} from 'react-native';
import { getOneMountain } from '../store/getOneMountain.store';

function OneMountain() {
  // TODO: remove any's
  const listItems = useSelector((state: any) => state.oneMountain.mountain);
  const listStatus = useSelector((state: any) => state.oneMountain.loading);
  const { name } = listItems;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneMountain(1));
  }, [dispatch]);

  return (
    <View>
      <Text>one mountain</Text>
      <Text>{listStatus}</Text>
      <Text>{name}</Text>
    </View>
  );
}

export default OneMountain;