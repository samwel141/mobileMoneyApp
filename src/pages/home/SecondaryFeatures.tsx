import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';

import AddFavoriteLocation from './sub_components/AddFavoriteLocation';
import Button from './components/Button';
import CustomText from '../../shared/components/Text';
import images from '../../shared/utils/images';
import styles from './styles';

const SecondaryFeatures = () => {
  const [showModal, setShowModal] = useState(false);
  const getFirstFewChars = (location: string): string => {
    if (location && location.length > 10) {
      return `${location.substring(0, 10)}...`;
    }
    return location || 'Tanzania';
  };

  const getFirstTwoChars = (location: string): string => {
    if (location) {
      return location.substring(0, 2).toUpperCase();
    }
    return 'TZ';
  };
  return (
    <View style={styles.containerView}>
      {
        showModal ?
        <AddFavoriteLocation 
          showModal={showModal}
          onCancel={() => {
            setShowModal(false)
          }}
        />
        :
        <></>
      }
      <View>
        <Button
          onPress={() => {
            setShowModal(true);
          }}
          touchableOpacityStyle={styles.buttonAddTouchableOpacity}
          icon={images.plus}
          imageStyle={styles.buttonAddImage}
        />
        <CustomText style={styles.leftViewText}>Add</CustomText>
      </View>
      <ScrollView
        style={styles.scrollView}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {['Kinondoni', 'Temeke', 'Buza', 'Bunju', 'Kimara'].map(
          (location, index) => (
            <View key={`${location}-${index}`}>
              <Button
                id={`${location}-${index}`}
                locationInitials={getFirstTwoChars(location)}
                onPress={() => {
                  console.log('Clicked from button');
                }}
                touchableOpacityStyle={styles.buttonTouchableOpacity}
              />
              <CustomText style={styles.rightViewText} numberOfLines={1}>
                {getFirstFewChars(location)}
              </CustomText>
            </View>
          ),
        )}
      </ScrollView>
    </View>
  );
};

export default SecondaryFeatures;
