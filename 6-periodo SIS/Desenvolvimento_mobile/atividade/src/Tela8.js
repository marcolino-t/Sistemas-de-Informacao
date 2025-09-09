import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, ScrollView } from 'react-native';

export default function Tela8({ navigation }) {
    const [caloriasIngeridas, setCaloriasIngeridas] = useState(0);
    const [caloriasGastas, setCaloriasGastas] = useState(0);
    const [saldoCalorias, setSaldoCalorias] = useState(0);

    useEffect(() => {
        // Calcular calorias ingeridas (3 calorias por grama de alimento)
        const pesoAlmoco = parseFloat(globalThis.pesoDoAlmoco) || 0;
        const pesoJantar = parseFloat(globalThis.pesoDoJantar) || 0;
        const cafeManha = parseFloat(globalThis.cafeDaManha) || 0;
        const cafeTarde = parseFloat(globalThis.cafeDaTarde) || 0;
        const cafeNoite = parseFloat(globalThis.cafeDaNoite) || 0;

        console.log('Tela8 - Dados:', {
            pesoAlmoco, pesoJantar, cafeManha, cafeTarde, cafeNoite,
            passos: globalThis.passosNoDia
        });

        const totalGramas = pesoAlmoco + pesoJantar + cafeManha + cafeTarde + cafeNoite;
        const caloriasIngeridasCalculadas = totalGramas * 3;
        setCaloriasIngeridas(caloriasIngeridasCalculadas);

        // Calcular calorias gastas (0,08 calorias por passo)
        const passos = parseFloat(globalThis.passosNoDia) || 0;
        const caloriasGastasCalculadas = passos * 0.08;
        setCaloriasGastas(caloriasGastasCalculadas);

        // Calcular saldo de calorias
        const saldo = caloriasIngeridasCalculadas - caloriasGastasCalculadas;
        setSaldoCalorias(saldo);
    }, []);

    function voltarTela7() {
        navigation.navigate('Tela7');
    }

    function voltarTela1() {
        navigation.navigate('Tela1');
    }

    function reiniciar() {
        // Limpar variáveis globais
        globalThis.altura = '';
        globalThis.peso = '';
        globalThis.pesoDoAlmoco = '';
        globalThis.pesoDoJantar = '';
        globalThis.cafeDaManha = '';
        globalThis.cafeDaTarde = '';
        globalThis.cafeDaNoite = '';
        globalThis.passosNoDia = '';
        
        navigation.navigate('Tela1');
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Resumo Calórico do Dia</Text>
                
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Calorias Ingeridas</Text>
                    <Text style={styles.cardValue}>{caloriasIngeridas.toFixed(2)} cal</Text>
                    <Text style={styles.cardSubtitle}>3 calorias por grama de alimento</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Calorias Gastas</Text>
                    <Text style={styles.cardValue}>{caloriasGastas.toFixed(2)} cal</Text>
                    <Text style={styles.cardSubtitle}>0,08 calorias por passo</Text>
                </View>

                <View style={[styles.card, saldoCalorias >= 0 ? styles.cardPositive : styles.cardNegative]}>
                    <Text style={styles.cardTitle}>Saldo de Calorias</Text>
                    <Text style={[styles.cardValue, saldoCalorias >= 0 ? styles.positiveValue : styles.negativeValue]}>
                        {saldoCalorias.toFixed(2)} cal
                    </Text>
                    <Text style={styles.cardSubtitle}>
                        {saldoCalorias >= 0 ? 'Superávit calórico' : 'Déficit calórico'}
                    </Text>
                </View>

                <View style={styles.details}>
                    <Text style={styles.detailsTitle}>Detalhamento:</Text>
                    <Text style={styles.detailText}>• Almoço: {globalThis.pesoDoAlmoco || 0}g</Text>
                    <Text style={styles.detailText}>• Jantar: {globalThis.pesoDoJantar || 0}g</Text>
                    <Text style={styles.detailText}>• Café da manhã: {globalThis.cafeDaManha || 0}g</Text>
                    <Text style={styles.detailText}>• Café da tarde: {globalThis.cafeDaTarde || 0}g</Text>
                    <Text style={styles.detailText}>• Café da noite: {globalThis.cafeDaNoite || 0}g</Text>
                    <Text style={styles.detailText}>• Passos no dia: {globalThis.passosNoDia || 0}</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <Button title="Voltar" onPress={voltarTela7} />
                    <Button title="Reiniciar" onPress={reiniciar} />
                    <Button title="Tela 1" onPress={voltarTela1} />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#2e7d32',
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#ffffff',
        padding: 20,
        marginBottom: 15,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    cardPositive: {
        borderLeftWidth: 5,
        borderLeftColor: '#4caf50',
    },
    cardNegative: {
        borderLeftWidth: 5,
        borderLeftColor: '#f44336',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    cardValue: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#2e7d32',
        marginBottom: 5,
    },
    positiveValue: {
        color: '#4caf50',
    },
    negativeValue: {
        color: '#f44336',
    },
    cardSubtitle: {
        fontSize: 14,
        color: '#666',
        fontStyle: 'italic',
    },
    details: {
        backgroundColor: '#ffffff',
        padding: 20,
        marginBottom: 20,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    detailsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    detailText: {
        fontSize: 16,
        color: '#666',
        marginBottom: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
});
