
import React, { Component } from "react";
import './App.css';

import { API_URL } from './api';

import Form from './Componentes/Form';
import Table from "./Componentes/Table";


class App extends Component {

  state = {
    result: [],
    columns: []
  }

  getSearch = async (e) => {
    const hiddenFields = ["id", 'created', 'confiavel', 'senha', 'active'];
    const searchWord = e.target.elements.recipeName.value;
    e.preventDefault();
    const apiCall = await fetch(`${API_URL}/${searchWord}/`)

    //console.log(recipeName);
    const data = await apiCall.json();
    this.setState({ result: data });
    const allColumns = Object.keys(data[0]);
    this.setState({ columns: allColumns.filter(el => !hiddenFields.includes(el)) })

    console.log(this.state.columns);
    console.log(this.state.result.filter(el => hiddenFields.includes(el)));

  }
  render() {
    return (
      <div className="App">
        <header className='app-header'>
          <h1 className='app-tittle'>Recipe search</h1>
        </header>

        <Form getSearch={this.getSearch} />
        <Table getTable={this.state} />

      </div>
    );
  }
}

export default App;
