import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function Tela6({ navigation }) {
    const [passosNoDia, setPassosNoDia] = useState('');


    function voltarTela5() {
        navigation.navigate('Tela5');
    }

    function irTela7() {
        if (!passosNoDia || passosNoDia.trim() === '') {
            alert('Por favor, digite o número de passos antes de continuar.');
            return;
        }
        
        // Salvar o valor globalmente
        globalThis.passosNoDia = passosNoDia;
        
        // Navegar para a próxima tela
        navigation.navigate('Tela7');
    }

    function voltarTela1() {
        navigation.navigate('Tela1');
    }

    function fecharTeclado() {
        Keyboard.dismiss();
    }

    return (
        <TouchableWithoutFeedback onPress={fecharTeclado}>
            <View style={styles.container}>
                <Text style={styles.title}>Atividade Física</Text>
                <Text style={styles.subtitle}>Informe quantos passos você deu hoje</Text>
                <Text style={styles.label}>Passos no dia</Text>
                <TextInput 
                    style={styles.input}
                    value={passosNoDia} 
                    onChangeText={setPassosNoDia} 
                    placeholder="Digite o número de passos no dia"
                    keyboardType="numeric"
                    returnKeyType="done"
                    onSubmitEditing={fecharTeclado}
                />
                
                <View style={styles.buttonContainer}>
                    <Button title="Fechar Teclado" onPress={fecharTeclado} />
                </View>
                
                <View style={styles.buttonContainer}>
                    <Button title="Voltar" onPress={voltarTela5} />
                    <Button title="Próximo" onPress={irTela7} />
                    <Button title="Tela 1" onPress={voltarTela1} />
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
        backgroundColor: '#ffffffff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#2e7d32',
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
    message: {
        fontSize: 18,
        marginBottom: 30,
        color: '#2e7d32',
        textAlign: 'center',
        fontWeight: 'bold',
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
        marginBottom: 20,
        borderRadius: 5,
        width: '80%',
    },
});
