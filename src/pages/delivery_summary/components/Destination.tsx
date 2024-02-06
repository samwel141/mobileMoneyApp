import { Image, View } from 'react-native'

import CustomText from '../../../shared/components/Text';
import React from 'react';
import images from '../../../shared/utils/images';
import styles from './styles';

interface DestinationProps {
   dropOffLocation: string;
   pickUpLocation: string;
   destinationContainerViewStyles: any;
}
const Destination = (props: DestinationProps) => {
  return (
    <View style={[styles.destinationContainerView, props.destinationContainerViewStyles]}>
          <View style={styles.destinationTitles}>
              <CustomText
                  style={styles.destinationTitleText}
              >Pick-up</CustomText>
              <Image
                  source={images.direction}
                  style={styles.destinationDirectionImage}
              />
              <CustomText
                  style={styles.destinationTitleText}
              >Drop-off</CustomText>
      </View>
          <View style={styles.destinationAddressView}>
              <CustomText
                style={styles.destinationPickUpAddressText}
                numberOfLines={3}
              >
                {
                    props?.pickUpLocation || "No Pick Up Location"
                }
              </CustomText>
              <CustomText
                style={styles.destinationDropOffAddressText}
                numberOfLines={3}
              >
                {
                    props?.dropOffLocation || "No Drop Off Location"
                }
              </CustomText>
      </View>
    </View>
  )
}

export default Destination