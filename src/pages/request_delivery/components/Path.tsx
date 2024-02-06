import { Image, View, ViewProps } from 'react-native'

import React from 'react'
import images from '../../../shared/utils/images';
import styles from './styles'

interface PathProps {
    height: number;
    pathViewStyle: ViewProps;
} 

const Path = (props: PathProps) => {
    // Default height value if height prop is not provided
    const defaultHeight = 5;
    
    // This determines the number of dots to be displayed
    const getNumberArray = (length: number) : number[] => {
        let numberArray : number[] = [];
        for (let i = 0; i <= length; i++) {
            numberArray.push(i);
        }
        return numberArray;
    }
    
  return (
      <View style={[styles.pathView, props.pathViewStyle]}>
      <View style={styles.pathDotView} />
      {
              getNumberArray(props.height || defaultHeight).map((value) => (
            <View key={value} style={styles.pathDottedLineText} />
        ))
      }
    <Image source={images.down} style={styles.pathDownArrowImage}/>
    </View>
  )
}

export default Path