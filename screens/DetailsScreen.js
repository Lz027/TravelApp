import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Activities</Text>
      <Image source={require('../assets/hiking.jpg')} style={styles.activityImage} />
      <Text>Hiking Adventure</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  activityImage: {
    width: 200,
    height: 200,
    margin: 10,
  },
});

export default DetailsScreen;