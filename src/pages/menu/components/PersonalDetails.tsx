import { Image, TouchableOpacity, View } from 'react-native'

import CustomText from '../../../shared/components/Text'
import React from 'react'
import images from '../../../shared/utils/images'
import styles from './styles'
import utils from '../../../shared/navigation/utils'

const PersonalDetails = (props: any) => {
    return (
        <View style={styles.userProfileContainerView}>
            <TouchableOpacity 
                style={styles.personaleDetailsTouchableOpacity}
                onPress={() => {
                    utils.navigateToPersonalDetailsPage(props.navigation)
                }}
            >
                <CustomText style={styles.titles}>Personal details</CustomText>
                <Image
                    source={images.enterColorBrand}
                    style={styles.userProfileEnter}
                />
            </TouchableOpacity>
            <View style={styles.profileView}>
                <CustomText style={styles.colorText}>Name</CustomText>
                <CustomText>Siegfred Madeghe</CustomText>
            </View>
            <View style={styles.profileView}>
                <CustomText style={styles.colorText}>Email</CustomText>
                <CustomText>sfs@gmail.com</CustomText>
            </View>
            <View style={styles.profileView}>
                <CustomText style={styles.colorText}>Phone number</CustomText>
                <CustomText>+255-713-481-777</CustomText>
            </View>
            <View style={styles.profileView}>
                <CustomText style={styles.colorText}>Address</CustomText>
                <CustomText
                    style={styles.pesronalDetailsAddressText}
                    numberOfLines={1}
                >5590 Farmwood Dr, New Albany</CustomText>
            </View>
        </View>
    )
}

export default PersonalDetails;