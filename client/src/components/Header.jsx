import React, { Component } from 'react';
// import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signOutUser } from '../redux/signin/signin.action'
import swal from 'sweetalert'

class Header extends Component {
    signOut = () => {
        swal({
            title: "Are you sure to Logout?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    localStorage.removeItem('userId')
                    localStorage.removeItem('userToken')
                    localStorage.removeItem('username')
                    this.props.signOutUser()
                }
            });
    }


    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand">React Password Manager</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <button type="button" className="btn btn-danger navbar-btn" onClick={this.signOut}>Log Out</button>
                        </ul>
                    </div>

                </div>
            </nav>
        );
    }
}


const mapDispatchToProps = (dispatch) => bindActionCreators({
    signOutUser
}, dispatch)

export default connect(null, mapDispatchToProps)(Header);
