import {Image, View, ViewProps} from 'react-native';
import React, {useState} from 'react';

import {Picker} from 'react-native-form-component';
import images from '../../../shared/utils/images';
import styles from './style';

interface PickerProps {
  id: number | string;
  placeholder: string;
  items?: any[]; // [{ label: '', value: '' }]
  pickerViewStyle?: ViewProps | {};
  pickerButtonStyle?: object;
  pickerIconWrapperStyle?: object;
  pickerSelectedValueStyle?: object;
}
export default (props: PickerProps) => {
  const [userType, setUserType] = useState('');

  return (
    <View style={[styles.view, props.pickerViewStyle]}>
      <Picker
        key={props.id}
        items={props.items}
        placeholder={props.placeholder}
        selectedValue={userType}
        onSelection={item => setUserType(item.value)}
        selectedValueStyle={[styles.selectedValueStyle, props.pickerSelectedValueStyle]}
        buttonStyle={[styles.buttonStyle, props.pickerButtonStyle]}
        iconWrapperStyle={[styles.iconWrapper, props.pickerIconWrapperStyle]}
        pickerIcon={<Image source={images.dropdown} style={styles.picker} />}
      />
    </View>
  );
};
