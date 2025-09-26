# 🚢 Sistema Titanic - Business Intelligence

## 📊 Visão Geral

Sistema simplificado e moderno para análise dos dados do Titanic, desenvolvido como parte do curso de Sistemas de Informação. Interface elegante com visualizações interativas e design responsivo.

## 🎯 Objetivo

Analisar padrões de sobrevivência no naufrágio do Titanic com foco em **gênero**, apresentando os dados de forma visual e interativa.

## 🏗️ Arquitetura

### Backend
- **FastAPI** - API REST simples e rápida
- **Pandas** - Processamento de dados
- **1 endpoint** - Dados consolidados

### Frontend  
- **HTML5 + CSS3 + JavaScript** - Interface moderna
- **Chart.js** - Gráficos interativos
- **Design responsivo** - Mobile e desktop

## 📁 Estrutura do Projeto

```
├── api.py          # API REST (26 linhas)
├── index.html      # Frontend moderno (332 linhas)  
├── run.py          # Script de execução (8 linhas)
└── README.md       # Documentação
```

## 🚀 Como Executar

### Execução Simples
```bash
python run.py
```

### Execução Manual
```bash
# Terminal 1 - API
python api.py

# Terminal 2 - Frontend  
# Abrir index.html no navegador
```

## 📊 Funcionalidades

### Análise por Gênero
- **Masculino vs Feminino** - Sobrevivência comparada
- **Estatísticas visuais** - Cards com métricas
- **Gráfico de barras** - Visualização interativa

### Interface Moderna
- **Design glassmorphism** - Efeito de vidro
- **Gradientes coloridos** - Visual atrativo
- **Animações suaves** - Transições elegantes
- **Responsivo** - Adapta a qualquer tela

## 🔧 API Endpoint

| Endpoint | Método | Descrição |
|----------|--------|-----------|
| `/` | GET | Dados consolidados do Titanic |

### Resposta da API
```json
{
  "masculino_sobreviveu": 109,
  "masculino_morreu": 468,
  "feminino_sobreviveu": 233,
  "feminino_morreu": 81,
  "total": 891
}
```

## 📈 Principais Descobertas

- **Total de Passageiros**: 891
- **Taxa de Sobrevivência Geral**: ~38.4%
- **Mulheres**: Maior taxa de sobrevivência
- **Homens**: Menor taxa de sobrevivência

## 🛠️ Tecnologias

### Backend
- **Python 3.12**
- **FastAPI** - Framework web
- **Pandas** - Análise de dados

### Frontend
- **HTML5** - Estrutura
- **CSS3** - Estilização moderna
- **JavaScript ES6+** - Interatividade
- **Chart.js** - Gráficos

## 🎨 Design Features

- **Gradientes** - Cores vibrantes
- **Glassmorphism** - Efeito de vidro
- **Animações** - Transições suaves
- **Responsivo** - Mobile-first
- **Tipografia** - Fonte Inter moderna

## 📱 Responsividade

- **Desktop** - Layout em grid
- **Tablet** - Adaptação automática  
- **Mobile** - Coluna única

## 🎓 Aspectos Acadêmicos

### Conceitos de BI
- **Análise Descritiva** - Estatísticas básicas
- **Visualização de Dados** - Gráficos informativos
- **APIs RESTful** - Arquitetura de serviços

### Competências
- **Python** - Backend development
- **Frontend** - HTML/CSS/JavaScript
- **Análise de Dados** - Pandas
- **Design** - Interface moderna

## 🚀 Execução Rápida

1. **Instalar dependências**:
   ```bash
   pip install fastapi uvicorn pandas
   ```

2. **Executar sistema**:
   ```bash
   python run.py
   ```

3. **Acessar**: `http://localhost:8000`

## 👥 Autoria

**Sistema de Business Intelligence**  
Curso: Sistemas de Informação - 6º Período  
Disciplina: Business Intelligence  
Ano: 2025

---

*Sistema simplificado e moderno para análise de dados do Titanic* 🚢