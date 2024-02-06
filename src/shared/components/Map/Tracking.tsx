import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import React, { useState } from 'react'

import { CUSTOM_LIVE_TRACKING_MAP_STYLE } from '../../utils/constants';
import Input from '../../../pages/request_delivery/components/Input';
import RectangularButton from '../../../pages/request_delivery/components/Button';
import RoundButton from '../../../pages/home/components/Button';
import TrackedDeliveryDetails from './TrackedDeliveryDetails';
import { View } from 'react-native'
import images from '../../utils/images';
import styles from './styles';
import utils from '../../navigation/utils';

/**.
 * To-do: Consider moving this to the pages folder.
 */

const Tracking = (props: any) => {
    const [showDeliveryDetails, setShowDeliveryDetails] = useState(false);
    return (
        <>
            <RoundButton
                touchableOpacityStyle={styles.trackingSafeAreaView}
                icon={images.smallBackArrow}
                imageStyle={styles.trackingRoundButton}
                onPress={() => { 
                    utils.navigateToHomePage(props.navigation)
                 }}
            />
            {
                showDeliveryDetails ? 
                    <TrackedDeliveryDetails
                        onButtonPress={() => { setShowDeliveryDetails(false)}}
                    />
                    :
                   <>
                        <View style={styles.trackingInputTextView}>
                            <Input
                                textInputStyle={styles.trackingInputText}
                                textInputOnFocusStyle={styles.trackingInputTextOnFocus}
                                onEndTextEditing={console.log}
                                placeholder={'Enter Tracking ID'}
                            />
                        </View>
                        <RectangularButton
                            title="Track"
                            touchableOpacityStyle={styles.trackingRectangularButton}
                            onPress={() => { setShowDeliveryDetails(true) }}
                            textStyle={styles.trackingRectangularButtonText}
                        />
                   </>
            }
            <MapView
                style={styles.trackingMapView}
                provider={PROVIDER_GOOGLE}
                mapType='standard'
                showsBuildings={!false}
                showsPointsOfInterest={false}
                removeClippedSubviews
                zoomEnabled={true}
                showsCompass={false}
                followsUserLocation
                customMapStyle={CUSTOM_LIVE_TRACKING_MAP_STYLE}
                initialRegion={{ latitude: -6.88334, longitude: 39.15823, latitudeDelta: 0.9, longitudeDelta: .9 }}
                tintColor='red'
            />
        </>
    )
}

export default Tracking;