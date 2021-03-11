import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartScreen from './screens/StartScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guessing App"/>
      <StartScreen />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
