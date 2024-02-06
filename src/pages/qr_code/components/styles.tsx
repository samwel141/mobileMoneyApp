import { COLORS, DEVICE } from '../../../shared/utils/constants';

import { StyleSheet } from 'react-native';

/* 
    To-do: There are a couple or redudant styles.
    See how you can put them to become common.
*/
const styles = StyleSheet.create({
    /* Styles for component: QrCode */
    qrCodeContainerView: {
        flex: 1,
        backgroundColor: 'white'
    },
    qrcodeInfoView: {
        alignItems: 'center',
        marginTop: 50,
        width: '95%',
    },
    qrCodeInfoText: {
        color: 'grey',
        backgroundColor: 'white',
        width: '95%',
        textAlign: 'justify',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 25
    },
    qrCodeImageView: {
        backgroundColor: 'white',
        alignItems: 'center',
        width: '55%',
        padding: 10,
        height: 210,
        justifyContent: 'center',
        borderColor: COLORS.brand,
        borderWidth: 2.5,
        borderRadius: 8,
        paddingTop: 20
    },
    qrCodePromptText: {
        fontSize: 20,
        marginTop: 10,
        color: COLORS.primaryGrey
    },
    qrCodeContentsView: {
        alignItems: 'center'
    },
    qrCodeAppBarSafeAreaView: {
        marginTop: 20,
        backgroundColor: 'white',
    },
    qrCodeButtonTouchableOpacity: {
        borderRadius: 8,
        width: '80%',
        marginTop: 25 
    },
    
    /* Styles for component: Scanner */
    scannerCamera: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        flex: 1,
        width: '100%'
    },
    scannerContainerView: {
        flex: 1
    },
    scannerBottomTitleView: {
        marginTop: 15
    },
    scannerButtonTouchableOpacity: { 
        position: 'absolute',
        bottom: DEVICE.height * .075,
        width: DEVICE.width * .7,
        left: DEVICE.width * .15
    }
});

export default styles;
