import {KeyboardAvoidingView, TextInput, TextInputProps} from 'react-native';
import React, {useState} from 'react';

import styles from './styles';

/* 
    This component it in essence unnecessary now; however, for consistency
    and potential posssibility of expanding its functionalities in the future,
    we will leave it as is.
*/

interface InputProps {
  multiline?: true | false;
  onEndTextEditing(inputText: string): void;
  textInputStyle?: TextInputProps | {};
  textInputOnFocusStyle?: TextInputProps | {};
  placeholder?: string;
  onInputFocusing?(): void;
  secureTextEntry?: true | false
}
const Input = (props: InputProps) => {
  const [focused, setFocused] = useState(false);
  const [inputText, setInputText] = useState('');
  return (
    <KeyboardAvoidingView>
      <TextInput
        style={
          focused ?
            [styles.textInput, styles.textInputOnFocus, props.textInputOnFocusStyle]
            :
            [styles.textInput, props.textInputStyle]
        }
        multiline={props.multiline}
        onFocus={() => {
          setFocused(true);
          props.onInputFocusing ? props.onInputFocusing() : () => { };
        }}
        onEndEditing={() => {
          setFocused(false);
          props.onEndTextEditing(inputText);
        }}
        onChangeText={(text) => { setInputText(text) }}
        value={inputText}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry || false}
      />
    </KeyboardAvoidingView>
  );
};

export default Input;
