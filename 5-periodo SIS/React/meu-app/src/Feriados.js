import React, { Component } from 'react';

class Feriados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: [],
    };
  }

  componentDidMount() {
    fetch('https://holidayapi.com/v1/holidays?pretty&key=098af81c-0cb5-47f7-9d01-97ef27b9859e&country=BR&year=2024&language=pt')
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          date: result.holidays,
        });
      });
  }

  render() {
    const result = this.state.date.map((entry, index) => {
      return <option key={index} value={index}>{entry.name}</option>;
    });

    return (
      <select>
        {result}
      </select>
    );
  }
}

export default Feriados;
