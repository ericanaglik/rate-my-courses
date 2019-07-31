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
          <section id="signup">
          <div className="container "> 
            <div className="row">
              <div className="col-md-10 mx-auto">
                <div className="card">
                  <div className="row mr-0 ml-0 d-flex h-100">
                      <img src="https://res.cloudinary.com/erica-naglik/image/upload/v1564606802/skyline_vqpy6p.png" className="img-fluid" width="860px" />
                    
                    <div className="col-md-6 form">
                      <div className="card-title">
                        <img src="https://res.cloudinary.com/erica-naglik/image/upload/v1564602895/Screen_Shot_2019-06-07_at_7.46.14_PM_cbfogy.png" className="img-ms logo" />
                        <h2>Sign up</h2>
                        <p>Maybe insert a sentence or two here about being a good person on this platform</p>
                      </div>
                      <div className="card-body">
                        <form>
                          <div className="form-group">
                            <label>Name</label>
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <span className="input-group-text" id="name-addon"><i className="far fa-user" /></span>
                              </div>
        <div className="pls">
        <Input 
          type='text'
          className="form-control" 
          placeholder='Full name'
          value={this.state.name.value}
          onKeyUp={(e) => this.handleInput('name', e)} />
          </div>
          </div>
          <div className="form-group">
          <label>Email</label>
                          <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <span className="input-group-text" id="email-addon"><i className="far fa-envelope-open" /></span>
                            </div>
                            </div>
        <div className="pls">
        <Input 
          type='text'
          className="form-control" 
          placeholder='Make School Email'
          value={this.state.email.value}
          onKeyUp={(e) => this.handleInput('email', e)} />
        </div>
        </div>
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <span className="input-group-text" id="password-addon"><i className="fas fa-fingerprint" /></span>
                            </div>
        <div className="pls">
        <Input 
          type='password'
          className="form-control"  
          placeholder='Create password'
          value={this.state.password.value}
          onKeyUp={(e) => this.handleInput('password', e)} />
          </div>
        </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <span className="input-group-text" id="password-addon"><i className="fas fa-fingerprint" /></span>
                            </div>
        <div className="pls">
        <Input 
          type='password'
          className="form-control"  
          placeholder='Confirm password'
          value={this.state.confirm.value}
          onKeyUp={(e) => this.handleInput('confirm', e)} />
          </div>
        </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <span className="input-group-text" id="password-addon"><i className="fas fa-fingerprint" /></span>
                            </div>
        <div className="pls">
        <Button 
          text='Join Now'
          onClick={this.handleSubmit} /> 
        <Link to="/login" className="navbar__link"><li>Already a user? Click here to login</li></Link>  
        </div>
        </div>
                        </div>
                        <div className="form-group text-center">
                
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div> {/* End of card */}
            </div>
          </div>
        </div>
      </section>
        
          
				)
    }
}

export default SignUp