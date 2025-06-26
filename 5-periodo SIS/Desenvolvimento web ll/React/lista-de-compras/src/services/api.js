import axios from 'axios';

// Em desenvolvimento, usa o proxy do Vite
// Em produção, usa a URL direta do servidor
const API_BASE_URL = import.meta.env.DEV ? '/api' : 'http://localhost:8080';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const itemService = {
  // Buscar todos os itens
  getAllItems: async () => {
    try {
      const response = await api.get('/itens');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar itens:', error);
      throw error;
    }
  },

  // Buscar item por ID
  getItemById: async (id) => {
    try {
      const response = await api.get(`/itens/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar item:', error);
      throw error;
    }
  },

  // Criar novo item
  createItem: async (item) => {
    try {
      const response = await api.post('/itens', item);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar item:', error);
      throw error;
    }
  },

  // Atualizar item
  updateItem: async (id, item) => {
    try {
      const response = await api.put(`/itens/${id}`, item);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar item:', error);
      throw error;
    }
  },

  // Deletar item
  deleteItem: async (id) => {
    try {
      const response = await api.delete(`/itens/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao deletar item:', error);
      throw error;
    }
  },
}; 