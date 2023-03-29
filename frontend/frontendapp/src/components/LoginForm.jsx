import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const LoginForm = () => {

    const navigate = useNavigate();

    const url = 'http://127.0.0.1:8000/api/auth/login';    
    const [formdata, setFormData] = useState({
        username: '',
        password: ''
    });
    
    const inputChangeHandler = (event) => {                
        setFormData({
            ...formdata,
            [event.target.name] : event.target.value
        });
    }

    const submitForm = (event) => {
        event.preventDefault();               
        if (formdata.username!="" && formdata.password !="")
            userValidation();        
    }

    const userValidation = async () => { 
        document.getElementById('result').innerHTML = '';       
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({email: formdata.username, password: formdata.password }),
            headers: {'Content-type':'application/json;charset=UTF-8'}
        })
        .then(response => {
            if (!response.ok){                
                throw new Error(response.statusText);
            }
            return response.json()            
        })
        .then(response => {
            localStorage.setItem('access-token', response.access);
            localStorage.setItem('refresh-token', response.refresh);
            return navigate('/home');                       
        })
        .catch(error => {            
            document.getElementById("result").append(error);
        });
    }

    

    return (

        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
            <div className="card-body">
                    <form onSubmit={ submitForm }> 
                        <h5 className="text-center mb-4">Ingreso de Usuarios</h5>           
                        
                        <label className="form-label" htmlFor="username">Username</label>
                        <div className="form-outline input-group mb-4">                            
                            <span className="input-group-text" id="basic-addon1">👤</span>
                            <input type="text" id="username" 
                                               name="username" 
                                               className="form-control"                                                
                                               placeholder="Username" 
                                               aria-label="Username" 
                                               aria-describedby="basic-addon1" 
                                               value={ formdata.username } 
                                               onChange={ inputChangeHandler } />
                        </div>

                        <label className="form-label" htmlFor="password">Password</label>
                        <div className="form-outline input-group mb-4">                            
                            <span className="input-group-text" id="basic-addon1">🔑</span>
                            <input type="password" id="password" 
                                                   name="password" 
                                                   className="form-control"                                                    
                                                   placeholder="********" 
                                                   aria-label="Username" 
                                                   aria-describedby="basic-addon1" 
                                                   value={ formdata.password } 
                                                   onChange={ inputChangeHandler } />
                        </div>
                        
                        <div className="row mb-4 d-none">
                            <div className="col d-flex justify-content-center">                    
                            <a href="#!">Forgot your password?</a>    
                            </div>                            
                        </div>    
                        <div className="row mb-4">
                            <div className="col d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                            </div>
                        </div>                                            
                        <div className="text-center">
                            <p>Not a member? <Link to='register'>Register</Link></p>
                            <p>or sign up with:</p>
                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-google"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-twitter"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-github"></i>
                            </button>
                        </div>
                        <div id="result"></div>
                </form>
            </div>                        
        </div>
        
    )
}
