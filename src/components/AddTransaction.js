import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -50,
  },
  title: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 3,
    width: 200,
    borderRadius: 6,
  },
  button: {
    backgroundColor: '#9c88ff',
    padding: 11,
    borderRadius: 6,
    paddingLeft: 78,
    paddingRight: 78,
    margin: 5,
  },
  texto: {
    fontSize: 12,
    color: 'black',
  },
});

const AddTransaction = () => {
  const [textstate, setText] = useState('');
  const [amount, setAmount] = useState();
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Agregar nueva transacción</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese texto"
          value={textstate}
          onChangeText={(val) => setText(val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Ingrese cantidad"
          value={amount}
          keyboardType="numeric"
          onChangeText={(val) => setAmount(val)}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.texto}>Agregar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AddTransaction;
