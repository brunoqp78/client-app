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

