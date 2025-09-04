import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';

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
    }
    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Peso do jantar</Text>
            <TextInput 
                style={styles.input}
                value={pesoDoJantar} 
                onChangeText={setPesoDoJantar} 
                placeholder="Digite o peso do jantar"
                keyboardType="numeric"
            />
            
            
            <View style={styles.buttonContainer}>
                <Button title="Voltar" onPress={voltarTela3} />
                
                <Button title="Próximo" onPress={irTela5} />
            </View>

            <View><Button title="Voltar Tela 1" onPress={voltarTela1} /></View>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#e8f5e8',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#2e7d32',
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 10,
        color: '#666',
        textAlign: 'center',
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
