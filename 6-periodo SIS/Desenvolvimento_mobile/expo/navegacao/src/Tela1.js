import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

export default function Tela1(props) {
  function abrirTela2() {
    props.navigation.navigate('Tela2');
  }

  function voltar() {
    props.navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Primeira Tela</Text>
      <Button title="Ir para Tela 2" onPress={abrirTela2}/>
      <Button title="Voltar" onPress={voltar}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});