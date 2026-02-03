import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novoTitulo, setNovoTitulo] = useState("");

  const API_URL = "http://localhost:8080/api/tarefas";

  const buscarTarefas = async () => {
    try {
      const res = await axios.get(API_URL);
      setTarefas(res.data);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    }
  };

  const adicionarTarefa = async (e) => {
    e.preventDefault();
    if (!novoTitulo) return;
    
    try {
      await axios.post(API_URL, { titulo: novoTitulo, concluida: false });
      setNovoTitulo("");
      buscarTarefas(); // Atualiza a lista
    } catch (error) {
      console.error("Erro ao salvar tarefa:", error);
    }
  };

  useEffect(() => {
    buscarTarefas();
  }, []);

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h1>Lista de Tarefas - IFTO</h1>
      
      <form onSubmit={adicionarTarefa} style={{ marginBottom: '20px' }}>
        <input 
          type="text"
          value={novoTitulo} 
          onChange={(e) => setNovoTitulo(e.target.value)} 
          placeholder="O que precisa ser feito?"
          style={{ padding: '10px', width: '70%' }}
        />
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>Adicionar</button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tarefas.map(t => (
          <li key={t.id} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
            {t.titulo} {t.concluida ? "✅" : "⏳"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;