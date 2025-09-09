import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export default function Tela7({ navigation }) {
    const [imc, setImc] = useState('');
    const [classificacao, setClassificacao] = useState('');

    useEffect(() => {
        // Variáveis Globais
        const altura = parseFloat(globalThis.altura);
        const peso = parseFloat(globalThis.peso);

        console.log('Tela7 - Altura:', altura, 'Peso:', peso);

        if (altura && peso && !isNaN(altura) && !isNaN(peso)) {
            const imcCalculado = peso / (altura * altura);
            setImc(imcCalculado.toFixed(2));

            // Classificação do IMC
            let classificacaoIMC = '';
            if (imcCalculado < 18.5) classificacaoIMC = 'Abaixo do peso';
            else if (imcCalculado >= 18.5 && imcCalculado < 25) classificacaoIMC = 'Peso normal';
            else if (imcCalculado >= 25 && imcCalculado < 30) classificacaoIMC = 'Sobrepeso';
            else classificacaoIMC = 'Obesidade';

            setClassificacao(classificacaoIMC);
        } else {
            setImc('Preencha altura e peso nas telas anteriores.');
            setClassificacao('');
        }
    }, []);

    function voltarTela6() {
        navigation.navigate('Tela6');
    }

    function irTela8() {
        navigation.navigate('Tela8');
    }

    function voltarTela1() {
        navigation.navigate('Tela1');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Índice de Massa Corporal</Text>
            <Text style={styles.subtitle}>Seu IMC calculado</Text>
            <Text style={styles.result}>{imc ? imc : 'Preencha altura e peso nas telas anteriores.'}</Text>
            <Text style={styles.classification}>{classificacao}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Voltar Tela 6" onPress={voltarTela6} />
                <Button title="Próximo" onPress={irTela8} />
                <Button title="Voltar Tela 1" onPress={voltarTela1} />
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
    classification: {
        fontSize: 18,
        marginBottom: 30,
        color: '#2e7d32',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    result: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#1e4f1e',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
    },
});