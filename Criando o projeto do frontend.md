
---

## 3. **Construção do Frontend em React**

### 3.1. **Criar o Componente de Lista de Clientes**
Dentro da pasta `src`, crie um arquivo `ClientList.js`:

```bash
touch src/ClientList.js
```

Adicione o seguinte código ao arquivo `ClientList.js`, com uma tabela traduzida para o português:

```javascript
// src/ClientList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ClientList.css'; // Importar o arquivo CSS para estilização

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('/clients', {
          params: {
            page: 0,
            linesPerPage: 12,
            direction: 'ASC',
            orderBy: 'name'
          }
        });
        setClients(response.data.content);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

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
    </div>
  );
};

export default ClientList;
```

### 3.2. **Adicionar Estilização com CSS**
Crie um arquivo `ClientList.css` na pasta `src` e adicione estilos para melhorar o design:

```css
/* src/ClientList.css */
.client-list {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.client-list h1 {
  text-align: center;
  color: #333;
}

.client-list table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.client-list th, .client-list td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.client-list th {
  background-color: #f4f4f4;
}

.client-list tr:nth-child(even) {
  background-color: #f9f9f9;
}

.client-list tr:hover {
  background-color: #f1f1f1;
}

.loading {
  text-align: center;
  font-size: 20px;
  color: #666;
}
```

### 3.3. **Modificar o Componente Principal**
No arquivo `src/App.js`, importe e use o componente `ClientList`:

```javascript
import React from 'react';
import ClientList from './ClientList';

function App() {
  return (
    <div className="App">
      <ClientList />
    </div>
  );
}

export default App;
```

### 3.4. **Configurar um Proxy para o Backend (opcional)**
Se o backend estiver rodando em um servidor diferente, adicione um proxy no `package.json` para evitar problemas com CORS:

```json
"proxy": "http://localhost:8080"
```

### 3.5. **Rodar o Projeto React**
Inicie o servidor de desenvolvimento:

```bash
npm start
```

Isso abrirá o navegador automaticamente e exibirá a lista de clientes consumida do backend Spring Boot.

---

## 4. **Consultar o Projeto no Navegador**

### 4.1. **Acessar a URL**
Se o navegador não abrir automaticamente, abra manualmente e digite a URL:

```
http://localhost:3000
```

### 4.2. **Lidar com Problemas de Conexão**
Se você não conseguir acessar a aplicação, verifique:

- **Se o Servidor Está Rodando:** O servidor de desenvolvimento deve estar ativo.
- **Mensagens de Erro no Terminal:** Verifique o terminal para mensagens de erro.
- **Configuração de Proxy:** Se configurado, verifique se o backend está acessível no endereço correto.
- **Configurações de Rede:** Verifique possíveis bloqueios de rede ou firewall.

### 4.3. **Atualizar a Página**
Após alterações no código, salve os arquivos e o navegador deve atualizar automaticamente. Caso contrário, atualize manualmente.
