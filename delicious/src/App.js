
//import './App.css';
import React from 'react';
import Pages from './pages/Pages';
import Category from './components/Category';
import { BrowserRouter } from 'react-router-dom';
import Search from './components/Search';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>
          <BrowserRouter>
           <Search />
            <Category />
            <Pages />
          </BrowserRouter>
        </h1>
      </div>
    );
  }

}

export default App;
