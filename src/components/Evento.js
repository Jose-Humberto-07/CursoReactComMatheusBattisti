const Evento = () => {
    const meuEvento = () => {
        console.log('Opa, fui ativado...')
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar evento</button>
        </div>
    )
}

export default Evento