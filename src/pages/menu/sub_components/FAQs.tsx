import { ScrollView, View } from 'react-native'

import AppBar from '../../../shared/components/AppBar'
import Button from '../../request_delivery/components/Button'
import CustomText from '../../../shared/components/Text'
import React from 'react'
import styles from './styles'
import utils from '../../../shared/navigation/utils'

const FAQs = (props: any) => {
    const FAQ_ITEMS = [
        {
            title: 'Terms and Conditions',
            content: 'A Terms and Conditions agreement is where you let the public know the terms, rules and guidelines for using your website or mobile app. They include topics such as acceptable use, restricted behavior and limitations of liability. A Terms and Conditions agreement is where you let the public know the terms, rules and guidelines for using your website or mobile app. They include topics such as acceptable use, restricted behavior and limitations of liability.'
        },
        {
            title: 'Privacy policy',
            content: 'A privacy policy is a legal document that details how a website gathers, stores, shares, and sells data about its visitors. This data typically includes items such as a users name, address, birthday, marital status, medical history, and consumer behavior. A privacy policy is a legal document that details how a website gathers, stores, shares, and sells data about its visitors. This data typically includes items such as a users name, address, birthday, marital status, medical history, and consumer behavior'
        },
        {
            title: 'Return policy',
            content: 'A refund policy is a document that outlines the rules for getting refunds for purchased goods and services. It often details the eligibility requirements for refunds, types of refunds given, the refund timeframe, and the return process. A refund policy is a document that outlines the rules for getting refunds for purchased goods and services. It often details the eligibility requirements for refunds, types of refunds given, the refund timeframe, and the return process.'
        },

    ]
    return (
        <>
            <AppBar
                title='Frequently Asked Questions'
                safeAreaViewStyle={styles.safeAreaView}
                onPress={() => {
                    utils.navigateToMenuPage(props.navigation)
                }}
            />
            <ScrollView
                contentContainerStyle={styles.personalDetailsContainerView}
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={styles.legalContainerView}
                >
                    {
                        FAQ_ITEMS.map((item) =>
                            <View key={item.title} style={styles.legalItemView}>
                                <View style={styles.paymentDetailsHeadingView}>
                                    <CustomText style={styles.legalCustomText}>
                                        {
                                            item.title
                                        }
                                    </CustomText>
                                </View>
                                <CustomText style={styles.legalItemContent}>
                                    {
                                        item.content
                                    }
                                </CustomText>
                                <Button
                                    title='Read more'
                                    onPress={() => { console.log('first') }}
                                    touchableOpacityStyle={styles.legalItemReadMoreButtom}
                                    textStyle={styles.legalItemReadMoreButtonTitle}
                                />
                            </View>
                        )
                    }
                </View>
            </ScrollView>
        </>
    )
}

export default FAQs;