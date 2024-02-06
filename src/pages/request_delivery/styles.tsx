import { COLORS, DEVICE } from '../../shared/utils/constants';

import { StyleSheet } from 'react-native';

/* 
    To-do: There are a couple or redudant styles.
    See how you can put them to become common.
*/
const styles = StyleSheet.create({
    /* Styles constant for all components */
    shadowContainer: {
        backgroundColor: '#e5e7eb',
        borderRadius: 18,
        padding: 0,
    },
    componentTitleText: {
        color: COLORS.darkGrey,
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: DEVICE.fontScale * 17,

    },
    /* Styles for component: AppBar */
    appBarSafeAreaView: {
       marginTop: 15,
       backgroundColor: 'white'
    },
    
    /* Styles for component: Destination */
    destinationView: {
        padding: 10,
        borderRadius: 8,
        backgroundColor: 'white',
        marginTop: 10,
        width: '95%'
    },
    
    destinationInputLabelText: {
        color: COLORS.primaryGrey,
        fontWeight: '400',
        marginBottom: 8,
        marginTop: 10,
        fontSize: DEVICE.fontScale * 12,
    },
    destinationPathView: {
        transform: [
            {
                translateY: 14
            }
        ]
    },
    destinationContainerView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    destinationInputsContainerView: {
        width: '92%',
        paddingBottom: 10,
    },
    
    /* Styles for component: PackageSize */
    packageSizeCardView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingBottom: 10
    },
    packageSizeContainerView: {
        padding: 10,
        borderRadius: 8,
        backgroundColor: 'white',
        marginTop: 10,
        width: '95%',
        paddingBottom: 0
    },
    /* Styles for component: Quantity */
    quantityView:{
        backgroundColor: 'white',
        width: '95%',
        marginTop: 10,
        borderRadius: 8,
        padding: 10,
        paddingBottom: 15
    },
    quantityTitleText: {
        color: COLORS.darkGrey,
        fontWeight: 'bold',
        fontSize: DEVICE.fontScale * 17,
    },
    quantityTitleSummaryText: {
        color: COLORS.primaryGrey,
        marginBottom: 15,
        marginTop: 4,
        fontSize: DEVICE.fontScale * 12,
    },
    
    /* Styles for component: Type */
     cardTouchableOpacity: {
         backgroundColor: '#e5e7eb',
         margin: 0,
         height: '100%',
         paddingBottom: 0
    },
    cardTouchableOpacityOnSelection: {
        margin: 0,
        height: '100%',
        paddingBottom: 0
    },
    title: {
        color: COLORS.primaryGrey,
        fontSize: DEVICE.fontScale * 15,
        
    },
    summary: {
        color: COLORS.primaryGrey,
        fontSize: DEVICE.fontScale * 12,
        width: '90%'
    },
    typeFlatlistView: { 
        backgroundColor: '#e5e7eb',
        alignItems: 'center',
        height: DEVICE.height * 1.6,
        paddingTop: 0,
    },
    typeCardView: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            height: '80%',
            width: '100%',
            marginTop: 5,
            padding: 0
    },
   typeContainerView: {
        padding: 10,
        borderRadius: 8,
        backgroundColor: 'white',
        marginTop: 10,
        width: '95%',
        paddingBottom: 0,
       height: DEVICE.height * .35
    },
    
    /* Styles for component: Notes */
    notesView: {
        backgroundColor: 'white',
        width: '95%',
        marginTop: 10,
        borderRadius: 8,
        padding: 10,
        paddingBottom: 15,
        height: '15%'
    },
    notesTextInput: {
        height: '60%',
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 5,
        // borderWidth: 1,
        // borderColor: COLORS.brand,
        // backgroundColor: 'white'
    },
    
    /* Styles for component: Button */
    buttonTouchableOpacity: { 
        width: '95%',
        marginTop: 15,
        borderRadius: 8,
        height: 45
    }
});

export default styles;
