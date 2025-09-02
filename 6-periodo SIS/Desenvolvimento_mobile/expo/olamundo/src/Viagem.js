import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Viagem(props) {
    function calcularPreco(distancia, precoEtanol, precoGasolina) {
        const consumoEtanol = distancia / 9; 
        const consumoGasolina = distancia / 11; 

        const custoEtanol = consumoEtanol * precoEtanol;
        const custoGasolina = consumoGasolina * precoGasolina;

        if (custoEtanol < custoGasolina) {
            return { texto: 'Abasteça com Etanol', estilo: styles.verde };
        } else {
            return { texto: 'Abasteça com Gasolina', estilo: styles.laranja };
        }
    }

    const resultado = calcularPreco(
        Number(props.distancia),
        Number(props.precoEtanol),
        Number(props.precoGasolina)
    );

    return (
        <View style={styles.resultado}>
            <Text>Distância percorrida: {props.distancia} km</Text>
            <Text>Preço Etanol: R$ {props.precoEtanol}</Text>
            <Text>Preço Gasolina: R$ {props.precoGasolina}</Text>
            <Text style={resultado.estilo}>
                Resultado: {resultado.texto}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    resultado: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        backgroundColor: "#f9f9f9"
    },
    verde: {
        borderWidth: 1,
        borderColor: "green",
        borderStyle: "solid",
        margin: 5,
        padding: 5,
        color: "green",
        fontWeight: "bold"
    },
    laranja: {
        borderWidth: 1,
        borderColor: "orange",
        borderStyle: "solid",
        margin: 5,
        padding: 5,
        color: "orange",
        fontWeight: "bold"
    }
});