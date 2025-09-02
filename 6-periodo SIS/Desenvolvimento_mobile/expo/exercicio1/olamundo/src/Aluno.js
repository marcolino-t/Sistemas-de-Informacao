import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function(props){
    return <View style={estilo.borda}>
        <Text>Aluno: {props.nome}</Text>
        <Text>Nota 1: {props.nota1}</Text>
        <Text>Nota 2: {props.nota2}</Text>
        <Text>Média: {media(props.nota1, props.nota2)}</Text>
    </View>;
}

function media(nota1, nota2){
    const media = (parseFloat(nota1)+parseFloat(nota2))/2;
    if (media >= 7){
        return <Text>{media} - Aprovado</Text>;
    } else {
        return <Text>{media} - Reprovado</Text>;
    }
}

const estilo = StyleSheet.create({
    borda: {
        borderWidth: 1,
        borderColor: "blue",
        borderStyle: "solid",
        margin: 5,
        padding: 5
    }
});