import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';

export default function Tela2({ navigation }) {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');

    function voltarTela1() {
        navigation.navigate('Tela1');
    }

    function irTela3() {
        navigation.navigate('Tela3');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Altura</Text>
            <TextInput 
                style={styles.input}
                value={altura} 
                onChangeText={setAltura} 
                placeholder="Digite sua altura"
            />
            <Text style={styles.title}>Peso</Text>
            <TextInput 
                style={styles.input}
                value={peso} 
                onChangeText={setPeso} 
                placeholder="Digite seu peso"
                keyboardType="numeric"
            />
            <Text style={styles.subtitle}>Segunda tela da aplicação</Text>
            
            <View style={styles.buttonContainer}>
                <Button title="Voltar" onPress={voltarTela1} />
                <Button title="Próximo" onPress={irTela3} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 30,
        color: '#666',
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
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