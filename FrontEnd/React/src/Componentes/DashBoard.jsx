import Card from "./Card";

function DashBoard(listaProdutos){
    const lista=[...listaProdutos];
    return(
        <div className="container">
            {lista.map((produto)=>(
                <Card  idCard={produto.codigo} src={produto.imagem} titulo={produto.nome} preco={produto.preco} descricao={produto.descricao}/>
            ))}
        </div>
    )
}
export default DashBoard;