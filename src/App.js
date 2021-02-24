import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import Home from './screens/Home';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c3e50',
    flex: 1,
  },
});
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Home />
      </SafeAreaView>
    </>
  );
};

export default App;
