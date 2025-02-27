async function connect() {
    if (global.connection && global.connection.state != 'disconnected') {
        return global.connection;
    }

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({
        host: '54.91.193.137',
        user: 'libertas',
        password: '123456',
        database: 'libertas5per'
    });
    global.connection = connection;
    return connection;
}

exports.post = async (req, res, next) => {
    const con = await connect();
    const sql = 'INSERT INTO usuario' 
                + '(nome, telefone, email)'
                + ' VALUES (?, ?, ? )';
    const values = [req.body.nome, req.body.telefone, req.body.email];
    await con.query(sql, values);
    res.status(201).send('inserido com sucesso');
}

exports.put = async (req, res, next) => {
    try {
        let id = req.params.id;
        const con = await connect();
        const sql = 'UPDATE usuario SET nome = ?, telefone = ?, email = ?  WHERE idusuario = ?';
        const values = [req.body.nome, req.body.telefone, req.body.email, id];
        await con.query(sql, values);
        res.status(200).send({ message: 'Usuário alterado com sucesso' });
    } catch (error) {
        res.status(500).send({ error: 'Erro ao atualizar usuário' });
    }
};


exports.delete = async  (req, res, next) => {
    let id = req.params.id;
    const con = await connect();
    const sql = 'DELETE FROM usuario WHERE idusuario =?';
    const values = [id];
    await con.query(sql, values);
    res.status(200).send('ok');
}

exports.get = async (req, res, next) => {
    const con = await connect();
    const [rows] = await con.query('SELECT * FROM usuario');
    res.status(200).send(rows);
}

exports.getById = async (req, res, next) => {
    try{
        let id = req.params.id;
        const con = await connect();
        const [rows] = await con.query('SELECT * FROM usuario WHERE idusuario =?', [id]);
        if (rows.length === 0) {
            return res.status(404).send({error: 'Usuario não encontrado'});
        }
        res.status(200).send(rows);
    } catch (error){
        res.status(500).send({error: 'Erro interno no servidor'});
    }
}