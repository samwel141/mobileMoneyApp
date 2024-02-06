import React, {useState} from 'react'

import Card from '../home/components/Card'
import CustomText from '../../shared/components/Text'
import { View } from 'react-native'
import images from '../../shared/utils/images'
import styles from './styles'

const Type = () => {
    const [standard, setStandardDelivery] = useState(false);
    const [express, setExpressDelivery] = useState(false);
    const selectDeliverySpeed = (deliverySpeed: string): void => {
        // Set all states to false initially then change as neeeded:
        setExpressDelivery(false);
        setStandardDelivery(false);
        
        if (deliverySpeed === 'standard') {
            setStandardDelivery(true);
        } else if (deliverySpeed === 'express') {
            setExpressDelivery(true);
        }
    }
  return (
      <View style={styles.typeContainerView}>
          <CustomText style={styles.componentTitleText}>Delivery speed</CustomText>
          <View style={styles.typeCardView}>
                  <Card
                      title={'Standard\nDelivery'}
                      summary={'Delivery takes less than 2 days'}
                      onPress={() => { selectDeliverySpeed('standard') }}
                      icon={images.standard}
                      selectSpeed={standard}
                      titleStyle={styles.title}
                      summaryStyle={styles.summary}
                      touchableOpacityStyle={styles.cardTouchableOpacity} // '#E6E6FA'
                      touchableOpacityOnSelectionStyle={styles.cardTouchableOpacityOnSelection}
                  />
                  <Card
                      title={'Express\nDelivery'}
                      summary={'Delivery takes less than 5 hours'}
                      selectSpeed={express}
                      onPress={() => { selectDeliverySpeed('express') }}
                      icon={images.express}
                      titleStyle={styles.title}
                      summaryStyle={styles.summary}
                      touchableOpacityStyle={styles.cardTouchableOpacity} // '#E6E6FA'
                      touchableOpacityOnSelectionStyle={styles.cardTouchableOpacityOnSelection}
                  />
          </View>
      </View>
  )
}

export default Type