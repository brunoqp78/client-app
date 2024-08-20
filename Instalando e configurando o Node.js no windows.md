Aqui está o tutorial atualizado, adaptado para o sistema operacional Windows:

---

# Tutorial Completo: Instalação do Node.js, Configuração do React e Construção de um Frontend

Este tutorial guiará você pela instalação do Node.js no Windows, configuração de um projeto React, e construção de um frontend para consumir um endpoint desenvolvido em Spring Boot. A aplicação exibirá informações dos clientes com uma tabela traduzida para o português.

## 1. Instalação do Node.js no Windows

### 1.1. Baixar o Instalador do Node.js

1. Acesse o [site oficial do Node.js](https://nodejs.org/).
2. Na página inicial, escolha a versão LTS (Long Term Support) recomendada para a maioria dos usuários.
3. Clique no botão de download para Windows (arquivo `.msi`).

### 1.2. Executar o Instalador

1. Abra o arquivo `.msi` que você baixou.
2. Siga as instruções do assistente de instalação:
   - Clique em "Next" nas telas iniciais.
   - Aceite o contrato de licença e clique em "Next".
   - Escolha o diretório de instalação e clique em "Next".
   - Na tela "Select components", mantenha as opções padrão e clique em "Next".
   - Clique em "Install" para iniciar a instalação.
   - Após a conclusão, clique em "Finish".

### 1.3. Verificar a Instalação

1. Abra o Prompt de Comando (cmd) ou PowerShell.
2. Execute o seguinte comando para verificar a versão do Node.js:
   ```bash
   node -v
   ```
3. Verifique a versão do npm (Node Package Manager) com:
   ```bash
   npm -v
   ```

## 2. Configuração de um Projeto React

### 2.1. Instalar o Create React App

1. Abra o Prompt de Comando (cmd) ou PowerShell.
2. Execute o seguinte comando para criar um novo projeto React:
   ```bash
   npx create-react-app client-app
   ```

### 2.2. Navegar até o Diretório do Projeto

1. No Prompt de Comando (cmd) ou PowerShell, navegue até o diretório do projeto:
   ```bash
   cd client-app
   ```

### 2.3. Instalar Axios para Requisições HTTP

1. Ainda no diretório do projeto, execute o seguinte comando para instalar o Axios:
   ```bash
   npm install axios
   ```
