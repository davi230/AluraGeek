import './App.css';
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import Form from "./Componentes/Form";
import CardProduto from './Componentes/CardProduto';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

function App() {
  const listaDeProdutosInicial = [
    {
      id: uuidv4(),
      nome: 'Stormtrooper',
      valor: '60,00',
      imagem: 'https://i.ibb.co/wQsKCyw/Stormtrooper.png'
    },
    {
      id: uuidv4(),
      nome: 'Game Boy Classic',
      valor: '60,00',
      imagem: 'https://i.ibb.co/ynGbr3Y/Game-Boy-Classic.png'
    },
    {
      id: uuidv4(),
      nome: 'Stormtrooper',
      valor: '60,00',
      imagem: 'https://i.ibb.co/wQsKCyw/Stormtrooper.png'
    },
    {
      id: uuidv4(),
      nome: 'Game Boy Classic',
      valor: '60,00',
      imagem: 'https://i.ibb.co/ynGbr3Y/Game-Boy-Classic.png'
    },
    {
      id: uuidv4(),
      nome: 'Stormtrooper',
      valor: '60,00',
      imagem: 'https://i.ibb.co/wQsKCyw/Stormtrooper.png'
    },
    {
      id: uuidv4(),
      nome: 'Game Boy Classic',
      valor: '60,00',
      imagem: 'https://i.ibb.co/ynGbr3Y/Game-Boy-Classic.png'
    },
    {
      id: uuidv4(),
      nome: 'Stormtrooper',
      valor: '60,00',
      imagem: 'https://i.ibb.co/wQsKCyw/Stormtrooper.png'
    },
    {
      id: uuidv4(),
      nome: 'Game Boy Classic',
      valor: '60,00',
      imagem: 'https://i.ibb.co/ynGbr3Y/Game-Boy-Classic.png'
    },
    {
      id: uuidv4(),
      nome: 'Game Boy Classic',
      valor: '60,00',
      imagem: 'https://i.ibb.co/wQsKCyw/Stormtrooper.png'
    }
  ];

  const [produtos, setProdutos] = useState(listaDeProdutosInicial);

  const addProdutoCatalogo = (produto) => {
    const novoProduto = {
      id: uuidv4(),
      ...produto
    };
    setProdutos([...produtos, novoProduto]);
  };

  const removerProduto = (id) => {
    setProdutos(produtos.filter(produto => produto.id !== id));
  };

  return (
    <>
      <Header />

      <main className='main'>
        <section className='catalogo'>
          <p className='titulo'>Meus Produtos:</p>
          <ul className='catalogo-lista'>
            {produtos.map((produto) => (
              <li key={produto.id}>
                <CardProduto
                  nome={produto.nome}
                  valor={produto.valor}
                  imagem={produto.imagem}
                  aoDeletar={() => removerProduto(produto.id)}
                />
              </li>
            ))}
          </ul>
        </section>

        <section className='formulariio'>
          <p className='titulo'>Adicionar Produto:</p>
          <Form aoAdicionarProduto={addProdutoCatalogo} />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
