import { Image, TouchableOpacity, View } from 'react-native'

import CustomText from '../../../shared/components/Text'
import React from 'react'
import images from '../../../shared/utils/images'
import styles from './styles';

const Order = (props: any) => {
  return (
    <TouchableOpacity
        style={styles.orderTouchableOpacity}
        onPress={() => { props.onPress() }}
    >
        <View style={styles.orderArrivalTimeView}>
            <CustomText style={styles.orderETAText}>Arrives</CustomText>
            <View style={styles.orderETAView}>
                <CustomText style={styles.orderDeliveryDate}>July 5th</CustomText>
                <CustomText>10</CustomText>
                <CustomText>PM</CustomText>
            </View>
        </View>
        <View style={styles.orderInformationView}>
            <View style={styles.orderIDAndStatusView}>
                  <CustomText style={styles.orderNumberText}>
                    {
                          `D-000${props.progressPercentage * 10}`
                    }
                  </CustomText>
                  <View style={styles.orderStatusView}>
                      <CustomText style={styles.orderStatusText}>ON GOING</CustomText>
                  </View>
            </View>
            <View style={styles.orderDeliveryView}>
                <View style={styles.orderDeliveryLocationsView}>
                    <CustomText style={styles.orderPickUpDropOffLocationText} numberOfLines={1}>From: 5590 Farmwood Dr, New Albany</CustomText>
                    <CustomText style={styles.orderPickUpDropOffLocationText} numberOfLines={1}>To: 258 Boston Ave, Medford, MA, USa</CustomText>
                </View>
                <View style={styles.orderSummaryView}><Image source={images.enter} style={styles.orderEnterImage}/></View>
            </View>
              {/* <View style={styles.orderProgressLineView}>
                  <View style={[styles.orderProgessLineBottomView, { width: `${props.progressPercentage}%` }]} /></View>
              <CustomText style={styles.orderProgressText}>{`${props.progressPercentage}%`}</CustomText> */}
        </View>
    </TouchableOpacity>
  )
}

export default Order