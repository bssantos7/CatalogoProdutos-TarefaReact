import { useState } from 'react'
import { useEffect } from 'react';
import Formulario from './Componentes/Fomulario';
import Table from './Componentes/Tabela';




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
    <Formulario onSubmit={cadastrarProduto} onChange={handleChange} produto={produto}/>
    <br />
    <Table listaProdutos={listaProdutos} onClick={excluirProduto}/>  
    </>
  );
}
export default App;
