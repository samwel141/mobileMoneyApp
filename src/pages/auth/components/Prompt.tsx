import {Text, TouchableOpacity, View} from 'react-native';

import React from 'react';
import styles from './style';

interface PromptProps {
  prompt: string;
  action: string;
  onPress?: Function | undefined;
}
const Prompt = (props: PromptProps) => {
  return (
    <View style={styles.viewPrompt}>
      <Text style={styles.textPrompt}>{props.prompt}</Text>
      <TouchableOpacity
        style={styles.touchableOpacityPrompt}
        onPress={() => {
          console.log('pressed');
        }}
        activeOpacity={0.5}>
        <Text style={styles.touchableOpacityTextPrompt}>{props.action}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Prompt;
