# 🛒 Lista de Compras - Projeto Acadêmico

Sistema de lista de compras desenvolvido com **React** (frontend) e **Go** (backend).

## 📁 Estrutura do Projeto

```
React/
├── backend-api/          # API REST em Go
│   ├── config/          # Configuração do banco
│   ├── controllers/     # Controladores da API
│   ├── models/          # Modelos de dados
│   ├── routers/         # Rotas da API
│   └── main.go          # Arquivo principal
└── lista-de-compras/    # Frontend React
    ├── src/
    │   ├── components/  # Componentes React
    │   ├── services/    # Serviços de API
    │   └── App.jsx      # Componente principal
    └── package.json
```

## 🚀 Como Executar

### Opção 1: Script Automático (Recomendado)
```bash
# PowerShell
.\start-projects.ps1

# Ou Batch
start-projects.bat
```

### Opção 2: Manual

#### 1. Backend (Go)
```bash
cd backend-api
go run .
```

#### 2. Frontend (React)
```bash
cd lista-de-compras
npm run dev
```

## 🌐 URLs de Acesso

- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:8080
- **API Endpoints:**
  - GET `/itens` - Listar todos os itens
  - POST `/itens` - Criar novo item
  - PUT `/itens/{id}` - Atualizar item
  - DELETE `/itens/{id}` - Excluir item

## 🗄️ Banco de Dados

- **Sistema:** MySQL
- **Banco:** `lista_compras_db`
- **Tabela:** `lista_compras_db`

### Testar Conexão
```bash
cd backend-api
go run . test-db
```

## 🛠️ Tecnologias

- **Frontend:** React 19, Vite, Tailwind CSS, Axios
- **Backend:** Go, Gorilla Mux, MySQL
- **Ferramentas:** ESLint, PostCSS

## 📝 Funcionalidades

- ✅ Adicionar itens à lista
- ✅ Editar itens existentes
- ✅ Excluir itens
- ✅ Visualizar total estimado
- ✅ Interface responsiva
- ✅ Validação de dados 