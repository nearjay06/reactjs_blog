import React from 'react';
import REACTDOM from "react-dom";
import Login from '../components/login';

class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            firstname:" ",
            lastname:" ",
            username:" ",
            email: " ",
            password:" ",
            confirmpassword:" "
        };

     }

    render(){
        return(
            <div className="sign">
                <form onSubmit={this.props.Login}> 

                    <p>SignUp Here</p>
                    <label htmlFor="first">First Name</label><br/>
                    <input className="form-control" type="input" name="firstname" 
                    value={this.state.firstname}
                    onInput={this.inputUpdated} /><br/>

                    <label htmlFor="last">Last Name</label> <br/>
                    <input className="form-control" type="input" name="lastname" 
                    value={this.state.lastname}
                    onInput={this.inputUpdated} /> <br/>

                   <label htmlFor="user">Username</label> <br/>
                    <input className="form-control" type="input" name="username" 
                    value={this.state.username}
                    onInput={this.inputUpdated} /><br/>

                   <label htmlFor="useremail">Email</label> <br/>
                    <input className="form-control" type="input" name="email" 
                    value={this.state.email}
                    onInput={this.inputUpdated} /><br/>
                  
                  <label htmlFor="pass">Password</label> <br/>
                    <input className="form-control" type="input" name="password" 
                    value={this.state.password}
                    onInput={this.inputUpdated} /> <br/>
                  
                  <label htmlFor="confirm">Confirm Password</label> <br/>
                    <input className="form-control" type="input" name="confirmpassword" 
                    value={this.state.confirmpassword}
                    onInput={this.inputUpdated} /> <br/>


                   
                    <button type="submit" className='btn-success'>Submit</button>
                </form>
            </div>
        );
    }
}

export default Register;


