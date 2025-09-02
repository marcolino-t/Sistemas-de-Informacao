import React, { Component } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import Churrasco from './churrasco';
import Baskara from './baskara';

export default class meuApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}><Churrasco /></Text>
        <Text style={styles.text}><Baskara /></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    padding: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
  },
});
