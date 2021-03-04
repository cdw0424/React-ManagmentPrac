import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Component } from 'react';

class App extends Component {
  render(){
   return (
      <div className="gray-background">
       <img src={logo} lat="logo"/>
       <h2>개발 관리 시스템을 만들어보자!</h2>
     </div>
    );
  }
}

export default App;
