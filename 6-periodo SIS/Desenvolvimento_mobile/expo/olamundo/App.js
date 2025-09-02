import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Simples from './src/Simples';
import Aluno from './src/Aluno';
import Media from './src/expressao';
import Viagem, { calcularPreco } from './src/Viagem';

export default class meuApp extends Component {
  render() {
    return (

      <View style={styles.container}>
        <Viagem distancia='100' precoEtanol='4.0' precoGasolina={4.0} />


        <Aluno nome="Aluno1" nota1="75" nota2="85"></Aluno>
        <Simples texto="primeiro" preco="20,00" />
        <Simples texto="segundo" preco="1,99" />
        <Simples texto="terceiro" preco="50,00" />


        
        <View style={styles.box}>
          <Text style={styles.facul}>Libertas Faculdades Integradas </Text>
          <Text style={styles.curso}>Curso de Sistemas de Informação </Text>
          <Text style={styles.curso}>Disciplina de Desenvolvimento para Dispositivos Móveis </Text>
          <Text style={styles.disc}>Aluno: Thiagão Marcolino</Text>
        </View>

        <Media numero={8} />
        <View style={styles.mediaContainer}>
          <Text style={styles.mediaTitulo}>Exemplos de Média:</Text>
          <Text>Nota 1: 8, Nota 2: 6</Text>
          <Text>Resultado: {((8 + 6) / 2).toFixed(1)} - {(8 + 6) / 2 >= 7 ? 'Aprovado' : 'Reprovado'}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({


  box: {
    borderWidth: 4,
    borderColor: "red",
    padding: 10,
  },

  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    padding: 10

  },
  facul: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18
  },
  curso: {
    color: "blue",
    fontWeight: "bold",
    fontStyle: "italic"
  },
  disc: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Courier New"
  },
  mediaContainer: {
    borderWidth: 2,
    borderColor: "green",
    borderStyle: "solid",
    margin: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#f0f8ff"
  },
  mediaTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
    color: "#2c3e50"
  }
});