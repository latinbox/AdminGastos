import React, {Component} from 'react';
import {Button, Text, ScrollView, StyleSheet} from 'react-native';
import Header from '../components/Header';
import Balance from '../components/Balance';
import IncomeExpenses from '../components/IncomeExpenses';

const styles = StyleSheet.create({
  home: {
    marginTop: 20,
    backgroundColor: '#E9E4F0',
    borderRadius: 22,
    width: 360,
    height: 90,
    marginBottom: 100,
  },
});

function Home() {
  return (
    <ScrollView style={styles.home}>
      <Header />
      <Balance />
      <IncomeExpenses />
    </ScrollView>
  );
};
export default Home;
