import React, { Component } from 'react'

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

class Auth extends Component {
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
					</div>        
				)
    }
}

export default Auth