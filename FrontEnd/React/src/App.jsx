import { useState } from 'react'
import { useEffect } from 'react';
import Formulario from './Componentes/Fomulario';



function App() {

  const [produto, setProduto]=useState({
    nome:'',
    preco:'',
    descricao:'',
  });
  const [listaProdutos, setListaProdutos]=useState([]);
  const [qtdItem, setQtdItem]=useState(0);
  const [mensagem, setMensagem]=useState('');

  useEffect(()=>{
    
  },[{cadastrarProduto}]);

  function handleChange(evento){
    const{name, value}=evento.target;

    setProduto((produtoAnterior)=>({
      ...produtoAnterior, [name]:value
    }));   
  }

  function cadastrarProduto(){
    setQtdItem(()=>qtdItem+1);
    setProduto(()=>({...listaProdutos,produto}));
  }


  return (
    <>
    <Formulario onSubmit={cadastrarProduto} onChange={handleChange} produto={produto}/>
    
    </>
  )
}
export default App;
