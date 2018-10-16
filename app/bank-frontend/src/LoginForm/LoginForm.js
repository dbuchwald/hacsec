import React from 'react'
import { connect } from 'react-redux';

import { setInputCredentials, authenticate } from '../state/actions/session';

import FormGroup from '../FormGroup/FormGroup';

import './LoginForm.scss';

const LoginForm = ({login, password, error, setLogin, setPassword, authenticate, ...props}) => {
  return (
    <div className="login-form" {...props}>
      <form onSubmit={ (e) => { e.preventDefault(); authenticate() } }>
        <FormGroup label="Login">
          <input className="banking-input" type="text" onChange={(e) => setLogin(e.target.value)}
                 value={login} />
        </FormGroup>

        <FormGroup label="Password">
          <input className="banking-input" type="password" onChange={(e) => setPassword(e.target.value)}
                 value={password} />
        </FormGroup>

        <div className="login-form-submit">
          <button className="banking-button active banking-button-big" type="submit">Login</button>
        </div>

        { error && (
          <div className="error">
            { error }
          </div>
        ) }
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  login: state.session.login,
  password: state.session.password,
  error: state.session.error
});

const mapDispatchToProps = dispatch => ({
  setLogin: login => dispatch(setInputCredentials('login', login)),
  setPassword: password => dispatch(setInputCredentials('password', password)),
  authenticate: () => dispatch(authenticate())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
