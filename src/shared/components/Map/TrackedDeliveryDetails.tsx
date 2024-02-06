import { Image, Text, View } from 'react-native'
import React from 'react'

import { COLORS } from '../../utils/constants';
import { Rating } from "react-native-ratings";
import RectangularButton from '../../../pages/request_delivery/components/Button';
import images from '../../utils/images';
import styles from './styles';

interface TrackedDeliveryDetailsProps {
    onButtonPress?: any
} 
const TrackedDeliveryDetails = (props: TrackedDeliveryDetailsProps) => {
  return (
      <View style={styles.trackedDeliveryContainerView}>
          <View style={styles.trackedDeliveryShipperView} >
              <View style={styles.trackedDeliveryShipperInfoView}>
                  <View>
                      <Text style={styles.trackedDeliveryShipperTitleText}>Your shipper</Text>
                      <Text>Siegfred Madeghe</Text>
                      <Rating
                          type='custom'
                          ratingColor={COLORS.brand}
                          ratingBackgroundColor='#c8c7c8'
                          ratingCount={5}
                          imageSize={15}
                          style={ styles.trackedDeliveryRating }
                          readonly
                      />
                      <Text>5.0</Text>
                  </View>
              </View>
              <View
                  style={styles.trackedDeliveryShipperImageView}>
                  <Image
                      source={images.sieg}
                      style={styles.trackedDeliveryShipperImage}
                  />
              </View>

          </View>
          <View style={styles.trackedDeliveryETAView}>
              <Text style={styles.trackedDeliveryETATitleText}>Estimated time of Arrival</Text>
              <View
              >
                  <Text>July 10th, 2023</Text>
                  <Text>10:30 PM</Text>
              </View>
          </View>
          <RectangularButton
              title="Hide"
              touchableOpacityStyle={styles.trackedDeliveryButton}
              onPress={() => { props.onButtonPress()}}
              textStyle={styles.trackedDeliveryButtonTitle}
          />
      </View>
  )
}

export default TrackedDeliveryDetails