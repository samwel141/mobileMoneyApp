import { Pressable, View, ViewProps } from 'react-native'
import React, {useState} from 'react'

import CustomText from '../../../shared/components/Text';
import styles from './styles';

interface StatusProps {
    statusContainerViewStyle?: ViewProps | {}
} 
const Status = (props: StatusProps) => {
    const [showActive, setActiveDelivery] = useState(true);
    const [showCompleted, setCompletedDelivery] = useState(false);
    const showOrders = (status: string) : void => {
        setActiveDelivery(false);
        setCompletedDelivery(false);

        if (status === 'active') {
            setActiveDelivery(true);
        } else {
            setCompletedDelivery(true);
        }
    }
  return (
      <View style={{...styles.statusContainerView, ...props.statusContainerViewStyle}}>
        <Pressable 
            style={
                showActive ?
                    {...styles.statusPressable, ...styles.statusPressableOnPressed}
                :
                    styles.statusPressable
            }
            onPress={() => { showOrders('active') }}
        >
            <CustomText style={
                showActive ?
                    {...styles.statusPressableText, ...styles.statusPressableTextOnPressed}
                :
                    styles.statusPressableText
                }
            >
                Active
            </CustomText>
        </Pressable>
          <Pressable
            style={
                showCompleted ?
                    {...styles.statusPressable, ...styles.statusPressableOnPressed}
                :
                    styles.statusPressable
            }
            onPress={() => { showOrders('completed') }}
          >
              <CustomText style={
                showCompleted ?

                {...styles.statusPressableText, ...styles.statusPressableTextOnPressed}
                :
                styles.statusPressableText
                }
              >
                Completed
              </CustomText>
        </Pressable>
    </View>
  )
}

export default Status