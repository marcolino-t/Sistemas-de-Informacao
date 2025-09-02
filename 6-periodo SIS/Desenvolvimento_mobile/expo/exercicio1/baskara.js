import React, { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';

export default function Baskara() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [delta, setDelta] = useState(null);
  const [x1, setX1] = useState('');
  const [x2, setX2] = useState('');

  function calcular() {
    let d = parseFloat(b) * parseFloat(b) - (4 * parseFloat(a) * parseFloat(c));
    setDelta(d);

    if (d < 0) {
      setX1("Não possui raízes reais");
      setX2("");
    } else if (d === 0) {
      let raiz = (-parseFloat(b) / (2 * parseFloat(a))).toFixed(1);
      setX1(raiz);
      setX2("Única raiz");
    } else {
      setX1(((-parseFloat(b) + Math.sqrt(d)) / (2 * parseFloat(a))).toFixed(1));
      setX2(((-parseFloat(b) - Math.sqrt(d)) / (2 * parseFloat(a))).toFixed(1));
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={a}
        onChangeText={setA}
        style={styles.TextInput}
        placeholder="Digite o valor de A"
        keyboardType="numeric"
      />
      <TextInput
        value={b}
        onChangeText={setB}
        style={styles.TextInput}
        placeholder="Digite o valor de B"
        keyboardType="numeric"
      />
      <TextInput
        value={c}
        onChangeText={setC}
        style={styles.TextInput}
        placeholder="Digite o valor de C"
        keyboardType="numeric"
      />
      <Button title="Calcular" onPress={calcular} />

      <Text style={styles.result}>Delta: {delta}</Text>
      <Text style={styles.result}>X1: {x1}</Text>
      <Text style={styles.result}>X2: {x2}</Text>
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
    borderColor: 'gray',
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
