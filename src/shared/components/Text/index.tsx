import React from 'react'
import { Text } from 'react-native';
import styles from './styles';
const CustomText = (props: any) => {
    return (
        <Text {...props}  style={{ ...styles.textColor, ...props.style, ...styles.textFontFamily }}>
            {
                props.children
            }
        </Text>
    )
}

export default CustomText;