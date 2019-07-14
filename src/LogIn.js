import React, { Component } from 'react'
// import './LogIn.css';
import { Link } from 'react-router-dom'
const Input = (props) => 
	<input 
		className='c-input'
		type={props.type} 
		placeholder={props.placeholder} 
    onKeyUp={props.onKeyUp} />

const Button = (props) => 
	<button 
    className='c-button' 
    onClick={props.onClick}>{props.text}
    </button>

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: { value: '' },
      password: { value: '' },
    }
  }
      
  handleInput = (param, e) => {
		let value = e.target.value;
		
		console.log(param);
		
    if(param === 'name') {  
    }
  }
    

    render(){
        return(
				<div>
        
        <Input 
          type='text' 
          placeholder='Make School Email'
          value={this.state.email.value}
          onKeyUp={(e) => this.handleInput('email', e)} />
        
        <Input 
          type='password' 
          placeholder='Create password'
          value={this.state.password.value}
          onKeyUp={(e) => this.handleInput('password', e)} />
                
        <Button 
          text='Log In'
          onClick={this.handleSubmit} />
        <Link to="/signup" className="navbar__link"><li>Need to sign up? Click here</li></Link>
					</div>        
				)
    }
}

export default LogIn