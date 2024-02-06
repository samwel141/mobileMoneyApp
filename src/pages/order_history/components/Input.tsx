import { Image, TextInput, View, ViewProps } from 'react-native'

import React from 'react'
import images from '../../../shared/utils/images'
import styles from './styles'

interface InputProps {
  inputContainerViewStyle?: ViewProps | {};
} 
const Input = (props: InputProps) => {
  return (
    <View style={[styles.inputView, props.inputContainerViewStyle]}>
        <Image source={images.search} style={styles.inputImage}/>
        <TextInput
            style={styles.inputTextInput}
            placeholder='Enter order number'
        />
    </View>
  )
}

export default Input