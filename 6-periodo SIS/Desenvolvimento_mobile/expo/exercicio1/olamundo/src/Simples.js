import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default function(props){
    return <View style={estilo.borda}>
        <Image source={require('../assets/favicon.png')} />
        <Text>Texto: {props.texto}</Text>
    </View>;
}

const estilo = StyleSheet.create({
    borda: {
        borderWidth: 1,
        borderColor: "blue",
        borderStyle: "solid",
        margin: 5,
        padding: 5
    },

    imagem: {
        width: 100,
        height: 100
    }
});