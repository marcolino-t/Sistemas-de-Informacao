import React, { useState } from "react";
import { Button, Text, TextInput, StyleSheet, View } from "react-native";

export default function Login(props) {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");

    function entrar(){
        // Lógica de autenticação
        if (senha === "123") {
            global.usuario = usuario;
            props.navigation.navigate("Tela1");
        } else {
            setMensagem("Usuário ou senha inválidos.");
        }
    }

    return (
        <View style={styles.container}>
            <TextInput 
                value={usuario} 
                placeholder='Usuário' 
                onChangeText={setUsuario}
                style={styles.input}
            />
            <TextInput 
                value={senha} 
                placeholder='Senha' 
                onChangeText={setSenha} 
                secureTextEntry 
                style={styles.input}
            />
            <Button title="Entrar" onPress={entrar} />
            <Text style={styles.mensagem}>{mensagem}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    mensagem: {
        marginTop: 10,
        textAlign: 'center',
        color: 'red',
    },
});