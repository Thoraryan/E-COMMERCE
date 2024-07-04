import React from 'react'

const ForgotPassword = () => {
    return (
        <div className="form">
            <div className="Change-Password align-middle">
                <div className="cp-form border p-5">
                    <div className="cp-logo-wrapper">
                        <div className="cp-logo text-center">
                            <h1 className="head-text">Forgot <span className="head-text2">Password</span></h1>
                            <p className>Please enter your registered Email Address to receive the OTP</p>
                        </div>
                    </div>
                    <form>
                        <div className="form-group py-2">
                            <label htmlFor="Email">Enter Email</label>
                            <input type="Email" className="form-control my-2" placeholder="user@gmail.com" />
                        </div>
                        <a href="./otp.html" className="btn btn-primary py-2 my-3 login-btn">submit</a>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default ForgotPassword