import React from "react";
import REACTDOM from "react-dom";
import './style/style.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


class App extends React.Component{
    render(){
        return (
            <div> Hello, welcome to the Blog.</div>
        )
    }

}
    
class Content extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
            
    //     }
    // }
    render(){
        return (
            
        )
    }

}
    







export default Content;
REACTDOM.render(<App />, document.querySelector("#book"));
