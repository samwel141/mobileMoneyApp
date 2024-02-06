import { Modal, Portal } from 'react-native-paper';

import Button from '../../request_delivery/components/Button'
import CustomText from '../../../shared/components/Text'
import Input from '../../request_delivery/components/Input'
import React from 'react';
/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native';
import styles from './styles';

const AddFavoriteLocation = (props: any) => {
  return (
    <Portal>
      <Modal
        dismissable={true}
        visible={props.showModal}
        contentContainerStyle={styles.paymentDetailsModal}
      >
        <View style={styles.paymentDetailsContainerView}>
          <View style={styles.paymentDetailsHeadingView}>
            <CustomText style={styles.paymentDetailsHeadingText}>Delivery location</CustomText>
          </View>
          <CustomText style={styles.personalDetailsText}>Address</CustomText>
          <Input
            secureTextEntry
            multiline={false}
            onEndTextEditing={console.log}
            textInputStyle={styles.personalDetailsInput}
            textInputOnFocusStyle={styles.personalDetailsInput}
          />
          <CustomText style={styles.personalDetailsText}>Nickname</CustomText>
          <Input
            secureTextEntry
            multiline={false}
            onEndTextEditing={console.log}
            textInputStyle={styles.personalDetailsInput}
            textInputOnFocusStyle={styles.personalDetailsInput}
          />
              <View style={styles.paymentDetailsRowView}>
                <Button
                  title='Cancel'
                  onPress={() => { props.onCancel() }}
                  touchableOpacityStyle={
                    [
                      styles.paymentDetailsButton,
                      { width: '30%' }
                    ]
                  }
                />
                <Button
                  title='Save Location'
              onPress={() => { console.log('Selected'); props.onCancel() }}
                  touchableOpacityStyle={
                    [
                      styles.paymentDetailsButton,
                      { width: '63%', backgroundColor: 'green' }
                    ]
                  }
                  textStyle={{ color: 'white' }}
                />
              </View>
        </View>
      </Modal>
    </Portal>
  )
}

export default AddFavoriteLocation;