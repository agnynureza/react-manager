import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import logo from '../logo.svg';
import { signInUser } from '../redux/signin/signin.action'

export class SignInForm extends Component {
    constructor() {
        super()
        this.state = {
            userData: {
                username_email: '',
                password: ''
            }
        }
    }

    handleSignIn = event => {
        this.setState({
            userData: {
                ...this.state.userData,
                [event.target.name]: event.target.value
            }
        })
    }

    signInUser = () => {
        const userDataSend = this.state.userData
        this.props.signInUser(userDataSend).then(() => {
            this.props.history.push('/dashboard')
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React Password Manager</h1>
                    <i> "we can manage your social media password properly"</i>
                </header>
                <section className="content" style={{ 'marginTop': '50px' }}>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="box box-warning">
                                <div className="box-body">
                                    <div className="form-group col-md-6 col-md-offset-3">
                                        <label>Username</label>
                                        <input name="username_email" type="text" onChange={this.handleSignIn} className="form-control" placeholder="Username or Email" />
                                    </div>
                                    <div className="form-group col-md-6 col-md-offset-3">
                                        <label>Password</label>
                                        <input name="password" onChange={this.handleSignIn} type="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-8 col-md-offset-2">
                                            <button type="submit" className="btn btn-success col-md-6 col-md-offset-3" onClick={this.signInUser}>Login</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-4 col-md-offset-4">
                                            <p>Dont have account ?</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-8 col-md-offset-2">
                                            <Link to={`/signup`}>
                                                <button type="submit" className="btn btn-warning btn-success col-md-6 col-md-offset-3">SignUp</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        signInUser
    }, dispatch)

export default connect(null, mapDispatchToProps)(SignInForm)
