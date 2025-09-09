import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

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
        globalThis.cafeDaManha = cafeDaManha;
        globalThis.cafeDaTarde = cafeDaTarde;
        globalThis.cafeDaNoite = cafeDaNoite;
    }

    function fecharTeclado() {
        Keyboard.dismiss();
    }
    

    return (
        <TouchableWithoutFeedback onPress={fecharTeclado}>
            <View style={styles.container}>
            <Text style={styles.title}>Refeições Adicionais</Text>
            <Text style={styles.subtitle}>Informe o peso das refeições em gramas</Text>
            <Text style={styles.label}>Café da manhã (g)</Text>
            <TextInput 
                style={styles.input}
                value={cafeDaManha} 
                onChangeText={setCafeDaManha} 
                placeholder="Digite o peso do café da manhã"
                keyboardType="numeric"
                returnKeyType="next"
            />

            <Text style={styles.label}>Café da tarde (g)</Text>
            <TextInput 
                style={styles.input}
                value={cafeDaTarde} 
                onChangeText={setCafeDaTarde} 
                placeholder="Digite o peso do café da tarde"
                keyboardType="numeric"
                returnKeyType="next"
            />

            <Text style={styles.label}>Café da noite (g)</Text>
            <TextInput 
                style={styles.input}
                value={cafeDaNoite} 
                onChangeText={setCafeDaNoite} 
                placeholder="Digite o peso do café da noite"
                keyboardType="numeric"
                returnKeyType="done"
                onSubmitEditing={fecharTeclado}
            />
            
            
            <View style={styles.buttonContainer}>
                <Button title="Fechar Teclado" onPress={fecharTeclado} />
            </View>
            
            <View style={styles.buttonContainer}>
                <Button title="Voltar" onPress={voltarTela4} />
                <Button title="Próximo" onPress={abrirTela6} />
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
