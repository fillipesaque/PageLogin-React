import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";
import { useState } from "react";

const Login = () => {

    const [ email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const handleSubmit = (ev) => {
        ev.preventDefault()
        
        alert("Enviando os Dados" + email + '-' + password)
        setEmail('')
        setPassword('')
    }

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>

            <h1>Acesse o Sistema </h1>
            <div className="input-field">
                <input 
                type="text" 
                placeholder="Digite o Email..." 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
                <FaUser className="icon" />
            </div>
            <div className="input-field" >
                <input 
                type="password" 
                placeholder="Digite A Senha..." 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />
                <FaLock className="icon" />
            </div>

            <div className="recall-forget">
                <label>
                    <input type="checkbox" />
                    Lembrar de mim
                </label>
                <a href="#"> Esqueceu a Senha?</a>
            </div>

            <button>Entrar</button>

            <div className="signup-link">
                <p>
                    Nao Possui Uma conta ? <a href="#"> Registrar</a>
                </p>
            </div>
        </form>
    </div>
  )
}

export default Login
