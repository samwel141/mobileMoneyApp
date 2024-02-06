import { Image, TouchableOpacity, View } from 'react-native'

import CustomText from '../../../shared/components/Text'
import React from 'react'
import images from '../../../shared/utils/images'
import styles from './styles'
import utils from '../../../shared/navigation/utils'

const Settings = (props: any) => {
    return (

        <View
            style={styles.userProfileContainerView}
        >
            <TouchableOpacity style={styles.titleTouchableOpacity}
                activeOpacity={.7}
                onPress={(() => {
                    utils.navigateToSettingsPage(props.navigation)
                })}
            >
                <CustomText style={styles.titles}>Settings</CustomText>
                <Image
                    source={images.enterColorBrand}
                    style={styles.userProfileEnter}
                />
            </TouchableOpacity>
            <View
                style={styles.settingsView}
            >
                <View style={styles.settingsTitleView}>
                    <CustomText>Payment method</CustomText>
                    <Image
                        style={styles.userProfileEnter}
                        source={images.mastercard}
                    />
                </View>
                <View style={styles.settingsTitleView}>
                    <CustomText style={styles.colorText}>Mastercard</CustomText>
                    <CustomText style={styles.colorText}>**** 1323</CustomText>
                </View>
            </View>
            <View style={[styles.settingsTitleView, styles.languageSettingsTitle]}>
                <CustomText>Language</CustomText>
                <CustomText style={styles.languageText}>English</CustomText>
            </View>
            <View style={[styles.settingsTitleView, styles.languageSettingsTitle]}>
                <CustomText>Get push-notifications</CustomText>
                <CustomText style={styles.colorText}>Yes</CustomText>
            </View>
        </View>
    )
}

export default Settings;