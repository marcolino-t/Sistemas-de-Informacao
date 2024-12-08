//cria usuario e senha
CREATE user usermysql@'%' IDENTIFIED BY 'cursomysql';


SELECT USER FROM mysql.user

GRANT ALL PRIVILEGES ON *.* TO usermysql@'%';

SELECT USER, HOST,PASSWORD,process_priv FROM mysql.user

REVOKE ALL ON *.* FROM usermysql@'%';

DESC mysql.user;

SHOW DATABASES;

GRANT ALL PRIVILEGES ON gestaodb.`*` TO usermysql@'%';

REVOKE ALL PRIVILEGES  ON gestaodb.`*`   FROM usermysql@'%';

GRANT ALL PRIVILEGES ON gestaodb.colaboradores TO usermysql@'%';

SHOW GRANTS FOR usermysql@'%';