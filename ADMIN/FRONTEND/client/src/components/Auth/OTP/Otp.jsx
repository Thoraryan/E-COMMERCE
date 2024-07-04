import React from 'react'

const OTP = () => {
    return (
        <div className="form">
            <div className="Change-Password align-middle">
                <div className="cp-form border p-5">
                    <div className="cp-logo-wrapper">
                        <div className="cp-logo text-center">
                            <h1 className="head-text">Receive <span className="head-text2">OPT</span></h1>
                            <p className>Please enter your OTP to receive your Email Address</p>
                        </div>
                    </div>
                    <form>
                        <div className="form-group d-flex justify-content-between mb-2">
                            <input type="text" className="form-control otp-input mx-2" maxLength={1} required />
                            <input type="text" className="form-control otp-input mx-2" maxLength={1} required />
                            <input type="text" className="form-control otp-input mx-2" maxLength={1} required />
                            <input type="text" className="form-control otp-input mx-2" maxLength={1} required />
                        </div>
                        <div className="d-flex justify-content-start">
                            <p className="px-2">
                                <span>0</span><span>1</span> : <span>0</span><span>0</span>
                            </p>
                        </div>
                        <a href className="forgot-password">Did't receive OTP</a>
                        <a href="./Change_password.html" className="btn btn-primary btn-block w-100 mt-3">Verify</a>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default OTP