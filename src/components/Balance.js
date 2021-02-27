import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  balance: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  textos: {
    fontFamily: 'Roboto-Regular',
    fontWeight: 'bold',
    marginTop: 9,
  },
  valor: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: -2,
    marginLeft: -30,
  },
});
const Balance = () => {
  return (
    <>
      <View style={styles.balance}>
        <Text style={styles.textos}>TU BALANCE</Text>
        <Text style={styles.valor}>$0.00</Text>
      </View>
    </>
  );
};
export default Balance;
