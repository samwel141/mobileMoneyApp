import CustomText from '../../shared/components/Text'
import Input from './components/Input'
import React from 'react'
import { View } from 'react-native'
import styles from './styles'

const Quantity = () => {
  return (
      <View style={styles.quantityView}>
          <CustomText style={styles.quantityTitleText}>Quantity</CustomText>
          <CustomText style={styles.quantityTitleSummaryText}>Specify the number of packages you are delivering</CustomText>
      <Input multiline={false} onEndTextEditing={console.log} />
      </View>
  )
}

export default Quantity