SELECT c.n_numeclien, c.c_codiclien, c.c_razaoclien
FROM comclien c
WHERE c.c_codiclien LIKE 'L%'

SELECT c.n_numeclien,c.c_codiclien,c.c_razaoclien, FROM comclien c
WHERE c.n_numeclien IN (SELECT v.n_numeclien FROM comvenda v)

SELECT v.c_codivenda as CodVenda, 
(SELECT c.c_razaoclien FROM comclien c WHERE c.n_numeclien = v.n_numeclien ) AS Razao
FROM comvenda v

SELECT c.c_codiclien,c.c_razaoclien,
COUNT(*) AS quantidade
FROM comclien c, comvenda v
WHERE c.n_numeclien = v.n_numeclien
GROUP BY c.c_codiclien,c.c_razaoclien
HAVING COUNT(v.n_numevenda) > 1;

SELECT MAX(v.n_totavenda) maior_venda FROM comvenda v;
SELECT Min(v.n_totavenda) maior_venda FROM comvenda v;

SELECT SUM(v.n_valorvenda) valor_venda,
SUM(v.n_descvenda) descontos,
SUM(v.n_totavenda) total_venda
FROM comvenda v
WHERE v.d_datavenda
BETWEEN '2015-01-01 ' AND '2015-01-02'