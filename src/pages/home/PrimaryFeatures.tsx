import Card from './components/Card';
import React from 'react';
import {View} from 'react-native';
import images from '../../shared/utils/images';
import styles from './styles';
import utils from '../../shared/navigation/utils';

const PrimaryFeatures = (props: any) => {
  return (
    <View style={styles.parentView}>
      <View style={styles.childView}>
        <Card
          title={'Request\nDelivery'}
          summary={'Calculate shipping cost and delivery time'}
          onPress={() => {
            utils.navigateToRequestDeliveryPage(props.navigation);
          }}
          icon={images.calculate}
          titleStyle={styles.title}
          summaryStyle={styles.summary}
          touchableOpacityStyle={styles.callToActionCardTouchableOpacity} 
        />
        <Card
          title={'Real-time\nTracking'}
          summary={'Check your package moving, step-by-step'}
          onPress={() => {
            utils.navigateToLiveTrackingPage(props.navigation);
          }}
          icon={images.tracking}
          touchableOpacityStyle={styles.cardTouchableOpacity} 
        />
      </View>
      <View style={styles.childView}>
        <Card
          title={'Order\nHistory'}
          summary={'A story of what we have achieved'}
          onPress={() => { 
            utils.navigateToOrderHistoryPage(props.navigation);
           }}
          icon={images.clock}
          touchableOpacityStyle={styles.cardTouchableOpacity} 
        />
        <Card
          title={'Generate\nQR Code'}
          summary={'Pick or drop your package in style'}
          onPress={() => {
            utils.navigateToQrCodePage(props.navigation);
          }}
          icon={images.qrCode}
          touchableOpacityStyle={styles.cardTouchableOpacity}
        />
      </View>
    </View>
  );
};

export default PrimaryFeatures;
