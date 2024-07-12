import React from 'react';
import ReactDOM from 'react-dom';

//Components
import Header from './components/header';


const App =() =>{
  // return <h1>Hello World!!!</h1>
  // return React.createElement('h1',{className: 'title'},React.createElement('div'))
  return (
    // <div className="container">
    //   <h1>Hello World!!!</h1>
    //   <div>Hey brooooo</div>
    // </div>
    <div>
      <Header/>
    </div>
  )
}


ReactDOM.render(<App />, document.querySelector('#root'));
