import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function Tela2({ navigation }) {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');

    function voltarTela1() {
        navigation.navigate('Tela1');
    }

    function irTela3() {
        navigation.navigate('Tela3');
        globalThis.altura = altura;
        globalThis.peso = peso;
    }

    function fecharTeclado() {
        Keyboard.dismiss();
    }

    return (
        <TouchableWithoutFeedback onPress={fecharTeclado}>
            <View style={styles.container}>
                <Text style={styles.title}>Dados Corporais</Text>
                <Text style={styles.subtitle}>Informe sua altura e peso</Text>
                <Text style={styles.label}>Altura (m)</Text>
                <TextInput 
                    style={styles.input}
                    value={altura} 
                    onChangeText={setAltura} 
                    placeholder="Digite sua altura"
                    keyboardType="numeric"
                    returnKeyType="next"
                />
                <Text style={styles.label}>Peso (kg)</Text>
                <TextInput 
                    style={styles.input}
                    value={peso} 
                    onChangeText={setPeso} 
                    placeholder="Digite seu peso"
                    keyboardType="numeric"
                    returnKeyType="done"
                    onSubmitEditing={fecharTeclado}
                />
                
                <View style={styles.buttonContainer}>
                    <Button title="Fechar Teclado" onPress={fecharTeclado} />
                </View>
                
                <View style={styles.buttonContainer}>
                    <Button title="Voltar" onPress={voltarTela1} />
                    <Button title="Próximo" onPress={irTela3} />
                </View>
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
        marginBottom: 20,
        color: '#666',
        textAlign: 'center',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
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