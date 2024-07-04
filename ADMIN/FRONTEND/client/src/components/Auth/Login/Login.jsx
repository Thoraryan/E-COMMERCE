

const Login = ()=>{
  return(
    <>
       <div className="form">
  <div className="Admin-login align-middle">
    <div className="login-form border p-5">
      <div className="login-logo-wrapper">
        <div className="login-logo text-center">
          <h2 className>Login for <span className="head-text">Admin</span> <span className="head-text2">Login</span>
          </h2>
          <p className>Please Enter Your Email &amp; Password</p>
        </div>
      </div>
      <form>
        <div className="form-group py-2">
          <label htmlFor="Email">User Email</label>
          <input type="email" className="form-control my-2" placeholder="user@gmail.com" />
        </div>
        <div className="form-group py-2">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control my-2" placeholder="******" />
        </div>
        <a href="./forgot_password.html" className="forgot-password">Forgot Password?</a>
        <a href="index.html" className="btn btn-primary mt-3 py-2 login-btn">Log In</a>
      </form>
    </div>
  </div>
</div>

    </>
)
}
export default Login