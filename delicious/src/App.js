
//import './App.css';
import React from 'react';
import Pages from './pages/Pages';
import Category from './components/Category';
import { BrowserRouter } from 'react-router-dom';
import Search from './components/Search';
import { Logo, Nav } from './styles/Styles';
import { GiKnifeFork } from 'react-icons/gi';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>
          <BrowserRouter>
          <Nav>
              <GiKnifeFork />
              <Logo to='/' >Delliciusssss</Logo>
          </Nav>
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
