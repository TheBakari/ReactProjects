import React, { Fragment } from 'react'; //importuje kao div element da ne bi stakovali div elemente

import { Header } from './Header/Header.jsx';
import { BlogList } from './BlogList/BlogList.jsx';

import './App.css';


// function App() {
//   return (
//     <Fragment>
//       {/* u koliko nema decu pise se kao <Header/> */}
//       <Header  /> 
//       <BlogList />
//     </Fragment>
//   );
// }

class SmartApp extends React.Component{
    constructor(props){
      super(props);
      this.state={
        name:'Nikola',
        counter:0,
      };
    }

  render(){
    //console.log(this.state);
    return (
      <Fragment>
        <Header name={this.state.name} onUserSwitch={()=>this.setState({name:'Marko'})} /> 
        <span>{`Number of clicks: ${this.state.counter}`}</span>
        <button onClick={() => this.setState({counter: this.state.counter + 1 })}>Click me</button>
        <BlogList />
      </Fragment>
    ); 
  };
};

export { SmartApp};
