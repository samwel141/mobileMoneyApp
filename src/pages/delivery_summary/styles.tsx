import { COLORS, DEVICE } from '../../shared/utils/constants';

import { StyleSheet } from 'react-native';

/* 
    To-do: There are a couple or redudant styles.
    See how you can put them to become common.
*/
const styles = StyleSheet.create({
    /* Styles for component: Type */
    deliveryType: {
        borderBottomWidth: 0,
        paddingBottom: 1
    },
    deliveryAddress: {
        paddingBottom: 10,
        borderBottomWidth: 1.5,
        borderBottomColor: '#DDE6ED'
    },
    deliveryReceiver: {
        marginTop: 10,
        paddingBottom: 10,
        borderBottomColor: '#DDE6ED'
    },
    deliveryDateTitle: {
        marginTop: 10,
        paddingBottom: 0,
        borderBottomColor: 'transparent'
    },
    deliveryDate: {
        marginTop: 5,
        paddingBottom: 10,
        borderBottomColor: '#DDE6ED'
    },
    deliveryDateText: {
        color: 'black'
    },
    deliveryCost: {
        marginTop: 15,
        borderBottomColor: 'transparent',
        borderBottomWidth: 0,
        paddingBottom: 3
    },
    deliveryCostTitle: {
        paddingBottom: 10,
        color: COLORS.brand,
        fontSize: DEVICE.fontScale * 18,
        fontWeight: '600'
    },
    deliveryCostAmount: {
        fontSize: DEVICE.fontScale * 18,
        fontWeight: '600'
    },
    deliveryEditButton: {
        width: '35%',
        backgroundColor: COLORS.grey,
        borderRadius: 8
    },
    deliveryRequestButton: {
        width: '60%',
        backgroundColor: 'green',
        borderRadius: 8
    },
    deliveryButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 10,
        marginBottom: 12,
    },
    deliveryRequestText: {
        color: 'white',
        fontWeight: '500'
    },
    deliverySummaryTitle: { 
        width: '80%',
        fontSize: 30,
        marginBottom: 10,
        marginTop: 5,
        color: 'black'
    },
    deliverySummaryContainer: {
        width: '100%',
        alignItems: 'center',
        flex: 1,
        paddingTop: 0
    },
    deliverySummaryPageAppBar: {
        marginTop: 10
    }

});

export default styles;
