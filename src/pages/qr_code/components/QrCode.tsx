import AppBar from '../../../shared/components/AppBar';
import Button from '../../request_delivery/components/Button';
import CustomText from '../../../shared/components/Text';
import QRCode from 'react-native-qrcode-svg';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import utils from '../../../shared/navigation/utils';
interface QrCodeProps {
    value?: string | undefined;
    size?: number;
    getRef?: any;
    color?: string;
    backgroundColor?: string;
    onPressButtonOpenScanner?: any;
    navigation: any
}
const QrCode = (props: QrCodeProps) => {
    return (
        <View style={styles.qrCodeContainerView}>
            <AppBar
                title='Scanner & QR Code'
                safeAreaViewStyle={styles.qrCodeAppBarSafeAreaView}
                onPress={() => {
                    utils.navigateToHomePage(props.navigation);
                }}
            />
            <View style={styles.qrCodeContentsView}>
                <View style={styles.qrcodeInfoView}>
                    <View style={styles.qrCodeImageView}>
                        <QRCode
                            value={props.value}
                            size={props.size || 140}
                            color={props.color || 'black'}
                            backgroundColor={props.backgroundColor || 'white'}
                            getRef={props.getRef}
                        />
                        <CustomText style={styles.qrCodePromptText}>Scan to Verify</CustomText>
                    </View>
                    <CustomText style={styles.qrCodeInfoText}>
                        This QR Code contains encrypted information about your delivery, if any. It verifies your shipper for quality handling and package safety. Scan another user's QR Code by clicking the button below.
                    </CustomText>
                </View>
                <Button
                    title='Open Scanner'
                    touchableOpacityStyle={styles.qrCodeButtonTouchableOpacity}
                    onPress={props.onPressButtonOpenScanner}
                />
        </View>
        </View>
    )
};

export default QrCode;

