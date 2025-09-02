import React, { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';

export default function Churrasco() {
  const [Homem, setHomem] = useState('');
  const [Mulher, setMulher] = useState('');

  const [HomemBebida, setHomemBebida] = useState('');
  const [MulherBebida, setMulherBebida] = useState('');
  const [Refrigerante, setRefrigerante] = useState('');
  const [Carne, setCarne] = useState('');

  function calcular() {
    let h = parseFloat(Homem) || 0;
    let m = parseFloat(Mulher) || 0;

    setHomemBebida((h * 2.0).toFixed(1));
    setMulherBebida((m * 1.2).toFixed(1));
    setRefrigerante((h + m * 0.8).toFixed(1));
    setCarne((h + m * 0.3).toFixed(1));
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={Homem}
        onChangeText={setHomem}
        style={styles.TextInput}
        placeholder="Quantidade de Homens"
        keyboardType="numeric"
      />
      <TextInput
        value={Mulher}
        onChangeText={setMulher}
        style={styles.TextInput}
        placeholder="Quantidade de Mulheres"
        keyboardType="numeric"
      />
      <Button title="Calcular" onPress={calcular} />

      <Text style={styles.result}>Bebida (Homens): {HomemBebida}</Text>
      <Text style={styles.result}>Bebida (Mulheres): {MulherBebida}</Text>
      <Text style={styles.result}>Refrigerante: {Refrigerante}</Text>
      <Text style={styles.result}>Carne: {Carne}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5fcff',
  },
  TextInput: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  result: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
