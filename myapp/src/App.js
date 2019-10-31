import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Input,Button,Div} from './components/index.js';
/*function App() {
  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
      <div className="todo">
      <center>
      <h2 id="header">To do list</h2>
      <div id="div2">
      <input id="in" type="text"/>
      <button id="button">Add</button>
      </div>
      </center>
      </div>
  );
}*/
//function App()
//{
//   var arr=[];
//    for(var i=0;i<100;i++)
//        {
//            arr.push(<li>{i}</li>);
//        }
//                     return arr;
//}
//function App()
//{
//    return(
//        <div class="App">
//        <input value="123" />
//        </div>
//    );
//}
class App extends React.Component
{
    state={
       value:'',
        todo:[]
    }

    handleInput=(e)=>
    {
        const value=e.target.value;
        //this.a=value;
        this.setState({ value:value , b:12 });
    }
    savetodo=()=>{
        this.state.todo.push(this.state.value);
        this.setState({todo:this.state.todo,value:''});
    }
//    deleteItem=(e)=>{
//    const id=e.target.name;
//    for(var i=0;i<this.state.todo.length;i++)
//        if(i==id)
//            this.state.todo.splice(parseInt(id),1);
//        this.setState({todo:this.state.todo,value:''});
//    }
    deleteItem=(i)=>{
        return()=>{
            this.state.todo.splice(i,1);
            this.setState({todo:this.state.todo,value:''});

        }

    }
    //a=123;
    render()
    {
      return (
        <center>  
      <div>
      <Input place="Todo" value={this.state.value} onChange={this.handleInput}/>
      <Button onClick={this.savetodo}>save</Button>      
      <ul>
      {this.state.todo.map((item,i)=>
      {
          return (
         <Div name={item} onclick={this.deleteItem(i)} />            
          );
      })
          
          }
      </ul>          
      </div>
</center>
      );  
    }
}
export default App;
;