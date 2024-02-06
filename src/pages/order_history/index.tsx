/* eslint-disable react-native/no-inline-styles */
import { FlatList, View } from 'react-native'

import AppBar from '../../shared/components/AppBar';
import CustomText from '../../shared/components/Text';
import Input from './components/Input';
import Order from './components/Order';
import { PAGES } from '../../shared/utils/constants';
import Picker from '../auth/components/Picker';
import React from 'react'
import Status from './components/Status';
import styles from './styles';
import utils from '../../shared/navigation/utils';

const FILTER_OPTIONS = [
    { label: 'New first', value: 'new' },
    { label: 'Old first ', value: 'old' }
];

const OrderHistory = (props: any) => {
    return (
       <>
            <AppBar
                title='Order History'
                safeAreaViewStyle={styles.orderHistoryPageAppBar}
                onPress={() => {
                    utils.navigateToHomePage(props.navigation);
                }}
            />   
            <View style={styles.orderHistoryPageContainerView}>
                
                <View style={styles.orderSearchAndStatusView}>
                    <Input inputContainerViewStyle={styles.inputSearchContainerView} />
                    <Status statusContainerViewStyle={styles.statusContainerView} />
                </View>
                <View style={styles.viewStyle}>
                    <CustomText style={styles.textStyle}>61 orders</CustomText>
                    <Picker
                        id={1}
                        items={FILTER_OPTIONS}
                        placeholder='New first'
                        pickerViewStyle={styles.pickerView}
                        pickerButtonStyle={styles.pickerButton}
                        pickerIconWrapperStyle={styles.pickerIconWrapper}
                    />
                </View>
                <FlatList
                    data={[.5, 1, 2, 5, 6, 7, 3, 4,]}
                    showsVerticalScrollIndicator={false}
                    style={{ marginBottom: 10 }}
                    renderItem={({item}) => (
                        <Order
                            progressPercentage={item}
                            onPress = {() => {
                                utils.navigateToDeliverySummaryPage(props.navigation, PAGES.orderHistory);
                            }}
                        />
                    )}
                />
            </View>
       </>
    )
};

export default OrderHistory;