import CustomText from '../../shared/components/Text';
import Input from './components/Input';
import Path from './components/Path';
import React from 'react'
import { View } from 'react-native'
import styles from './styles';

const Destination = () => {
  /* To-do: We need to add redux and replace console.log with appropriate function */
  return (
      <View style={styles.destinationView}>
        <CustomText style={styles.componentTitleText}>Destination</CustomText>
        <View style={styles.destinationContainerView}>
          <View style={styles.destinationInputsContainerView}>
            <View>
              <CustomText style={styles.destinationInputLabelText}>Pickup Location</CustomText>
            <Input multiline={false} onEndTextEditing={console.log} />
            </View>
            <View>
              <CustomText style={styles.destinationInputLabelText}>Delivery Location</CustomText>
            <Input multiline={false} onEndTextEditing={console.log} /> 
            </View>
          </View>
          <Path height={7} pathViewStyle={styles.destinationPathView} />
        </View>

      </View>
  )
}

export default Destination;