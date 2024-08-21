### Destaques das Mudanças Necessárias para Implementar a Paginação

Ao adaptar o frontend React para lidar com um JSON paginado, foram necessárias as seguintes mudanças em relação ao tutorial original:

#### 1. **Estrutura do Estado e Configuração Inicial**

Adicionamos novos estados para armazenar informações relacionadas à paginação:

```javascript
const [page, setPage] = useState(0);
const [totalPages, setTotalPages] = useState(1);
```

- **`page`**: Armazena o número da página atual.
- **`totalPages`**: Armazena o número total de páginas disponíveis.

#### 2. **Modificação da Função de Busca de Dados**

A função `fetchClients` foi modificada para aceitar um parâmetro `pageNumber`, que permite buscar clientes de uma página específica:

```javascript
const fetchClients = async (pageNumber = 0) => {
  setLoading(true);
  try {
    const response = await axios.get('/clients', {
      params: {
        page: pageNumber,
        linesPerPage: 12,
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
```

#### 3. **Implementação da Lógica de Paginação**

Foi adicionada uma lógica para permitir a navegação entre as páginas, utilizando botões "Anterior" e "Próxima":

```javascript
const handlePageChange = (newPage) => {
  fetchClients(newPage);
};
```

Esta função é chamada ao clicar nos botões de navegação:

```javascript
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
```

#### 4. **Atualizações Visuais e de Usabilidade**

Para melhorar a experiência do usuário, foram feitos ajustes no CSS para:

- Exibir claramente a paginação.
- Desabilitar os botões "Anterior" e "Próxima" quando não é possível navegar além da página atual.
- Exibir o número da página atual e o total de páginas.

#### **Conclusão**

As principais mudanças envolvem a adição de estados e funções para lidar com a paginação e a modificação da interface para refletir essas funcionalidades. Agora, o frontend React consegue navegar entre as páginas de clientes, oferecendo uma experiência de usuário mais robusta ao lidar com grandes conjuntos de dados paginados.
