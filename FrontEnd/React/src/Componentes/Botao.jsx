function Botao({type="button", acao, onClick}){
    return(

        <button type={type} className={acao ==="confirmar"?"btn btn-primary":"btn btn-danger"} onClick={onClick}>
            {acao}
        </button>

    );
}
export default Botao;

