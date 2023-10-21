import React, { useState } from 'react';
import fetch from 'node-fetch';

function App() {
  const [produto, setProduto] = useState('');
  const [produtoId, setProdutoId] = useState('');

  const inserirProduto = async () => {
    try {
      const response = await fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome: produto }),
      });

      if (response.ok) {
        console.log('Produto inserido com sucesso.');
        setProduto('');
      } else {
        console.error('Erro ao inserir o produto.');
      }
    } catch (error) {
      console.error('Erro ao realizar a requisição POST:', error);
    }
  };

  const excluirProduto = async () => {
    try {
      const response = await fetch(`http://localhost:3000/produtos/${produtoId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Produto excluído com sucesso.');
        setProdutoId('');
      } else {
        console.error('Erro ao excluir o produto.');
      }
    } catch (error) {
      console.error('Erro ao realizar a requisição DELETE:', error);
    }
  };

  return (
    <div>
      <h1>Gerenciamento de Produtos</h1>
      <div>
        <h2>Inserir Produto</h2>
        <input
          type="text"
          value={produto}
          onChange={(e) => setProduto(e.target.value)}
        />
        <button onClick={inserirProduto}>Inserir</button>
      </div>
      <div>
        <h2>Excluir Produto</h2>
        <input
          type="text"
          value={produtoId}
          onChange={(e) => setProdutoId(e.target.value)}
        />
        <button onClick={excluirProduto}>Excluir</button>
      </div>
    </div>
  );
}

export default App;
