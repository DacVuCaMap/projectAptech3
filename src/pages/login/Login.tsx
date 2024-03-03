import { useEffect, useState } from 'react'
import './login.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [UserName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    // tạo axios để post lên api
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://103.163.215.105:8199/Users/Login", {
                UserName,
                Password
            }, { withCredentials: true })
            // xu ly phan hoi
            console.log(response.data);
            localStorage.setItem('userId',response.data.Object.UserID);
            //add clien token
            localStorage.setItem('token',response.data.Object['Token']);
            console.log("vao day");
            // navigate('/');




        } catch (error) {
            console.error('Error', error);
            setErrorMessage("Login failed. Please check your username and password.")
            setPassword('');
        }

    }

    return (
        <div className='login'>
            <div className="login-box">
                <div className="login-header">
                    <header>Welcome</header>
                    <p>We are happy to have you back!</p>
                </div>

                <form onSubmit={handleLogin}>
                    <div className="input-box">
                        <input
                            type="text"
                            className="input-field"
                            id="email" required
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <label >User Name</label>
                    </div>

                    <div className="input-box">
                        <input
                            type="password"
                            className="input-field"
                            id="password"
                            required
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label >Password</label>
                    </div>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <div className="forgot">
                        <section>
                            <input type="checkbox" id="check" />
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