import { Text, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [dados, setDados] = useState([]);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  // 🔹 Buscar dados (GET)
  useEffect(() => {
    fetch('')
      .then((response) => response.json())
      .then((responseJson) => {
        setDados(responseJson);
      })
      .catch((error) => console.error(error));
  }, []);

  // 🔹 Inserir dados (POST)
  function inserir() {
    fetch('https://crudcrud.com/api/0d5f1f673d7e412c98172e3f0d32e167/pokemon', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ nome: nome })
    })
      .then(() => {
        // Atualiza a lista após inserir
        return fetch('https://crudcrud.com/api/0d5f1f673d7e412c98172e3f0d32e167/pokemon')
          .then((res) => res.json())
          .then((responseJson) => setDados(responseJson));
      })
      .catch((error) => console.error(error));
  }
  function listar() {
    fetch('https://crudcrud.com/api/0d5f1f673d7e412c98172e3f0d32e167/pokemon')
      .then((response) => response.json())
      .then((responseJson) => {
        setDados(responseJson);
      })
      .catch((error) => console.error(error));

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>API Remota</Text>

      <TextInput
        label="Nome:"
        value={nome}
        onChangeText={setNome}
        style={{ marginBottom: 10 }}
      />
         <TextInput
        label="Telefone:"
        value={telefone}
        onChangeText={setTelefone}
        style={{ marginBottom: 10 }}
      />
      <Button mode="contained" onPress={inserir}>
        Inserir
      </Button>

      {dados.map((l, i) => (
        <Text key={i} style={{ marginTop: 5 }}>
          {l.name}
        </Text>
      ))}
    </ScrollView>
  );
}}