import React, { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function Tela1({ navigation }) {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');

    

    function abrirTela2() {
        navigation.navigate('Tela2');
    }

    function fecharTeclado() {
        Keyboard.dismiss();
    }

    return (
        <TouchableWithoutFeedback onPress={fecharTeclado}>
            <View style={styles.container}>
                <Text style={styles.title}>Controle de Calorias</Text>
                <Text style={styles.subtitle}>Preencha seus dados pessoais</Text>
                <Text style={styles.label}>Nome</Text>
                <TextInput 
                    style={styles.input}
                    value={nome} 
                    onChangeText={setNome} 
                    placeholder="Digite seu nome"
                    returnKeyType="next"
                />
                <Text style={styles.label}>Idade</Text>
                <TextInput 
                    style={styles.input}
                    value={idade} 
                    onChangeText={setIdade} 
                    placeholder="Digite sua idade"
                    keyboardType="numeric"
                    returnKeyType="done"
                    onSubmitEditing={fecharTeclado}
                />
                
                <View style={styles.buttonContainer}>
                    <Button title="Fechar Teclado" onPress={fecharTeclado} />
                </View>
                
                <Button title="Próximo" onPress={abrirTela2} />
            </View>
        </TouchableWithoutFeedback>
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
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#2e7d32',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 30,
        color: '#666',
        textAlign: 'center',
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
    buttonContainer: {
        marginBottom: 15,
    },
});