import React, { Component } from 'react';
import { Alert, Button, Text, TextInput, View, StyleSheet } from 'react-native';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numero1 : 0,
            numero2: 0,
            soma: 0
        };
}


onCalcular() {
    const { numero1, numero2 } = this.state;
    var soma = parseInt(numero1) + parseInt(numero2);
    this.setState({ soma: soma });
}

render (){
    return (
        <View styles={styles.container}>
            <TextInput value={this.state.numero1} onChangeText={(numero1) =>this.setState({numero1})} placeholder={"numero 1"} style={styles.input} />

            

            <TextInput value={this.state.numero2} onChangeText={(numero2) =>this.setState({numero2})} placeholder={"numero 2"} style={styles.input} />

            <Button title="Calcular" onPress={() => this.onCalcular.bind(this)} />

            <Text style={styles.resultado}>Resultado {this.state.soma}</Text>
        </View>
    );
}}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f8f8ff',
    },
    input: {
        width: '200',
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'orange',
        marginBottom: 10
    },

});