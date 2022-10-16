
//import './App.css';
import React from 'react';
import Pages from './pages/Pages';
import Category from './components/Category';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>
          <BrowserRouter>
            <Category />
            <Pages />
          </BrowserRouter>
        </h1>
      </div>
    );
  }

}

export default App;
