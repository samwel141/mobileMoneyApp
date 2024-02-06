import CustomText from '../../../shared/components/Text'
import React from 'react'
import {TouchableOpacity} from 'react-native'
import styles from './styles'

interface ButtonProps {
    title?: string;
    textStyle?: any;
  touchableOpacityStyle?: any;
  onPress?: any
}
const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity 
          style={[styles.buttonTouchableOpacity, props.touchableOpacityStyle]}
      onPress={() => { props.onPress() }}
    >
          <CustomText style={{...styles.buttonText, ...props.textStyle}}>
            {
                props.title
            }
        </CustomText>
    </TouchableOpacity>
  )
}

export default Button