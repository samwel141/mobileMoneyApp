import { COLORS, DEVICE } from '../../shared/utils/constants';

import { StyleSheet } from 'react-native';

/* 
    To-do: There are a couple or redudant styles.
    See how you can put them to become common.
*/
const styles = StyleSheet.create({
    
    /* Styles for component: Order */
    orderHistoryPageContainerView: {
        backgroundColor: COLORS.background,
        flex: 1,
        alignItems: 'center',
        width: '100%'
    },
    orderHistoryPageAppBar: {
        backgroundColor: 'white',
        width: '100%',
        marginTop: DEVICE.type === 'android' ? 0 : 15
    },
    orderSearchAndStatusView: {
        backgroundColor: 'white',
        height: 125,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    /* Styles for component: Input */
    inputSearchContainerView: {
        marginTop: 0,
        width: '95%',
    },

    /* Styles for component: Status */
    statusContainerView: {
        width: '95%',
        marginTop: 15
    },
    
    /* Styles for component: Picker */
    pickerView: {
        paddingHorizontal: 0,
        marginBottom: 0,
    },
    pickerButton: {
        height: 30,
        borderRadius: 0,
        padding: 0,
        transform: [
            {
                translateX: 15
            }
        ],
    },
    pickerIconWrapper: {
        margin: 0
    },

    /* Styles for component: View */
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '92.5%',
        height: 30,
        marginTop: 10,
        marginBottom: 2
    },
    textStyle: {
        color: 'black',
        fontSize: 15
    }
});

export default styles;
