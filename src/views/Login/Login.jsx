import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import Header from '../../components/Header/Header'

const Login = () => {
    const [loginData, setLoginData] = useState({ login: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setLoginData({ ...loginData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        loginData.login === '' && loginData.password === ''
            ?
            window.location.href = '/home'
            :
            alert('Login ou senha incorretos!');


    }

    return (
        <section className='login'>
            <Header />
            <form className='login__form' onSubmit={handleSubmit}>
                <div className="login__text">
                    <h1>Acesse com seu login ou cadastre-se!</h1>
                    <h2>você pode entrar com o seu CPF</h2>
                </div>

                <div className="login__input-wrapper">
                    <div className='login__input'>
                        <label htmlFor="login">Digite seu Login:</label>
                        <input type='text' placeholder='Login' name='login' value={loginData.login} onChange={handleChange} autoComplete="username" ></input>
                    </div>

                    <div className='login__input'>
                        <label htmlFor="password">Senha:</label>
                        <input type='password' placeholder='***************' name='password' value={loginData.password} onChange={handleChange} autoComplete="current-password" ></input>
                    </div>
                </div>

                <button type='submit'>Entrar</button>
            </form >
        </section>
    )
}

export default Login