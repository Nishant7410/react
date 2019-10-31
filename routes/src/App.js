import React from 'react';
import './App.css';
import {Nav,Home,About,Todo,List} from './nav.js';
import {Route,Switch} from 'react-router-dom';
class App extends React.Component
{
    render()
    {
 return(
    <div>
     <Nav />
     <Switch>
     <Route exact path="/" component={Home}/>
     <Route exact path="/about" component={About}/>
     <Route exact path="/todo/:id" component={Todo}/>
     <Route exact path="/list/:id" component={List}/>
     </Switch>
      </div>
    );
    }
     componentWillUnMountMount()
    {
        console.log("Off page");
    }
}
export default App;