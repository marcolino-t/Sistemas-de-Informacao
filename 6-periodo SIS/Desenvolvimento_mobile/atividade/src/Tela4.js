import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function Tela4({ navigation }) {
    const [pesoDoJantar, setPesoDoJantar] = useState('');


    function voltarTela3() {
        navigation.navigate('Tela3');
    }

    function voltarTela1() {
        navigation.navigate('Tela1');
    }
    function irTela5() {
        navigation.navigate('Tela5');
        globalThis.pesoDoJantar = pesoDoJantar;
    }

    function fecharTeclado() {
        Keyboard.dismiss();
    }
    

    return (
        <TouchableWithoutFeedback onPress={fecharTeclado}>
            <View style={styles.container}>
                <Text style={styles.title}>Jantar</Text>
                <Text style={styles.subtitle}>Informe o peso do jantar em gramas</Text>
                <Text style={styles.label}>Peso do jantar (g)</Text>
                <TextInput 
                    style={styles.input}
                    value={pesoDoJantar} 
                    onChangeText={setPesoDoJantar} 
                    placeholder="Digite o peso do jantar"
                    keyboardType="numeric"
                    returnKeyType="done"
                    onSubmitEditing={fecharTeclado}
                />
                
                <View style={styles.buttonContainer}>
                    <Button title="Fechar Teclado" onPress={fecharTeclado} />
                </View>
                
                <View style={styles.buttonContainer}>
                    <Button title="Voltar" onPress={voltarTela3} />
                    <Button title="Próximo" onPress={irTela5} />
                </View>

                <View><Button title="Voltar Tela 1" onPress={voltarTela1} /></View>
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
        color: '#16652cff',
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
        color: '#1e4f1eff',
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
