import React, { useState } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
        <View style={styles.geral}>
            <Text style={styles.lingua}>Português (Brasil) <Icon name="chevron-down" style={styles.lingua} /></Text>

            <View style={styles.viewlogo}>
            <Image source={require('../assets/logo_insta.png')} style={styles.logo} />
            </View>

            <TextInput 
                value={usuario} 
                label="Telefone, nome de usuário ou email"
                placeholder='Usuário' 
                onChangeText={setUsuario}
                mode="outlined"
                style={styles.input}
            />
            <TextInput 
                value={senha} 
                right={<TextInput.Icon icon="eye" />}
                label="Senha"
                placeholder='Senha' 
                onChangeText={setSenha} 
                mode="outlined"
                secureTextEntry 
                style={styles.input}
            />

            
            <TouchableOpacity onPress={entrar} style={styles.entrar} activeOpacity={0.8}>
                <Text style={styles.entrarText}>Entrar</Text>
            </TouchableOpacity>

            <Text style={styles.mensagem}>{mensagem}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    geral:{
        margin: 50
    },

    lingua: {
        color: "#999",
        textAlign: "center",
        fontSize: 12,
    },

    logo: {
        width: 200,
        height: 71,
    },

    viewlogo: {
        alignItems: "center",
        marginTop: 60,
    },
    input: {
        height: 40,
        opacity: 0.5
        
    },
    entrar:{
        borderColor: "#499ef1",
        borderWidth: 1,
        borderRadius: 4,
        marginTop: 10,
        backgroundColor: "#499ef1",
        color: "white",
        alignItems: "center",
        fontFamily: "Arial",
        fontWeight: "bold",
        paddingVertical: 10,
    },
    entrarText: {
        color: "#fff",
        fontWeight: "700",
    },
    mensagem: {
        color: "red",
        marginTop: 10,
        textAlign: "center",
    }
})
