<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
Tutorial Completo: Instalação do Node.js, Configuração do React e Construção de um Frontend

Este tutorial irá guiá-lo pela instalação do Node.js no Ubuntu, configuração de um projeto React, e construção de um frontend para consumir um endpoint desenvolvido em Spring Boot. A aplicação exibirá informações dos clientes com uma tabela traduzida para o português.

---

## 1. **Instalação do Node.js no Ubuntu**

### 1.1. **Remover Versões Antigas (se necessário)**
Se você já possui o Node.js instalado e deseja remover a versão atual:

```bash
sudo apt remove nodejs
```

### 1.2. **Instalar o Node Version Manager (nvm)**
O `nvm` facilita a instalação e o gerenciamento de múltiplas versões do Node.js:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
source ~/.bashrc
```

### 1.3. **Instalar uma Versão Superior do Node.js**
Instale a versão desejada do Node.js. Usaremos a versão 18 como exemplo:

```bash
nvm ls-remote
nvm install 18
```

### 1.4. **Verificar a Versão do Node.js**
Certifique-se de que a instalação foi bem-sucedida:

```bash
node -v
```

### 1.5. **Configurar a Versão Padrão do Node.js (opcional)**
Defina uma versão padrão se desejar:

```bash
nvm alias default 18
```

---

## 2. **Configuração de um Projeto React**

### 2.1. **Instalar o Create React App**
Crie um novo projeto React:

```bash
npx create-react-app client-app
```

### 2.2. **Navegar até o Diretório do Projeto**
Entre no diretório do seu projeto React:

```bash
cd client-app
```

### 2.3. **Instalar Axios para Requisições HTTP**
Instale o `axios` para consumir o endpoint:

```bash
npm install axios
```

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
>>>>>>> c0050b4 (Create README.md)
