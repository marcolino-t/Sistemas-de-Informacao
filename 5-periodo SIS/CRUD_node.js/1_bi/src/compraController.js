// Função para conexão com o banco de dados
async function connect() {
    if (global.connection && global.connection.state != 'disconnected') {
        return global.connection;
    }

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'lista_compras_db' 
    });
    global.connection = connection;
    return connection;
}

// Função para adicionar uma nova compra (POST)
exports.post = async (req, res, next) => {
    try {
        const con = await connect();
        const sql = 'INSERT INTO lista_compras (nome, marca, quantidade, preco, observacao) VALUES (?, ?, ?, ?, ?)'; // Incluindo "marca"
        const values = [req.body.nome, req.body.marca, req.body.quantidade, req.body.preco, req.body.observacao]; // Incluindo "marca"
        await con.query(sql, values);
        res.status(201).send('Compra inserida com sucesso');
    } catch (error) {
        res.status(500).send({ error: 'Erro ao inserir compra' });
    }
}

// Função para atualizar uma compra (PUT)
exports.put = async (req, res, next) => {
    try {
        let id = req.params.id; 
        const con = await connect();
        const sql = 'UPDATE lista_compras SET nome = ?, marca = ?, quantidade = ?, preco = ?, observacao = ? WHERE id = ?'; 
        const values = [req.body.nome, req.body.marca, req.body.quantidade, req.body.preco, req.body.observacao, id]; 
        await con.query(sql, values);
        res.status(200).send({ message: 'Compra atualizada com sucesso' });
    } catch (error) {
        res.status(500).send({ error: 'Erro ao atualizar compra' });
    }
};

// Função para excluir uma compra (DELETE)
exports.delete = async (req, res, next) => {
    try {
        let id = req.params.id; 
        const con = await connect();
        const sql = 'DELETE FROM lista_compras WHERE id = ?'; 
        const values = [id];
        await con.query(sql, values);
        res.status(200).send('Compra excluída com sucesso');
    } catch (error) {
        res.status(500).send({ error: 'Erro ao excluir compra' });
    }
}

// Função para listar todas as compras (GET)
exports.get = async (req, res, next) => {
    try {
        const con = await connect();
        const [rows] = await con.query('SELECT * FROM lista_compras'); 
        res.status(200).send(rows);
    } catch (error) {
        res.status(500).send({ error: 'Erro ao listar compras' });
    }
}

// Função para buscar uma compra por ID (GET By ID)
exports.getByIdCompra = async (req, res, next) => {
    try {
        let id = req.params.id; 
        const con = await connect();
        const [rows] = await con.query('SELECT * FROM lista_compras WHERE id = ?', [id]); 
        if (rows.length === 0) {
            return res.status(404).send({ error: 'Compra não encontrada' });
        }
        res.status(200).send(rows);
    } catch (error) {
        res.status(500).send({ error: 'Erro interno no servidor' });
    }
}
