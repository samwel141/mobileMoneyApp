import Button from '../../request_delivery/components/Button';
import { DEVICE } from '../../../shared/utils/constants';
import QrCodeMask from 'react-native-qrcode-mask';
import { RNCamera } from 'react-native-camera';
import React from 'react';
import { View } from 'react-native'
import styles from './styles';

interface ScannerProps {
    onPressButtonCloseScanner?: any;
}
const Scanner = (props: ScannerProps) => {
  return (
      <View style={styles.scannerContainerView}>
          <RNCamera 
            captureAudio={false}
            style={styles.scannerCamera}
          >
              <QrCodeMask
                  lineColor='green'
                  lineDirection='vertical'
                  height={DEVICE.width * .70}
                  width={DEVICE.width * .70}
                  edgeColor='#ff9147'
                  edgeBorderWidth={5}
                  topTitle=' '
                  bottomTitle='Put the QR Code into the box to scan'
                  overlayOpacity={.5}
                  lineSize='90%'
                  lineAnimationDuration={2000}
                  viewBottomTitleStyle={styles.scannerBottomTitleView}
              />
          </RNCamera>
          <Button 
              touchableOpacityStyle={styles.scannerButtonTouchableOpacity}
              title='Close Scanner'
              onPress={props.onPressButtonCloseScanner}
          />
      </View>
  )
}

export default Scanner;