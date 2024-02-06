import { Image, TouchableOpacity, View } from 'react-native'

import CustomText from '../../../shared/components/Text';
import React from 'react'
import images from '../../../shared/utils/images';
import styles from './styles';
import utils from '../../../shared/navigation/utils';

const Legal = (props: any) => {
    return (
        <View
            style={styles.userProfileContainerView}
        >
            <TouchableOpacity
                style={styles.termsAndConditionTouchableOpacity}
                activeOpacity={.3}
                onPress={() => {
                    utils.navigateToLegalPage(props.navigation)
                }}
            >
                <CustomText style={styles.titles}>Legal</CustomText>
                <Image
                    source={images.enterColorBrand}
                    style={styles.userProfileEnter}
                />
            </TouchableOpacity>
            {
                [
                    'Terms and conditions',
                    'Privacy policy',
                    'Return policy',
                ].map((item) =>
                    <View
                        key={`${item}`}
                        style={styles.faqItemView}
                    >
                        <CustomText style={styles.faqItemText}>{item}</CustomText>
                    </View>
                )
            }
        </View>
    )
}

export default Legal;