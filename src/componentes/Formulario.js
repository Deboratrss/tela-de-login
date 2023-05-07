import { useState } from "react";
import "./Formulario.css"

export function Formulario(){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState(false);
    
    const enviar = (onSubmit) => {
        onSubmit.preventDefault();

        if (email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)){
            setErro(false)
        } else {
            setErro(true)
        }

        console.log({
            email, senha
        })
    }

    const handleEmail = (OnChange) => {
        const novoEmail = OnChange.target.value;

        setEmail(novoEmail)

    }
    
    const handleSenha = (OnChange) => {
        setSenha(OnChange.target.value);
    }

    return (
        <form   className="formulario"
        onSubmit={enviar}>
            <label>
                Email:
                <input className="email"
                type="email"
                placeholder="Email"
                value={email}
                D9D9D9      onChange={handleEmail}/>
                {erro && <p>Endereço de Email invalido</p>}
            </label>
            <label>
                Senha:
                <input className="senha"
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={handleSenha}/>
            </label>
            <button className="entrar"
            type="submit">Entrar</button>          
        </form>
    )
}