const express = require('express');
const router = express.Router();
const mysql = require('../database/mysql').pool;

router.get('/', (req, res, next) => {
   mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error}) }
        conn.query(
            'SELECT * FROM produtos',
            (error, result, fields) => {
                if(error) {return res.status(500).send({ error: error}) }
                const response = {
                    quantidade: result.length,
                    produtos: result.map(prod => {
                        return {
                            id_produto: prod.id_produtos,
                            name: prod.name,
                            link: prod.link,
                            description: prod.description,
                            tags: prod.tags,
                            request: {
                                url: 'http://localhost:5000/produtos/' + prod.id_produtos
                            }
                        }
                    })
                }
                return res.status(200).send({ response})
            }
        )
   });
});

router.post('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({error: error}) }
        conn.query(
            'INSERT INTO produtos (name, link, description, tags) VALUES (?,?,?,?)',
            [req.body.name, req.body.link, req.body.description, req.body.tags],
            (error, result, field) => {
                conn.release(); // para liberar a conecção
                if (error) { return res.status(500).send({error: error}) }
                const response = {
                    mensagem: 'Produto inserido com sucesso',
                    produtoCriado: {
                        id_produto: result.id_produtos,
                        name: req.body.name,
                        link: req.body.link,
                        description: req.body.description,
                        tags: req.body.tags,
                        request: {
                            url: 'http://localhost:5000/produtos'
                        }
                    }
                }
                return res.status(201).send({ response })

            }
        )
    })
});

router.get('/:id_produtos', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error}) }
        conn.query(
            'SELECT * FROM produtos WHERE tags = ?;',
            [req.params.id_produtos],
            (error, result, fields) => {
                if(error) {return res.status(500).send({ error: error}) }
                
                if(result.length == 0) {
                    return res.status(404).send({
                        mensagem: 'Não foi encontrado produto com essa tag'
                    })
                }

                const response = {
                    produto: {
                        id_produto: result[0].id_produtos,
                        name: result[0].name,
                        link: result[0].link,
                        description: result[0].description,
                        tags:result[0].tags,
                        request: {
                            url: 'http://localhost:5000/produtos/' + result[0].id_produtos
                        }
                    }
                }
                return res.status(200).send({ response })
            }
            
        )
   });
})

router.patch('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({error: error}) }
        conn.query(
            `UPDATE produtos SET name = ?, link = ?, description = ?, tags = ?  WHERE id_produtos = ?`,
            [
                req.body.name, 
                req.body.link,
                req.body.description,
                req.body.tags,
                req.body.id_produto
            ],

            (error, resultado, field) => {
                conn.release();
                if (error) { return res.status(500).send({error: error}) }
                const response = {
                    mensagem: 'Produto alterado com sucesso',
                    produtoAtualizado: {
                        id_produto: req.body.id_produto,
                        name: req.body.name,
                        link: req.body.link,
                        description: req.body.description,
                        tags: req.body.tags,
                        request: {
                            url: 'http://localhost:5000/produtos/' + req.body.id_produto
                        }
                    }
                }
                return res.status(202).send({ response })

            }
        )    
    });
});

router.delete('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({error: error}) }
        conn.query(
            `DELETE FROM produtos WHERE tags = ?`, [req.body.id_produto],

            (error, resultado, field) => {
                conn.release();
                if (error) { return res.status(500).send({error: error}) }
                const response = {
                    mensagem: 'Produto removido com sucesso',
                    request: {
                        url: 'http://localhost:5000/produtos',
                    }
                }
                return res.status(202).send({ response})

            }
        )
    });
});

module.exports = router;