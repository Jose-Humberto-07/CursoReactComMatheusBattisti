import { useState } from "react";


const RenderCondicional = () => {

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    const enviarEmail = (e) => {
        e.preventDefault()
        setUserEmail(email);
    }

    const limparEmail = () => {
       
        setUserEmail("");
    }

    return (
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type="email" 
                placeholder="Digite aqui o seu email."
                onChange={(e) =>  setEmail(e.target.value)}
                ></input>
                <button type="submit" onClick={enviarEmail}>
                    Eviar email
                </button>
                {
                    userEmail && (
                        <div>
                            <p>O e-mail do usuário é: {userEmail}</p>
                            <button onClick={limparEmail}>Limpar e-mail</button>
                        </div>
                    )
                }
            </form>
        </div>
    )
}


export default RenderCondicional;