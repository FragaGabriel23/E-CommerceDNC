import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import Header from '../../components/Header/Header'

const Login = () => {
    return (
        <section className='login'>
            <Header />
            <form className='login__form'>
                <h1>Acesse com seu login ou cadastre-se!</h1>
                <h2>você pode entrar com o seu CPF</h2>

                <div className="login__input-wrapper">
                    <label htmlFor="login">Digite seu Login:</label>
                    <input type='text' placeholder='Login' name='login' required></input>

                    <label htmlFor="password">Senha:</label>
                    <input type='password' placeholder='***************' name='password' required></input>
                </div>

                <button type='submit'>
                    <Link to={"/home"}>Entrar</Link>
                </button>
            </form >
        </section>
    )
}

export default Login