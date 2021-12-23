import Button from "./evento/Button"


const Evento = () => {
    const meuEvento = () => {
        console.log(`Opa, ativando primeiro evento... `);
    }

    const segundoEvento = () => {
        console.log("Ativando o sengundo evento");
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro evento"/>
            <Button event={segundoEvento} text="Segundo evento"/>
        </div>
    )
}

export default Evento