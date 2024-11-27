CREATE DATABASE livros;
USE livros;

CREATE TABLE livro (
    id_livro INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    autor VARCHAR(100),
    ano INT,
    disponivel BOOLEAN
);

SELECT * FROM livro;

CREATE TABLE usuario(
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50)
);
	
CREATE TABLE emprestimos(
	id_emprestimo INT PRIMARY KEY AUTO_INCREMENT,
	id_livro INT,
	id_usuario INT,
	data_emprestimo DATE,
	data_devolucao DATE,
		
	CONSTRAINT fkemprestimoelivro
	FOREIGN KEY (id_livro)
	REFERENCES livro(id_livro),
		
	CONSTRAINT fkemprestimoeusuario
	FOREIGN KEY (id_usuario)
	REFERENCES usuario(id_usuario)
);
	
	SELECT * FROM usuario;