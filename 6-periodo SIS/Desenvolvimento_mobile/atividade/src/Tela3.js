import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function Tela3({ navigation }) {
    const [pesoDoAlmoco, setPesoDoAlmoco] = useState('');

    function voltarTela2() {
        navigation.navigate('Tela2');
    }

    function irTela4() {
        navigation.navigate('Tela4');
        globalThis.pesoDoAlmoco = pesoDoAlmoco;
    }

    function fecharTeclado() {
        Keyboard.dismiss();
    }

    return (
        <TouchableWithoutFeedback onPress={fecharTeclado}>
            <View style={styles.container}>
                <Text style={styles.title}>Almoço</Text>
                <Text style={styles.subtitle}>Informe o peso do almoço em gramas</Text>
                <Text style={styles.label}>Peso do almoço (g)</Text>
                <TextInput 
                    style={styles.input}
                    value={pesoDoAlmoco} 
                    onChangeText={setPesoDoAlmoco} 
                    placeholder="Digite o peso do almoço"
                    keyboardType="numeric"
                    returnKeyType="done"
                    onSubmitEditing={fecharTeclado}
                />
                
                <View style={styles.buttonContainer}>
                    <Button title="Fechar Teclado" onPress={fecharTeclado} />
                </View>
                
                <View style={styles.buttonContainer}>
                    <Button title="Voltar" onPress={voltarTela2} />
                    <Button title="Próximo" onPress={irTela4} />
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
        color: '#206924f9',
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
        marginBottom: 20,
        borderRadius: 5,
        width: '80%',
    },
});
