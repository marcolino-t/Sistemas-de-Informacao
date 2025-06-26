# Lista de Compras - Frontend React

Uma aplicação moderna de lista de compras desenvolvida em React que se integra com uma API REST em Go.

## 🚀 Funcionalidades

- ✅ Adicionar itens à lista de compras
- ✅ Editar itens existentes
- ✅ Excluir itens
- ✅ Visualizar total estimado da compra
- ✅ Interface responsiva e moderna
- ✅ Integração completa com API REST

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **Axios** - Cliente HTTP para requisições
- **Lucide React** - Ícones modernos
- **ESLint** - Linter para qualidade de código

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- Backend Go rodando na porta 8080

## 🔧 Instalação

1. **Clone o repositório e navegue até a pasta:**
   ```bash
   cd lista-de-compras
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Certifique-se de que o backend está rodando:**
   ```bash
   # Na pasta do backend Go
   go run main.go
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acesse a aplicação:**
   Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ItemForm.jsx      # Formulário para adicionar/editar itens
│   └── ItemList.jsx      # Lista de itens com ações
├── services/
│   └── api.js           # Serviço para comunicação com a API
├── App.jsx              # Componente principal
├── main.jsx             # Ponto de entrada
└── index.css            # Estilos globais
```

## 🔌 Integração com a API

A aplicação se conecta com os seguintes endpoints da API Go:

- `GET /itens` - Lista todos os itens
- `GET /itens/{id}` - Busca item específico
- `POST /itens` - Cria novo item
- `PUT /itens/{id}` - Atualiza item
- `DELETE /itens/{id}` - Remove item

### Modelo de Item

```json
{
  "id": 1,
  "nome": "Arroz Integral",
  "marca": "Tio João",
  "quantidade": 2,
  "preco": 8.50,
  "observacao": "Preferência por arroz integral"
}
```

## 🎨 Interface

A interface inclui:

- **Header** com título e botão para adicionar itens
- **Formulário** responsivo para adicionar/editar itens
- **Lista de itens** com cards modernos
- **Resumo** com total estimado da compra
- **Ações** de editar e excluir para cada item
- **Mensagens de erro** para feedback ao usuário

## 🚀 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza build de produção
- `npm run lint` - Executa linter

## 🔧 Configuração

### Alterando a URL da API

Para alterar a URL da API, edite o arquivo `src/services/api.js`:

```javascript
const API_BASE_URL = 'http://localhost:8080'; // Altere conforme necessário
```

### Personalizando o Design

O projeto usa Tailwind CSS. Para personalizar:

1. Edite `tailwind.config.js` para modificar cores e temas
2. Modifique `src/index.css` para estilos globais
3. Use classes do Tailwind nos componentes

## 🐛 Solução de Problemas

### Erro de CORS

Se encontrar erros de CORS, certifique-se de que o backend Go está configurado para aceitar requisições do frontend.

### Erro de Conexão

Se a aplicação não conseguir conectar com a API:
1. Verifique se o backend está rodando na porta 8080
2. Confirme se a URL da API está correta em `src/services/api.js`
3. Verifique se não há firewall bloqueando a conexão

## 📝 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature
3. Fazer commit das suas mudanças
4. Abrir um Pull Request

---

Desenvolvido com ❤️ usando React e Go
