// import React from "react";

// export default function Student(props){
//     return(
//         <>
//         <h1>Student Component</h1>
//         <h3>Hello {props.name}</h3>

//         </>
//     )
// }

import React, {Component} from 'react';

export default class Student extends Component{
render(){
    return(
        <>
        <div>Student {this.props.name}</div>
        </>
    )
}
}