function Botao({type="button", acao}){
    return(

        <button type={type} className={acao ==="confirmar"?"btn btn-primary":"btn btn-danger"}>
            {acao==="confirmar"?"primary":"danger"}
        </button>

    );
}
export default Botao;

