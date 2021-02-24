import React, {Component} from 'react';
import {Button, Text, ScrollView, StyleSheet} from 'react-native';
import Header from '../components/Header';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c3e50',
    flex: 1,
  },
});

const Home = ({}) => {
  return (
    <ScrollView style={styles.container}>
      <Header />
    </ScrollView>
  );
};
export default Home;
