import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Image} from 'react-native';
import Home from './screens/Home';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c3e50',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    marginTop: 50,
    borderRadius: 22,
    position: 'relative',
  }
});
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.imagen}
          source={require('./assets/images/finanzas1.png')}
        />
        <Home />
      </SafeAreaView>
    </>
  );
};

export default App;
