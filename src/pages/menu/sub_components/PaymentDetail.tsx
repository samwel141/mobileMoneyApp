/* eslint-disable react-native/no-inline-styles */
import { Image, TouchableOpacity, View } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import React, { useState } from 'react';

import Button from '../../request_delivery/components/Button'
import CustomText from '../../../shared/components/Text'
import Input from '../../request_delivery/components/Input'
import images from '../../../shared/utils/images';
import styles from './styles';

const PaymentDetail = (props: any) => {
    const [showEditButton, setShowEditButton] = useState(true);
  return (
      <Portal>
          <Modal
              dismissable={true}
              visible={props.visible}
              contentContainerStyle={styles.paymentDetailsModal}
          >
              <View style={styles.paymentDetailsContainerView}>
                  <View style={styles.paymentDetailsHeadingView}>
                      <CustomText style={styles.paymentDetailsHeadingText}>Payment details</CustomText>
                      {
                          showEditButton ?
                              <TouchableOpacity
                                  onPress={() => { setShowEditButton(false) }}
                              >
                                  <Image style={styles.editImage} source={images.edit} />
                              </TouchableOpacity>
                              :
                              <></>
                      }
                  </View>
                  <CustomText style={styles.personalDetailsText}>Cardholder's name</CustomText>
                  <Input
                      secureTextEntry
                      multiline={false}
                      onEndTextEditing={console.log}
                      textInputStyle={styles.personalDetailsInput}
                      textInputOnFocusStyle={styles.personalDetailsInput}
                  />
                  <CustomText style={styles.personalDetailsText}>Card number</CustomText>
                  <Input
                      secureTextEntry
                      multiline={false}
                      onEndTextEditing={console.log}
                      textInputStyle={styles.personalDetailsInput}
                      textInputOnFocusStyle={styles.personalDetailsInput}
                  />
                  <CustomText style={styles.personalDetailsText}>Country</CustomText>
                  <Input
                      secureTextEntry
                      multiline={false}
                      onEndTextEditing={console.log}
                      textInputStyle={styles.personalDetailsInput}
                      textInputOnFocusStyle={styles.personalDetailsInput}
                  />
                  <View style={styles.paymentDetailsRowView}>
                      <View style={{width: '45%'}}>
                          <CustomText style={styles.personalDetailsText}>Expiration date</CustomText>
                          <Input
                              secureTextEntry
                              multiline={false}
                              onEndTextEditing={console.log}
                              textInputStyle={styles.personalDetailsInput}
                              textInputOnFocusStyle={styles.personalDetailsInput}
                          />
                      </View>
                      <View style={{width: '45%'}}>
                          <CustomText style={styles.personalDetailsText}>Zip code</CustomText>
                          <Input
                              secureTextEntry
                              multiline={false}
                              onEndTextEditing={console.log}
                              textInputStyle={styles.personalDetailsInput}
                              textInputOnFocusStyle={styles.personalDetailsInput}
                          />
                      </View>
                  </View>
                  {
                      !showEditButton ?
                          <Button
                              title='Save Changes'
                              onPress={() => { setShowEditButton(true) }}
                              touchableOpacityStyle={styles.paymentDetailsButton}
                              textStyle={{color: 'white'}}
                          />
                          :
                          <View style={styles.paymentDetailsRowView}>
                              <Button
                                  title='Close'
                                  onPress={() => { props.onPress(false) }}
                                  touchableOpacityStyle={
                                    [
                                        styles.paymentDetailsButton, 
                                        { width: '30%' }
                                    ]
                                  }
                                  />
                              <Button
                                  title='Select Payment'
                                  onPress={() => { console.log('Selected') }}
                                  touchableOpacityStyle={
                                    [
                                        styles.paymentDetailsButton, 
                                        { width: '63%', backgroundColor: 'green' }
                                    ]
                                  }
                                  textStyle={{ color: 'white' }}
                              />
                            </View>
                  }
              </View>
          </Modal>
      </Portal>
  )
}

export default PaymentDetail;