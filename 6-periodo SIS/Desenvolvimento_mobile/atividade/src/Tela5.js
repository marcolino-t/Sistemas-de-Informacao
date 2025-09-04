import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';

export default function Tela5({ navigation }) {
    const [cafeDaManha, setCafeDaManha] = useState('');
    const [cafeDaTarde, setCafeDaTarde] = useState('');
    const [cafeDaNoite, setCafeDaNoite] = useState('');


    function voltarTela4() {
        navigation.navigate('Tela4');
    }

    function voltarTela1() {
        navigation.navigate('Tela1');
    }

    function abrirTela6() {
        navigation.navigate('Tela6');
    }
    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Café da manhã</Text>
            <TextInput 
                style={styles.input}
                value={cafeDaManha} 
                onChangeText={setCafeDaManha} 
                placeholder="Digite o peso do café da manhã"
                keyboardType="numeric"
            />

            <Text style={styles.title}>Café da tarde</Text>
            <TextInput 
                style={styles.input}
                value={cafeDaTarde} 
                onChangeText={setCafeDaTarde} 
                placeholder="Digite o peso do café da tarde"
                keyboardType="numeric"
            />

            <Text style={styles.title}>Café da noite</Text>
            <TextInput 
                style={styles.input}
                value={cafeDaNoite} 
                onChangeText={setCafeDaNoite} 
                placeholder="Digite o peso do café da noite"
                keyboardType="numeric"
            />
            
            
            
            <View style={styles.buttonContainer}>
                <Button title="Voltar" onPress={voltarTela4} />
                
                <Button title="Próximo" onPress={abrirTela6} />
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
