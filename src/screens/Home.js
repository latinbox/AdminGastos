import React, {Component} from 'react';
import {Button, Text, ScrollView, StyleSheet} from 'react-native';
import Header from '../components/Header';
import Balance from '../components/Balance';
import IncomeExpenses from '../components/IncomeExpenses';
import AddTransaction from '../components/AddTransaction';

const styles = StyleSheet.create({
  home: {
    marginTop: 10,
    backgroundColor: '#E9E4F0',
    borderRadius: 22,
    width: 360,
    height: 90,
    marginBottom: 40,
  },
});

function Home() {
  return (
    <ScrollView style={styles.home}>
      <Header />
      <Balance />
      <IncomeExpenses />
      <AddTransaction />
    </ScrollView>
  );
};
export default Home;
