import {FlatList, View} from 'react-native';

import Button from '../components/Button';
import Input from '../components/Input';
import Picker from '../components/Picker';
import Prompt from '../components/Prompt';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native-paper';
import styles from './style';

const USER_TYPES = [
  { label: 'Consumer', value: 'consumer' },
  { label: 'Vendor', value: 'vendor' },
  { label: 'Driver', value: 'driver' },
  { label: 'CPP', value: 'cpp' },
];

const SignUp = () => {
  return (
    <SafeAreaView
      style={styles.safeAreaView}
      edges={['left', 'right', 'bottom']}>
      <View style={styles.view1} />
      <View style={styles.view2}>
        <Text style={styles.title}>Sign Up</Text>
        <FlatList
          data={[0]}
          showsVerticalScrollIndicator={true}
          renderItem={() => (
            <View style={styles.flatListView}>
              <Input title="Username" />
              <Input title="Phone number" />
              <Input title="Email" />
              <Picker id={1} placeholder="Account type" items={USER_TYPES} />
              <Input title="Password" showSecureTextOnFocus={true} />
              <Input title="Confirm password" showSecureTextOnFocus={true} />
              <Button title="Sign Up" onPress={() => console.log('login')} />
              <Prompt prompt="Have an account?" action="Login" />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
