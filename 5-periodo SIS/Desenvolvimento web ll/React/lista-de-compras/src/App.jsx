import React, { useState, useEffect } from 'react';
import { Plus, ShoppingCart, AlertCircle } from 'lucide-react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import { itemService } from './services/api';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  // Carregar itens da API
  const loadItems = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await itemService.getAllItems();
      setItems(data);
    } catch (err) {
      setError('Erro ao carregar itens. Verifique se o servidor está rodando.');
      console.error('Erro ao carregar itens:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  // Adicionar novo item
  const handleAddItem = async (itemData) => {
    try {
      await itemService.createItem(itemData);
      setShowForm(false);
      loadItems(); // Recarregar lista
    } catch (err) {
      setError('Erro ao adicionar item.');
      console.error('Erro ao adicionar item:', err);
    }
  };

  // Editar item
  const handleEditItem = async (itemData) => {
    try {
      await itemService.updateItem(editingItem.id, itemData);
      setEditingItem(null);
      loadItems(); // Recarregar lista
    } catch (err) {
      setError('Erro ao atualizar item.');
      console.error('Erro ao atualizar item:', err);
    }
  };

  // Deletar item
  const handleDeleteItem = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este item?')) {
      try {
        await itemService.deleteItem(id);
        loadItems(); // Recarregar lista
      } catch (err) {
        setError('Erro ao excluir item.');
        console.error('Erro ao excluir item:', err);
      }
    }
  };

  // Iniciar edição
  const handleStartEdit = (item) => {
    setEditingItem(item);
    setShowForm(false);
  };

  // Cancelar edição
  const handleCancelEdit = () => {
    setEditingItem(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Lista de Compras</h1>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              <Plus className="w-4 h-4" />
              Adicionar Item
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-md p-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-400" />
              <p className="text-red-800">{error}</p>
            </div>
            <button
              onClick={() => setError(null)}
              className="mt-2 text-sm text-red-600 hover:text-red-800 underline"
            >
              Fechar
            </button>
          </div>
        )}

        {/* Form Section */}
        {showForm && (
          <ItemForm
            onSubmit={handleAddItem}
            onCancel={() => setShowForm(false)}
          />
        )}

        {editingItem && (
          <ItemForm
            item={editingItem}
            onSubmit={handleEditItem}
            onCancel={handleCancelEdit}
            isEditing={true}
          />
        )}

        {/* Items List */}
        <ItemList
          items={items}
          onEdit={handleStartEdit}
          onDelete={handleDeleteItem}
          loading={loading}
        />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            © 2025 Lista de Compras - Desenvolvido com React e Go
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
