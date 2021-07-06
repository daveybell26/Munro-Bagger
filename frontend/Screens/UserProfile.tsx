import React, { useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { SafeAreaView, Text, View } from 'react-native';
import { useHistory } from 'react-router-native';
import NavFooter from '../Components/NavFooter';
import Header from '../Components/Header';
import ImageGrid from '../Components/ImageGrid';
import { getUserPicsRandomly } from '../store/getRandomUserPics.store';
import CircularThumbnailImage from '../Components/CircularThumbnailImage';
import { getMountains } from '../store/getAllMountains.store';
import { globalStyles } from './styles/GlobalStyles';
import {
  randomUserPicsSelector, allMountainSelector, useAppDispatch, loginSelector,
} from '../store';
import styles from './styles/userProfileStyles';

const heroImageUrl = 'https://i.pinimg.com/564x/39/d8/e7/39d8e709ff0a72e0f83ac2decebde7ee.jpg';

const UserProfile = () => {
  const history = useHistory();
  const { pictures } = useSelector(randomUserPicsSelector);
  const { mountainList } = useSelector(allMountainSelector);
  const { userDetails } = useSelector(loginSelector);

  const dispatch = useAppDispatch();

  const totalMunroes = mountainList.length;
  const numberOfMunroesClimbed = mountainList
    .filter((mountain) => mountain.Statuses[0]?.climbed).length;

  const munroeClimbedPercentage = (numberOfMunroesClimbed / totalMunroes) * 100;
  const progressBarPercentageNum = Math.round(munroeClimbedPercentage);
  const progressBarPercentage = `${progressBarPercentageNum}%`;

  useEffect(() => {
    dispatch(getUserPicsRandomly(userDetails.id));
    dispatch(getMountains(userDetails.id));
  }, [dispatch, userDetails.id]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <View style={{ flex: 0 }}>
        <View style={styles.userProfileHeroSection}>
          <CircularThumbnailImage imageUrl={heroImageUrl} />
          <Text style={globalStyles.header}>
            Amy Bell
          </Text>
          <View style={{ padding: 10, backgroundColor: '#ddd', borderRadius: 50 }}>
            <MaterialIcons name="photo-camera" size={40} onPress={() => history.push('/camera')} />
          </View>
        </View>
        <View style={styles.lineBreaks} />
        <View style={styles.userStatsSection}>
          <View>
            <Text style={globalStyles.stats}>
              Munroes Climbed:
            </Text>
            <Text style={globalStyles.stats}>
              {numberOfMunroesClimbed}
              /
              {totalMunroes}
            </Text>
          </View>
          {/* Status bar to be incooperated (dependent on userMunroeStats state) */}
          <View style={styles.progressBar}>
            <View style={{
              width: `${progressBarPercentageNum}%`,
              height: '100%',
              backgroundColor: '#2AE0B4',
            }}
            />
            <Text style={styles.progressText}>
              {progressBarPercentage}
            </Text>
          </View>
        </View>
        <View style={styles.lineBreaks} />
        <View style={styles.userMunroePics}>
          <Text style={globalStyles.subHeaders}>
            Pictures From Mountains Climbed.
          </Text>
        </View>
      </View>
      <ImageGrid list={pictures} />
      <NavFooter />
    </SafeAreaView>
  );
};

export default UserProfile;
