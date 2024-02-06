import { TextProps, TouchableOpacity } from 'react-native';

import CustomText from '../../../shared/components/Text';
import React from 'react';
import styles from './styles';

interface CardProps {
    size: string;
    textStyle?: TextProps;
    touchableOpacityStyle?: any;
    touchableOpacityStyleOnPress?: any;
    onPress: any,
    selectSize: true | false;
};

interface PackageDimensions {
    [key: string]: string | undefined;
}

const CUBED = '\u00B3'; // Unicode for the cube sign.

const TIMES = '\u00D7'; // Unicode for the multiplication sign.

const DIMENSIONS: PackageDimensions = {
    'Small': `120 ${TIMES} 50 ${TIMES} 30 cm${CUBED}`,
    'Medium': `120 ${TIMES} 60 ${TIMES} 40 cm${CUBED}`,
    'Large': `120 ${TIMES} 80 ${TIMES} 50 cm${CUBED}`,
    'Extra large': `120 ${TIMES} 90 ${TIMES} 60 cm${CUBED}`,
};

const Card = (props: CardProps) => {
  return (
      <TouchableOpacity
        style={
            props.selectSize ?
                  [styles.cardTouchableOpacity, styles.cardTouchableOpacityOnPress, props.touchableOpacityStyle]
            :
                [styles.cardTouchableOpacity, props.touchableOpacityStyle]
        }
        activeOpacity={.6}
          onPress={() => { props.onPress()}}>
        <CustomText
            style={
                props.selectSize ?
                      {...styles.cardTitleText, ...styles.cardTitleTextOnPress}
                :
                      styles.cardTitleText
            }
        >
            {props.size}
        </CustomText>
        <CustomText 
            style={
                props.selectSize ?
                      {...styles.cardDimensionsText, ...styles.cardDimensionsTextOnPress}
                :
                      styles.cardDimensionsText
            }
        >
            { DIMENSIONS[props.size] }
        </CustomText>
   </TouchableOpacity>
  )
}

export default Card