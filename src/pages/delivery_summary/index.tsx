import AppBar from '../../shared/components/AppBar';
import Button from '../request_delivery/components/Button';
import CommonSummaryComponent from './components/Common';
import CustomText from '../../shared/components/Text';
import Destination from './components/Destination';
import Display from '../../shared/components/Map/Display';
import { PAGES } from '../../shared/utils/constants';
import React from 'react'
import { View } from 'react-native'
import styles from './styles';
import utils from '../../shared/navigation/utils';

const DeliverySummary = (props: any) => {
    return (
        <>
        <AppBar
            title='Summary'
            safeAreaViewStyle={styles.deliverySummaryPageAppBar}
            onPress={() => {
                const navigateFromPage = props?.route?.params?.returnTo;
                if (navigateFromPage === PAGES.requestDelivery) {
                    utils.navigateToRequestDeliveryPage(props.navigation);
                } else if (navigateFromPage === PAGES.orderHistory) {
                    utils.navigateToOrderHistoryPage(props.navigation)
                }
            }}
            
        />
            <View style={styles.deliverySummaryContainer}>
                <Display />
                <CustomText style={styles.deliverySummaryTitle}>Your Delivery</CustomText>
                <CommonSummaryComponent
                    leftText='Delivery type'
                    rightText='Express'
                    commonContainerViewStyle={styles.deliveryType}
                />
                <Destination
                    dropOffLocation='5590 Farmwood Dr, New Albany, OH'
                    pickUpLocation='5590 Farmwood Dr, New Albany, OH'
                    destinationContainerViewStyles={styles.deliveryAddress}
                />
                <CommonSummaryComponent
                    leftText='Deliver to'
                    rightText='Siegfred Madeghe'
                    commonContainerViewStyle={styles.deliveryReceiver}
                />
                <CommonSummaryComponent
                    leftText='Delivery date'
                    commonContainerViewStyle={styles.deliveryDateTitle}
                />
                <CommonSummaryComponent
                    leftText='July 10th, 2023'
                    rightText='18:30'
                    commonContainerViewStyle={styles.deliveryDate}
                    commonLeftTitleTextStyle={styles.deliveryDateText}
                />
                <CommonSummaryComponent
                    leftText='Delivery Cost'
                    rightText='Tsh. 20,000/='
                    commonContainerViewStyle={styles.deliveryCost}
                    commonLeftTitleTextStyle={styles.deliveryCostTitle}
                    commonRightTitleTextStyle={styles.deliveryCostAmount}
                />
                <View style={styles.deliveryButtons}>
                    <Button
                        title='Edit'
                        touchableOpacityStyle={styles.deliveryEditButton}
                        onPress={() => {
                            utils.navigateToRequestDeliveryPage(props.navigation)
                        }}
                    />
                    <Button
                        title='Request Delivery'
                        textStyle={styles.deliveryRequestText}
                        touchableOpacityStyle={styles.deliveryRequestButton}
                        onPress={() => {
                            utils.navigateToBeforeDeliveryPage(props.navigation, PAGES.deliverySummary);
                          }}
                    />
                </View>
            </View>
        </>
    )
};

export default DeliverySummary;