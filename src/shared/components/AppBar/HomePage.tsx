import * as React from 'react';

import {Image, TouchableOpacity, View} from 'react-native';

import CustomText from '../Text';
import images from '../../utils/images';
import styles from './style';

// To-do: Add in the interface type check for navigation:
interface HomePageAppBarProps {
  name: string;
  onPress: any;
}

const HomePage = (props: HomePageAppBarProps) => {
  return (
    <>
      <View style={styles.parentView}>
        <CustomText style={styles.userNameText}>{`Hello, ${props.name}`}</CustomText>
        <TouchableOpacity
          style={styles.touchableRipple}
          onPress={() => { props.onPress() }}
        >
          <Image source={images.menu} style={styles.image} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HomePage;
