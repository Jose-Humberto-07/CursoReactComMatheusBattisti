import react from "react";

const Pessoa = ({ nome, idade, profissao}) => {
  return (
    <div>
    <h2>Nome: {nome}</h2>
    <p>Idade: {idade}</p>
    <p>Profossão: {profissao}</p>
    </div>
  )
}

export default Pessoa;