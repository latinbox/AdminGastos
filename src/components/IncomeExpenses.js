import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c3e50',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginBottom: 30,
    borderRadius: 7,
    marginLeft: 77,
    marginRight: 100,
    marginTop: 15,
    height: 65,
    width: 190,
    fontWeight: 'bold',
  },
  cajas: {
    backgroundColor: 'yellow',
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',

  },
  plus: {
    color: 'green',
  },
  titulos: {
    color: '#E9E4F0',
  },
});
const IncomeExpenses = () => {
  return (
    <View style={styles.container}>
      <View styles={styles.cajas}>
        <Text style={styles.titulos}>INGRESOS</Text>
        <Icon name="plus"> $0.00</Icon>
      </View>
      <View styles={styles.cajas}>
        <Text style={styles.titulos}>GASTOS</Text>
        <Icon name="minus" styles={styles.plus}>
          {' '}
          $0.00
        </Icon>
      </View>
    </View>
  );
};
export default IncomeExpenses;
