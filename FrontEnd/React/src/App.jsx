import { useEffect, useState } from 'react'
import Formulario from './Componentes/Fomulario';
import Table from './Componentes/Tabela';
import DashBoard from './Componentes/DashBoard';





function App() {

  const [produto, setProduto]=useState({
    codigo:'',
    nome:'',
    preco:'',
    descricao:'',
    imagem:"https://placehold.co/600x400",
  });

  const [listaProdutos, setListaProdutos]=useState(()=>{
    const produtosSalvos = localStorage.getItem("storageProdutos");

    return produtosSalvos?JSON.parse(produtosSalvos):[];
  });

  const [qtdItem, setQtdItem]=useState(0);

  const [mensagem, setMensagem]=useState('');


  function handleChange(evento){
    const{name, value}=evento.target;

    setProduto((produtoAnterior)=>({
      ...produtoAnterior, [name]:value
    }));   
  }

  function cadastrarProduto(evento){
    
    evento.preventDefault();

    const codProduto=qtdItem+1;

    const novoProduto={...produto, codigo:codProduto};

    setQtdItem(codProduto);
    setListaProdutos((listaAnterior)=>[...listaAnterior,novoProduto]);

    setProduto(
      {codigo:'',
      nome:'',
      preco:'',
      descricao:'',
      imagem:"https://placehold.co/600x400",
    })
  }


  function excluirProduto(id) {
    setListaProdutos((listaAnterior) =>
      listaAnterior.filter((produto) => produto.codigo != id)
    );
  }

  useEffect(()=>{
    localStorage.setItem("storageProdutos",JSON.stringify(listaProdutos));

  },[listaProdutos]);
  
  return (
    <>
      <div>
        <div className="container-sm">
          <div className="row">
            <h1>Cadastro de Produtos</h1>
          </div>
          <div className="row">
              <div className="col">
                <Formulario onSubmit={cadastrarProduto} onChange={handleChange} produto={produto}/>
              </div>
              <div className="col">
                <Table listaProdutos={listaProdutos} onClick={excluirProduto}/>
              </div>
          </div>
          <div className="row">
             <DashBoard listaProdutos={listaProdutos}/>
          </div>
        </div>
      </div>
    <br />
    </>
  );
}
export default App;
