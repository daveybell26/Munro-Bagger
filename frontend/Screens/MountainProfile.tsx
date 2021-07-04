import React, { useEffect } from 'react';
import {
  SafeAreaView, Text, StyleSheet, Image, View, Pressable, Switch,
} from 'react-native';
import { useParams, useHistory } from 'react-router-native';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome5 } from '@expo/vector-icons';
import { getOneMountain } from '../store/getOneMountain.store';
import { postClimbedStatus } from '../store/postClimbed.store';
import { putClimbedStatus } from '../store/putClimbed.store';
import NavFooter from '../Components/NavFooter';
import Header from '../Components/Header';
import ImageGrid from '../Components/ImageGrid';
import { globalStyles } from './styles/GlobalStyles';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EBF2FA',
  },
  title: {
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    flex: 0,
  },
  info: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  routeButton: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const MountainProfile = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const {
    name, imageUrl, Pictures, Peak, Statuses,
  } = useSelector((state: any) => state.oneMountain.mountain);
  const createStatusListener = useSelector((state: any) => state.unclimbedCreate.climbedStatusObj);
  const updateStatusListener = useSelector((state: any) => state.unclimbedUpdate.climbedStatusArr);
  const userId = useSelector((state: any) => state.login.userDetails.id);
  const initialSwitchStatus = () => (Statuses.length === 0 ? false : Statuses[0].climbed);
  const dispatch = useDispatch();
  const changeStatus = () => {
    if (Statuses.length === 0) {
      dispatch(postClimbedStatus({ userId, id }));
    } else {
      dispatch(putClimbedStatus({ id: Statuses[0].id, bool: !Statuses[0].climbed }));
    }
  };

  useEffect(() => {
    dispatch(getOneMountain(+id));
  }, [createStatusListener, updateStatusListener]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageUrl }}
          style={{ width: '100%', height: 200 }}
        />
      </View>
      <Text style={globalStyles.subHeaders}>{name}</Text>
      <SafeAreaView style={styles.info}>
        <Text style={globalStyles.stats}>
          Elevation:
          {' '}
          {Peak?.elevation}
          m
        </Text>
        <Text style={globalStyles.stats}>
          Status:
          {' '}
          {/* {Statuses?.climbed ? 'Climbed' : 'Not Climbed'} */}
        </Text>
        <Switch
          trackColor={{ false: 'red', true: 'green' }}
          // thumbColor={isEnabled ? 'white' : 'white'}
          ios_backgroundColor="red"
          onValueChange={() => changeStatus()}
          value={!Statuses ? null : initialSwitchStatus()}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.routeButton}>
        <Pressable onPress={() => history.push('/route')}>
          <FontAwesome5 name="route" size={50} color={Statuses?.climbed ? 'green' : 'red'} />
        </Pressable>
        <Text>
          Show Route
        </Text>
      </SafeAreaView>

      <ImageGrid list={Pictures} />
      <NavFooter />
    </SafeAreaView>
  );
};

export default MountainProfile;
