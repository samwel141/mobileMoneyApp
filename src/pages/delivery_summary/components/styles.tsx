import { COLORS, DEVICE } from '../../../shared/utils/constants';

import { StyleSheet } from 'react-native';

/* 
    To-do: There are a couple or redudant styles.
    See how you can put them to become common.
*/
const styles = StyleSheet.create({
    /* Styles for component: Type */
    commonContainerView :{
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingBottom: 10,
        borderBottomColor: COLORS.grey,
        borderBottomWidth: 1.5,
        width: '80%',
        marginTop: 10,
    },
    commonTitleText: {
        color: COLORS.grey,
        fontSize: DEVICE.fontScale * 16,
        width: '50%'
    },
    commonNameText: {
        textAlign: 'right',
        fontSize: DEVICE.fontScale * 16,
        width: '45%'
    },

     /* Styles for component: Type */
    destinationContainerView: {
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 10,
    },
    destinationTitles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 5,
    },
    destinationTitleText: {
        color: COLORS.grey,
        fontSize: DEVICE.fontScale * 16
    },
    destinationPickUpAddressText: {
        width: 125,
        fontSize: DEVICE.fontScale * 14,
    },
    destinationDropOffTitleText: {
        textAlign: 'right',
        fontSize: DEVICE.fontScale * 14,
        width: 125,
    },
    destinationDropOffAddressText: {
        textAlign: 'right',
        fontSize: DEVICE.fontScale * 14,
        width: 125,
        
    },
    destinationDirectionImage: {
        height: 20,
        width: 20
    },
    destinationAddressView: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

});

export default styles;
