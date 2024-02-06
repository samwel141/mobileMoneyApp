import { Image, TouchableOpacity, View } from 'react-native'

import CustomText from '../../../shared/components/Text'
import React from 'react'
import images from '../../../shared/utils/images'
import styles from './styles'
import utils from '../../../shared/navigation/utils'

const FAQs = (props: any) => {
    return (
        <View
            style={styles.userProfileContainerView}
        >
            <TouchableOpacity
                style={styles.faqView}
                activeOpacity={.5}
                onPress={() => {
                    utils.navigateFaqsPage(props.navigation)
                }}
             >
                <CustomText style={styles.faqText}>Frequently Asked Questions</CustomText>
                    <Image
                        source={images.enterColorBrand}
                        style={styles.userProfileEnter}
                    />
            </TouchableOpacity>
            {
                [
                    'What is Unpack?',
                    'How to use it?',
                    'Where is my package?',
                    'Is it safe?'
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

export default FAQs