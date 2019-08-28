import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login-component';

export default class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
       picture: ''
    }


    render() {
        let fbContent;

        if(this.state.isLoggedIn) {
            fbContent = null

        } else {
            fbContent = (<FacebookLogin socialId="639381626583404"
            language="en_US"
            scope="public_profile,email"
            responseHandler={this.responseFacebook}
            xfbml={true}
            fields="id,email,name"
            version="v2.5"
            className="facebook-login"
            buttonText="Login With Facebook"/>)
        }
        return (
            <div>



            </div>
        )
    }
}