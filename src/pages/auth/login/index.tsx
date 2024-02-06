import Button from '../components/Button';
import Input from '../components/Input';
import Prompt from '../components/Prompt';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native-paper';
import {View} from 'react-native';
import styles from './style';

const Login = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.view1}>
        <View style={styles.view3}>
          <View style={styles.view4} />
        </View>
      </View>
      <View style={styles.view2}>
        <Text style={styles.title}>Unpack</Text>
        <Input title="Username" />
        <Input title="Password" isSecureText={true} />
        <Button title="Login" onPress={() => console.log('login')} />
        <Prompt prompt="Forgot password?" action="Request" />
        <Prompt prompt="New user?" action="Sign Up" />
      </View>
    </SafeAreaView>
  );
};

export default Login;
