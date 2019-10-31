import React from 'react';
import {Link} from 'react-router-dom';
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
        <div>
          <li><Link to={"/list/"+props.name}>{props.name}</Link></li>
          <button onClick={props.onclick}>Delete</button>
        </div>
          );
}
