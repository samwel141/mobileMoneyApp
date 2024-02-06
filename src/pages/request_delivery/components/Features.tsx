import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import React from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Features = () => {
  return (
    <ScrollView style={styles.container} bounces={false} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Features</Text>

      <View style={styles.featureContainer}>
        <View style={styles.featureHeader}>
          <Image
            source={require('../../assets/images/chatgptIcon.png')}
            style={styles.featureIcon}
          />
          <Text style={styles.featureTitle}>ChatGPT</Text>
        </View>

        <Text style={styles.featureDescription}>
          ChatGPT can provide you with instant and knowledgeable responses, assist you with
          creative ideas on a wide range of topics.
        </Text>
      </View>

      {/* Repeat similar structure for DALL-E and Smart AI sections */}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(60),
  },
  title: {
    fontSize: wp(6.5),
    fontWeight: 'bold',
    color: '#333',
  },
  featureContainer: {
    backgroundColor: '#6EE7C8',
    padding: 16,
    borderRadius: 12,
    marginTop: 8,
  },
  featureHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureIcon: {
    height: hp(4),
    width: hp(4),
    borderRadius: hp(2),
  },
  featureTitle: {
    fontSize: wp(4.8),
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#333',
  },
  featureDescription: {
    fontSize: wp(3.8),
    color: '#333',
    fontWeight: '600',
  },
});

export default Features;
