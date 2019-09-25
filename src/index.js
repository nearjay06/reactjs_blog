import React from "react";
import REACTDOM from "react-dom";
import './style/style.css';
import Register from './components/register'
// import { get } from 'axios';


class App extends React.Component{
   render(){
        return (
            <div>
             <header>   
            <h1> Hello, welcome to the blog.
                Create an account.</h1>
                </header>
            
            <Register />
            

        
        </div>

        );
     }
  }

export default App;
REACTDOM.render(<App />, document.querySelector("#book"));
// ReactDOM.render(<Register/>, document.getElementByID("#book"));



    
      
       
    
   