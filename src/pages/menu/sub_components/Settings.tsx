import { Image, Switch, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import AppBar from '../../../shared/components/AppBar'
import Button from '../../request_delivery/components/Button'
import CustomText from '../../../shared/components/Text'
import PaymentDetail from './PaymentDetail'
import Picker from '../../auth/components/Picker'
import images from '../../../shared/utils/images'
import styles from './styles'
import utils from '../../../shared/navigation/utils';

const Settings = (props: any) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [showPaymentDetail, setShowPaymentDetail] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState: any) => !previousState);
    const SUPPORTED_LANGUAGES = [
        { label: 'ENG', value: 'english' },
        { label: 'SWH', value: 'swahili' },
    ];
    return (
        <>
            <AppBar
                title='Settings'
                safeAreaViewStyle={styles.safeAreaView}
                onPress={() => { utils.navigateToMenuPage(props.navigation) }}
            />
            <View
                style={styles.personalDetailsContainerView}
            >
                <View style={{ ...styles.personalDetailsPrimaryView, ...{ padding: 15 } }}>
                    <View style={styles.settingsPushNotificationView}>
                        <CustomText>Get push-notifications</CustomText>
                        <Switch
                            trackColor={{ false: 'grey', true: 'green' }}
                            thumbColor={'white'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style={styles.settingsSwitch}
                        />
                    </View>
                    <View style={styles.settingsLanguageView}>
                        <CustomText>Language</CustomText>
                        <Picker
                            id={1}
                            placeholder="ENG"
                            items={SUPPORTED_LANGUAGES}
                            pickerButtonStyle={styles.settingsPickerButton}
                            pickerIconWrapperStyle={styles.settingsPickerIconWrapper}
                            pickerSelectedValueStyle={styles.settingsPickerSelectedValue}
                            pickerViewStyle={styles.settingsPickerView}
                        />
                    </View>

                    <View style={styles.settingsPaymentMethodTitleView}>
                        <CustomText>Payment method</CustomText>
                        <Button
                            title='Add'
                            touchableOpacityStyle={styles.settingsPaymentDetailsAddButtonTouchableOpacity}
                            textStyle={styles.settingsPaymentDetailsAddButtonTextStyle}
                            onPress={() => {
                                console.log('Pressed')
                            }}
                        />
                    </View>
                    
                    {
                        [
                            { card: 'Visa', digit: 3534, selected: false },
                            { card: 'Vodacom', digit: 7289, selected: true },
                            { card: 'Mastercard', digit: 3425, selected: false}
                        ].map((method) => 
                            <TouchableOpacity
                                key={method.digit}
                                style={styles.settingsPaymentMethodView}
                                activeOpacity={.5}
                                onPress={() => {setShowPaymentDetail(true)}}
                            >
                                <View style={styles.settingsPaymentItemView}>
                                    <Image
                                        style={styles.settingsPaymentIconImage}
                                        source={images[method.card.toLocaleLowerCase()]}
                                    />
                                    <CustomText style={styles.settingsPaymentDetailsText}>
                                        {
                                            `${method.card}     • • • ${method.digit}`
                                        }
                                    </CustomText>
                                </View>
                                {
                                    method.selected ?
                                        <Image
                                            style={styles.settingsPaymentSelectedIcon}
                                            source={images.tick}
                                        />
                                        :
                                        <></>
                                }
                                    {
                                        showPaymentDetail ?
                                            <PaymentDetail 
                                                visible={showPaymentDetail}
                                                onPress={setShowPaymentDetail}
                                            />
                                            :
                                            <></>
                                    }
                            </TouchableOpacity>
                        )
                    }
                </View>
            </View>
        </>
    )
}

export default Settings;
