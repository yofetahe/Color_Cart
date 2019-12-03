import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import { ApolloProvider } from '@apollo/react-hooks';

import Header from './component/header/Header';
import ColorBoard from './component/Colors/Color-board';
import CartBoard from './component/Cart/Cart-board';

import { client } from './API/api-call'
import ColorsContextProvider from './Contexts/ColorsContext';

import Container from '@material-ui/core/Container';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="App">
        <ColorsContextProvider>
            <Header />
            <Container maxWidth="lg">  
            <Switch>            
              <Route exact path="/" component={ColorBoard} />
              <Route exact path="/cart" component={CartBoard} />            
            </Switch>
            </Container>    
          </ColorsContextProvider>      
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
