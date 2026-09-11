import Botao from "./Botao";

function Table({listaProdutos, onClick}){
    const lista=[...listaProdutos];
    return(
        <div>
            <table className="table">
                <thead>
                    <tr className="table-secondary">
                    <th scope="col">Código</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Preço</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((produto)=>(
                        <tr key={produto.codigo}>
                            <th scope="row">{produto.codigo}</th>
                            <td>{produto.nome}</td>
                            <td>{produto.preco}</td>
                            <td>{produto.descricao}</td>
                            <td><Botao type="button" acao="excluir" id={produto.codigo} onClick={()=>onClick(produto.codigo)}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}
export default Table;