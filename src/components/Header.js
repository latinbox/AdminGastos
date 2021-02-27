import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',

  },
  textstyle: {
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    fontSize: 15,
    marginTop: 40,
  },
});
const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>Administrador de Costos</Text>
    </View>
  );
};

export default Header;
