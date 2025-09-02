import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default function Tela2(props) {
    function voltar() {
        props.navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Segunda Tela</Text>
            <Button title="Voltar" onPress={voltar} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
    },
});