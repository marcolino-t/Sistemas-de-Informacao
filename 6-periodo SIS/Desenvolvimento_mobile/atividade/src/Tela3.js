import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';

export default function Tela3({ navigation }) {
    const [pesoDoAlmoco, setPesoDoAlmoco] = useState('');

    function voltarTela2() {
        navigation.navigate('Tela2');
    }

    function irTela4() {
        navigation.navigate('Tela4');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Peso do almoço</Text>
            <TextInput 
                style={styles.input}
                value={pesoDoAlmoco} 
                onChangeText={setPesoDoAlmoco} 
                placeholder="Digite o peso do almoço"
                keyboardType="numeric"
            />
            
            <View style={styles.buttonContainer}>
                <Button title="Voltar" onPress={voltarTela2} />
                <Button title="Próximo" onPress={irTela4} />
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
        backgroundColor: '#e8f5e8',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#2e7d32',
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
