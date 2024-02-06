import CustomText from '../../shared/components/Text'
import Input from './components/Input'
import React from 'react'
import { View } from 'react-native'
import styles from './styles'

const Notes = () => {
    return (
        <View style={styles.notesView}>
            <CustomText style={styles.quantityTitleText}>Notes</CustomText>
            <CustomText style={styles.quantityTitleSummaryText}>Any instruction about your delivery? Let us know below.</CustomText>
            <Input 
            textInputOnFocusStyle={styles.notesTextInput}
            textInputStyle={styles.notesTextInput}
             multiline={true} onEndTextEditing={() => {}}/>
        </View>
    )
}

export default Notes;