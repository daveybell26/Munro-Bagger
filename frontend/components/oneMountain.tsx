import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  View,
} from 'react-native';
import {
  Text,
} from 'react-native-elements';
import { getOneMountain } from '../store/getOneMountain.store';

function OneMountain () {
  const listItems = useSelector((state) => state.oneMountain.mountain);
  const listStatus = useSelector((state) => state.oneMountain.status);
  const { name } = listItems;
  console.log(listItems);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneMountain());
  }, [dispatch]);

  return (
    <View>
      <Text>
        one mountain
        {' '}
        {listStatus}
        {name}

      </Text>

    </View>

  );
}

export default OneMountain;
