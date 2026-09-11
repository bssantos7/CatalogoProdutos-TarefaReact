import { useState } from 'react'
import { useEffect } from 'react';
import Formulario from './Componentes/Fomulario';
import Table from './Componentes/Tabela';
import Card from './Componentes/Card';





function App() {

  const [produto, setProduto]=useState({
    codigo:'',
    nome:'',
    preco:'',
    descricao:'',
  });
  const [listaProdutos, setListaProdutos]=useState([]);
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
    })
  }


  function excluirProduto(id) {
    setListaProdutos((listaAnterior) =>
      listaAnterior.filter((produto) => produto.codigo != id)
    );
  }

    


  return (
    <>
      <div className="container">
        <div className="container text-center">
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
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
          </div>
        </div>
      </div>
    
    
    
    
    <br />
    
    
    </>
  );
}
export default App;
