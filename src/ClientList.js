// src/ClientList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ClientList.css'; // Importar o arquivo CSS para estilização

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  
  const fetchClients = async (pageNumber = 0) => {
    setLoading(true);
    try {
      const response = await axios.get('/clients', {
        params: {
          page: pageNumber,
          linesPerPage: 6,
          direction: 'ASC',
          orderBy: 'name'
        }
      });
      setClients(response.data.content);
      setTotalPages(response.data.totalPages);
      setPage(response.data.number);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handlePageChange = (newPage) => {
    fetchClients(newPage);
  };

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  return (
    <div className="client-list">
      <h1>Lista de Clientes</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Renda</th>
            <th>Data de Nascimento</th>
            <th>Filhos</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.cpf}</td>
              <td>{client.income.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
              <td>{new Date(client.birthDate).toLocaleDateString('pt-BR')}</td>
              <td>{client.children}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button 
          onClick={() => handlePageChange(page - 1)} 
          disabled={page === 0}
        >
          Anterior
        </button>
        <span>Página {page + 1} de {totalPages}</span>
        <button 
          onClick={() => handlePageChange(page + 1)} 
          disabled={page >= totalPages - 1}
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

export default ClientList;

