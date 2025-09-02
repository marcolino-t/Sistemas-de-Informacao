import {Text,View} from 'react-native'; 

function funcao(num){
    if(num % 2 === 0){
        return <Text>O número {num} é par.</Text>;
    } else {
        return <Text>O número {num} é ímpar.</Text>;
    }
}

function media(nota1, nota2){
    const resultado = (parseFloat(nota1)+parseFloat(nota2))/2;
    if (resultado >= 7){
        return <Text>{resultado.toFixed(1)} - Aprovado</Text>;
    } else {
        return <Text>{resultado.toFixed(1)} - Reprovado</Text>;
    }
}

export default function(props){
    return <View>
        {funcao(props.numero)}
        <View style={{marginTop: 10, padding: 5, borderWidth: 1, borderColor: 'blue'}}>
            <Text style={{fontWeight: 'bold'}}>Função Média:</Text>
            {media(8, 6)}
        </View>
    </View>;
}

