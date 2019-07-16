import React, { Component } from 'react'
import './SignUp.css';
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

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: { value: '' },
      email: { value: '' },
      password: { value: '' },
      confirm: { value: '' }
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
        <h1>Create an Account</h1>
        <div className='page-wrap'>
        <div className='mobile'>
        <Input 
          type='text' 
          placeholder='Full name'
          value={this.state.name.value}
          onKeyUp={(e) => this.handleInput('name', e)} />
        
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
        
        <Input 
          type='password' 
          placeholder='Confirm password'
          value={this.state.confirm.value}
          onKeyUp={(e) => this.handleInput('confirm', e)} />
                
        <Button 
          text='Sign Up'
          onClick={this.handleSubmit} />
        <Link to="/login" className="navbar__link"><li>Already a user? Click here to login</li></Link>        
          </div>
          </div>
          </div>
          
				)
    }
}

export default SignUp