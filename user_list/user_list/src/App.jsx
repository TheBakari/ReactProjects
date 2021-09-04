import React from 'react';

import { Fragment } from 'react';

import { Header } from './Header/Header.jsx';
import { RandomUser } from './RandomUser/RandomUser.jsx';
import { GridView } from './GridView/GridView.jsx';
import { Footer } from './Footer/Footer.jsx';

import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isListView: true
    }
    console.log(this.state)
  }
  render(){
  return (
    <Fragment>
      <Header isListView={this.state.isListView} onChange={()=>this.setState({isListView: !this.state.isListView})}/>
      {this.state.isListView
        ? <RandomUser />
        : <GridView />}
      <Footer />
    </Fragment>
    
  );
  }
  
}



export default App;
