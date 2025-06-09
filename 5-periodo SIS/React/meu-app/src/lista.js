import React, {Component   }  from 'react';
export default class Lista extends Component {
    state = {
        date: [],
}
//metodo executado depois que o componente é inserido
componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100.json')
        .then((result)=> result.json())
        .then((result)=>{
            this.setState({
                date: result.results,
            });
        })
}
render() {
    const result = this.state.date.map((entry, index) => {
        return <option value = {index}>{entry.name}</option>
    
})
return <select>{result}</select>
}
}