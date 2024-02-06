import {
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';

import styles from './style';

interface InputProps {
  title: string;
  isSecureText?: true | false;
  showSecureTextOnFocus?: true | false;
}

const showInputValue = (
  inputValue: string,
  isSecureText?: true | false,
  showSecureTextOnFocus?: true | false,
): string => {
  if ((isSecureText && inputValue) || showSecureTextOnFocus) {
    let secureText = '';
    for (let i = 0; i < inputValue.length; i++) {
      secureText += '*';
    }
    return secureText;
  }
  return inputValue;
};

const Input = (props: InputProps) => {
  const inputRef = useRef<TextInput | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  return (
    <KeyboardAvoidingView style={styles.view}>
      {isFocused ? (
        <View style={styles.whenOnFocus}>
          <Text style={styles.text}>{props.title}</Text>
          <TextInput
            style={styles.textInput}
            ref={inputRef}
            onLayout={() => {
              inputRef.current?.focus();
            }}
            onEndEditing={() => {
              setIsFocused(false);
            }}
            onChangeText={text => setInputValue(text)}
            value={inputValue}
            secureTextEntry={props.isSecureText && !props.showSecureTextOnFocus}
            selectionColor={'black'}
          />
        </View>
      ) : (
        <Pressable
          style={styles.whenBlur}
          onPress={() => {
            setIsFocused(true);
          }}>
          <Text style={[styles.whenBlur]}>
            {showInputValue(
              inputValue,
              props.isSecureText,
              props.showSecureTextOnFocus,
            ) || props.title}
          </Text>
        </Pressable>
      )}
    </KeyboardAvoidingView>
  );
};

export default Input;
