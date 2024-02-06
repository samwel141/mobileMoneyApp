import CustomText from '../../../shared/components/Text'
import React from 'react'
import { View } from 'react-native'
import styles from './styles'

interface CommonProps {
  leftText: string | null;
  rightText?: string|null ;
  commonContainerViewStyle?: any;
  commonLeftTitleTextStyle?: any;
  commonRightTitleTextStyle?: any;
}
const Common = (props: CommonProps) => {
  return (
    <View style={[styles.commonContainerView, props.commonContainerViewStyle]}>
      <CustomText
        style={{...styles.commonTitleText, ...props.commonLeftTitleTextStyle}}
      >
        {
          props.leftText
        }
      </CustomText>
      <CustomText 
        style={{...styles.commonNameText, ...props.commonRightTitleTextStyle}}
        numberOfLines={1}
      >
        {
          props.rightText
        }
      </CustomText>
    </View>
  )
}

export default Common;