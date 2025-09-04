import React, { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';

export default function Tela1({ navigation }) {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');

    function abrirTela2() {
        navigation.navigate('Tela2');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome</Text>
            <TextInput 
                style={styles.input}
                value={nome} 
                onChangeText={setNome} 
                placeholder="Digite seu nome"
            />
            <Text style={styles.label}>Idade</Text>
            <TextInput 
                style={styles.input}
                value={idade} 
                onChangeText={setIdade} 
                placeholder="Digite sua idade"
                keyboardType="numeric"
            />
            <Button title="Próximo" onPress={abrirTela2} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
        width: '80%',
    },
});