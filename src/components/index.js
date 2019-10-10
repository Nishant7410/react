import React from 'react';
export function Input(props)
{
    return( 
        <input placeholder={props.place} value={props.value} onChange={props.onChange}/>
        );
}
export function Button(props)
{
    return(
        <button onClick={props.onClick}>Save</button>
        );
}
export function Div(props)
{
    return(
          <li>{props.name}</li>
          <button onClick={this.deleteItem(props.key)}>Delete</button> 
          );
}