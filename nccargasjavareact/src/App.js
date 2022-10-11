import React, { Component } from 'react';
import './App.css';

class App extends Component {

  async saveApps(){
    let url ="http://localhost:8080/api/apps/save";
    
    let body ={
      "appname": "nc-cargasv3-atum", 
      "applogo": "tApps_Images/nc-cargasv3-batata.appLogo.163053.png",
      "descricao": "batata"
    };
    
    let data = {
      method:'post',
      node:'no-cors',
      headers: {
        'Accept':'application/json',
        'Content-type':'application/json',
      },
      body: JSON.stringify(body)
    }
    
    try {
      let result = await fetch(url,data);
      console.log(result)
    } catch (error) {
      console.log(error);
    }
  }


  render() {
    return (
      <div className="App">
        NC Cargas
        <br></br>
        <button onClick={()=>this.saveApps()}>Press me to post data</button>
      </div>
    );
  }
}

export default App;
