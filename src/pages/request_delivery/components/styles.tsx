import { COLORS, DEVICE } from '../../../shared/utils/constants';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    /* Styles for component: TextInput */
    textInput: {
        height: 28,
        backgroundColor: '#e5e7eb',
        borderRadius: 18,
        padding: 0,
        paddingLeft: 10
    },
    textInputOnFocus: {
        borderColor: COLORS.brand,
        borderWidth: 1,
        backgroundColor: 'white'
    },
    
    /* Styles for component: Button */
    buttonTouchableOpacity: {
        height: 38,
        width: '60%',
        backgroundColor: COLORS.brand,
        borderRadius: 18, // an alternative value is 8 for a squarely feel--discuss with Joram.
        padding: 0,
        justifyContent: 'center',
        alignItems:'center'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: DEVICE.fontScale * 16
    },
    /* Styles for component: Card */
    cardTouchableOpacity: {
        height: DEVICE.width * .23,
        width: DEVICE.width * .435,
        backgroundColor: '#e5e7eb',//'#e6e1e2',
        borderRadius: 18,
        padding: 10,
        marginTop: 10
    },
    cardTitleText: {
        marginBottom: 8,
        fontSize: DEVICE.fontScale * 16,
        color: COLORS.primaryGrey
    },
    cardTitleTextOnPress: {
        color: COLORS.brand
    },
    cardDimensionsText: {
        marginBottom: 4,
        fontSize: DEVICE.fontScale * 13,
        color: COLORS.primaryGrey,
    },
    cardDimensionsTextOnPress: {
        color: 'black',
    },
    cardTouchableOpacityOnPress: {
        borderWidth: 1,
        borderColor: COLORS.brand,
        backgroundColor: 'white',
        margin: 0
    },
    /* Styles for component: Path */
    pathView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '5%'
    },
    pathDotView: {
        backgroundColor: COLORS.brand,
        height: DEVICE.width * .025,
        width: DEVICE.width * .025,
        borderRadius: DEVICE.width * .025 * .5,
    },
    pathDottedLineText: {
        backgroundColor: COLORS.brand,
        height: DEVICE.width * .0055,
        width: DEVICE.width * .0055,
        borderRadius: DEVICE.width * .0055 * .5,
        marginTop: 4,
    },
    pathDownArrowImage: {
        height: DEVICE.width * .045,
        width: DEVICE.width * .035,
    }
});

export default styles;
