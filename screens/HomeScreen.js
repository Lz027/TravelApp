import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = () => {
  return (
    <ImageBackground 
      source={require('../assets/background.jpg')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Your Next Adventure Starts Here</Text>
        <Button title="View Details" onPress={() => console.log('Details Button Pressed')} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;