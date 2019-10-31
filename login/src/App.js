import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav, Home, About, Todo, List } from './nav.js';
import { Route, Switch } from 'react-router-dom';
//import {Input,Button,Div} from './components/index.js';
class App extends React.Component {
    state = {
        islogin: false,
        username: "",
        password: "",
        login: []
    }

    Username = (e) => {
        const value = e.target.value;
        //this.a=value;
        this.setState({ username: value });
    }
    Password = (e) => {
        const value = e.target.value;
        //this.a=value;
        this.setState({ password: value });
    }
    add = () => {

        var ob = new Object();
        ob.islogin = true;
        ob.user = this.state.username;
        ob.pass = this.state.password;
        this.state.login.push(ob);
        sessionStorage.setItem('User', JSON.stringify(this.state.login));
        alert("user added");
        this.setState({ todo: this.state.todo, value: '' });

    }
    //    deleteItem=(e)=>{
    //    const id=e.target.name;
    //    for(var i=0;i<this.state.todo.length;i++)
    //        if(i==id)
    //            this.state.todo.splice(parseInt(id),1);
    //        this.setState({todo:this.state.todo,value:''});
    //    }
    deleteItem = (i) => {
        return () => {
            this.state.todo.splice(i, 1);
            this.setState({ todo: this.state.todo, value: '' });

        }

    }
    //a=123;
    render() {
        if (window.sessionStorage.getItem('User') != null) {
            return (
                <div>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/todo/:id" component={Todo} />
                        <Route exact path="/list/:id" component={List} />
                    </Switch>
                </div>
            );
        }
        else {
            return (
                <div>
                    <center>
                        <div className="login">
                            <input class="in" type="text" placeholder="Username" value={this.state.username} onChange={this.Username} />
                            <input class="in" type="password" placeholder="Password" value={this.state.password} onChange={this.Password} />
                            <button onClick={this.add}>Login</button>
                        </div>
                    </center>
                </div>


            );
        }
    }
}
export default App;
;