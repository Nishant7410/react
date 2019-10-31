import React from 'react';
import {Link,Switch,Route} from 'react-router-dom';
import {Input,Button,Div} from './components/index.js';

export function Nav()
{
    return(
        <div>
        <Link to="/"><button>Home</button></Link>
        <Link to="/about"><button>About</button></Link>
        <Link to="/todo/xyz"><button>Todo</button></Link>
        </div>
    );
}
export function Home()
{
    return(
    <h3>Home</h3>
    );
}
export function About()
{
    return(
    <h3>About</h3>
    );
}

export class Todo extends React.Component
{
    state={
       value:'',
        data:'',
        todo:[]
    }
 componentDidMount()
    {
        fetch("https://api.github.com/users").then(
        res=>res.json()).then(
        (result)=>{
            this.setState({value:true,todo:result});
        },
        (error)=>{
            this.setState({value:false});
        }
        )
    }
    handleInput=(e)=>
    {
        const value=e.target.value;
        //this.a=value;
        this.setState({ data:value});
    }
    savetodo=()=>{
        this.state.todo.push(this.state.value);
        this.setState({todo:this.state.todo,value:true,data:''});
    }
    deleteItem=(i)=>{
        return()=>{
            this.state.todo.splice(i,1);
            this.setState({todo:this.state.todo,value:true,data:''});

        }

    }
    //a=123;
    render()
    {
//        setTimeout(()=>{
//            this.props.history.push("/about");
//        },3000);    
       console.log(this.props);
       if(this.state.value==false)
           return ("Loaded");
        else{
      return (
        <center>  
      <div>
        <Input place="Todo" value={this.state.data} onChange={this.handleInput}/>
        <Button onClick={this.savetodo}>save</Button>      
      <ul>
      {this.state.todo.map((item,i)=>
      {
          return (
         <Div name={item.login} onclick={this.deleteItem(i)} />            
          );
      })
          
          }
      </ul>
      </div>
</center>
      );
}
    }
}
export class List extends React.Component
{
    state={
       value:'',
        data:'',
        todo:[]
    }
 componentDidMount()
    {
        fetch("https://api.github.com/users/"+this.props.match.params.id).then(
        res=>res.json()).then(
        (result)=>{
            this.setState({value:true,todo:result});
        },
        (error)=>{
            this.setState({value:false});
        }
        )
    }
render()
{
    if(this.state.value==false)
        return ("Loaded");
    else
        {
    return(
        <div>
        <center>
        <h1>{this.state.todo.followers}</h1>
        <img src={this.state.todo.avatar_url}/>
        </center>
        </div>
    );
        }
}
}
;