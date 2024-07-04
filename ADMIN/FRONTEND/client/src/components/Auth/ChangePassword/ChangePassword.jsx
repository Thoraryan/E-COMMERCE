import React from 'react'

const ChangePassword = () => {
  return (
     <div className="form">
                <div className="Change-Password">
                    <div className="cp-form border p-5">
                        <div className="cp-logo-wrapper">
                            <div className="cp-logo text-center">
                                <h1 className="head-text">Reset <span className="head-text2">Password</span></h1>
                                <p className>Enter Your New Password </p>
                            </div>
                        </div>
                        <form>
                            <div className="form-group py-2">
                                <label htmlFor="password">New Password</label>
                                <input type="password" className="form-control my-2" placeholder="******" />
                            </div>
                            <div className="form-group py-2">
                                <label htmlFor="password">Confirm New Password</label>
                                <input type="password" className="form-control my-2" placeholder="******" />
                            </div>
                            <a href="Login.html" className="btn btn-primary py-2 login-btn">save</a>
                        </form>
                    </div>
                </div>
            </div>
  )
}

export default ChangePassword