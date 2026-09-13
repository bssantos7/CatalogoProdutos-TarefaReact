import Botao from "./Botao"

function Card({idCard, src, titulo, preco, descricao}){
    return(
        <div idCard={idCard} className="card" style={{width: "18rem"}}>
            <img src={src} className="card-img-top" alt="Imagem do Produto"/>
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">Preco {preco} - {descricao}.</p>
                <a href="#" className="btn btn-primary">Comprar!</a>
            </div>
        </div>
    )
}
export default Card