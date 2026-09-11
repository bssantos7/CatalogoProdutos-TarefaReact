import Botao from './Botao';
import InputText from './InputText';

function Formulario({onSubmit, onChange, produto}){
    return(
        <form className="fomulario" onSubmit={onSubmit}>
            <fieldset>
                    <InputText campo="nome" type="text" placeholder="Digite o nome do Produto" onChange={onChange} value={produto.nome}/>
                    <InputText campo="preco" type="number" placeholder="Digite o valor do Produto" onChange={onChange} value={produto.preco}/>
                    <InputText campo="descricao" type="text" placeholder="Digite a descrição do produto" onChange={onChange} value={produto.descricao}/>
                    <Botao type="submit" acao="confirmar"/>
                    <Botao acao="cancelar"/>
            </fieldset>
        </form>
    );
}
export default Formulario;