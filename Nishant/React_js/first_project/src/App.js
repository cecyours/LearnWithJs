import './App.css';
// import Student from './Student.js';
// import User from './User.js';
// import Input from './Input.js';
// import Toggle from './Toggle.js';
// import From from './From.js';
// import Hook from './Hook.js';
import Table from './Table.js';
// import { useState }  from 'react';
function App() {
  
  // const[status, setState] = useState(true);
  // const [name, setname] = useState('Nishant');
  // function change(){
  //   setname('Golani')
  // }
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is a Golani's world so anything is possible</h1>
        {/* <button onClick={()=>setState(false)}>Hide</button>
        <button onClick={()=>setState(true)}>Show</button>
        <button onClick={()=>setState(!status)}>Toggle</button>
        {status ?  <div><Input />
        <User />
        <Student name={name}/>
        <button onClick={change}>Click to Change</button></div> : ' ' } */}
{/*     <From /> */}
{/* 
        <Hook /> */}
        
        <Table/>
      </header>
    </div>
  );
}

export default App;

// import React, {Component} from 'react';
// export default class App extends Component{
//   constructor(){
//     super();
//     this.state={name:'Nishant'}
//   }
//   render(){
//     return(
//       <div className="App">
//       <header className="App-header">
//         <h1>This is a Golani's world so anything is possible</h1>
//         <User />
//         <Student name={this.state.name}/>
//         <button  onClick={()=>this.setState({name :"Golani"})}>Click to Change</button>
//       </header>
//     </div>
//     )
//   }
// }