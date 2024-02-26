import './login.scss'

const Login = () => {
  return (
    <div className='login'>
    <div className="login-box">
        <div className="login-header">
            <header>Welcome</header>
            <p>We are happy to have you back!</p>
        </div>
        <form>
        <div className="input-box">
            <input type="text" className="input-field" id="email"  required/>
            <label >Email or phone</label>
        </div>
        <div className="input-box">
            <input type="password" className="input-field" id="password"  required/>
            <label >Password</label>
        </div>
        <div className="forgot">
            <section>
                <input type="checkbox" id="check"/>
                <label >Remember me</label>
            </section>
            <section>
                <a href="#" className="forgot-link">Forgot password?</a>
            </section>
        </div>
        <div className="input-box">
            <button className="input-submit" id="btn-login" type="submit">Login</button>
            
        </div>
        </form>
    </div>
    </div>
  )
}

export default Login