import React , {useState,createContext} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/home';
import './App.css';



const App =() => {

    
    return (
        
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Home} />
       
        
        
        </Switch>
        </BrowserRouter>
       
        
    )
}

export default App;