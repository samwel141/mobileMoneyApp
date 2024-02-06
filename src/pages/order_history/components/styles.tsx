import { COLORS, DEVICE } from '../../../shared/utils/constants';

import { StyleSheet } from 'react-native';

/* 
    To-do: There are a couple or redudant styles.
    See how you can put them to become common.
*/
const styles = StyleSheet.create({
    /* Styles for component: Order */
    orderTouchableOpacity: {
        width: '95%',
        marginTop: 10,
        marginLeft: 10,
        flexDirection: 'row',
        height: 100,
        borderRadius: 8,
        backgroundColor: 'white',
        paddingTop: 5,
        paddingRight: 8
    },
    orderArrivalTimeView: {
        width: '25%',
        alignItems: 'center'
    },
    orderETAText: {
        fontWeight: '500',
        color: 'grey',
        fontSize: DEVICE.fontScale * 12
    },
    orderDeliveryDate: {
        color: COLORS.darkGrey,
        fontSize: DEVICE.fontScale * 8
    },
    orderETAView: {
        backgroundColor: COLORS.brand,
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        padding: 5,
        borderRadius: 8,
    },
    orderInformationView: {
        width: '75%',
        paddingTop: 6
    },
    orderNumberText: {
        fontSize: DEVICE.fontScale * 20,
        color: 'black',
        fontWeight: '500',
        width: '70%',
        paddingTop: 2
    },
    orderStatusView: {
        justifyContent: 'center',
        width: '30%',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: COLORS.teaGreen,
        height: 24
    },
    orderDeliveryView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 8
    },
    orderDeliveryPathView: {
        width: '5%',
        marginLeft: 4
    },
    orderDeliveryLocationsView: {
        width: '85%',
        justifyContent: 'space-between'
    },
    orderPickUpDropOffLocationText: {
        color: COLORS.grey,
        fontSize: DEVICE.fontScale * 13
    },
    orderProgressLineView: {
        marginTop: 10,
        backgroundColor: '#bec1c7',
        height: '5%'
    },
    orderSummaryView: {
       width: '10%',
       justifyContent: 'center',
       alignItems: 'center'
    },
    orderEnterImage: {
        height: 15,
        width: 15
    },
    orderIDAndStatusView: {
        flexDirection: 'row',
        height: '25%',
        marginBottom: 4
    },
    orderStatusText: { 
        fontSize: 10
    },
    orderProgressText: {
        marginTop: 5,
        marginBottom: 5
    },
    orderProgessLineBottomView: {
        backgroundColor: '#ff9147',
        height: '100%'
        
    },
    /* Styles for component: Input */
    inputView: {
        flexDirection: 'row',
        height: 40,
        padding: 5,
        borderRadius: 18,
        width: '95%',
        backgroundColor: '#e5e7eb',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputImage: {
        height: 25,
        width: 25,
        marginLeft: 5,
        marginRight: 5,
    },
    inputTextInput: {
        width: '85%',
        height: 25,
        padding: 0
    },

    /* Styles for component: Status */
    statusContainerView: {
        flexDirection: 'row',
        height: 40,
        borderRadius: 18,
        width: '90%',
        backgroundColor: '#e5e7eb',
        justifyContent: 'space-between',
    },
    statusPressable: { 
        width: '49%', 
        borderRadius: 18, 
        height: 40,
        justifyContent: 'center'
    },
    statusPressableOnPressed: {
        backgroundColor: COLORS.brand
    },
    statusPressableText: {
        color: COLORS.primaryGrey,
        textAlign: 'center',
    },
   statusPressableTextOnPressed: {
        color: 'black',
    }
});

export default styles;
