-- Active: 1788436126633@@127.0.0.1@3308@sesi_cr_ta

--cadastre dois novos clientes, cadastre uma nova categoria Especiais da Casa, insira um dos clientes cadastrados, use last_insert_id() para inserir pelo menos dois itens no pedido.

DROP DATABASE IF EXISTS SMARTCOFEE_EXERCICIO_SOPHIA;
CREATE DATABASE IF NOT EXISTS SMARTCOFEE_EXERCICIO_SOPHIA;
USE SMARTCOFEE_EXERCICIO_SOPHIA;

CREATE TABLE cliente (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(120) UNIQUE,
    telefone VARCHAR(15),
    cidade VARCHAR(60) NOT NULL,
    ativo BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE categoria (
    id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE produto (
    id_produto INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2) NOT NULL,
    ativo BOOLEAN NOT NULL DEFAULT TRUE,
    id_categoria INT NOT NULL,
    CONSTRAINT fk_categoria FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria)
);

CREATE TABLE pedido (
    id_pedido INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    data_pedido DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    valor_total DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    status_pedido ENUM('ABERTO', 'PREPARANDO', 'FINALIZADO', 'CANCELADO') NOT NULL DEFAULT 'ABERTO',
    CONSTRAINT fk_pedido_cliente FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
);

CREATE TABLE item_pedido (
    id_item INT PRIMARY KEY AUTO_INCREMENT,
    id_pedido INT NOT NULL,
    id_produto INT NOT NULL,
    quantidade INT NOT NULL DEFAULT 1,
    preco_unitario DECIMAL(10, 2) NOT NULL,
    observacao VARCHAR(150),
    CONSTRAINT fk_item_pedido FOREIGN KEY (id_pedido) REFERENCES pedido(id_pedido),
    CONSTRAINT fk_item_produto FOREIGN KEY (id_produto) REFERENCES produto(id_produto)
);

SELECT * FROM categoria;

INSERT INTO cliente (nome, email, telefone, cidade) VALUES
('Ana Silva', 'ana.silva@email.com', '11999999999', 'São Paulo'),
('Pedro Santos', 'pedro.santos@email.com', NULL, 'Belo Horizonte'),
('Julia Costa', 'julia.costa@email.com', '11666666666', 'Curitiba');

INSERT INTO categoria (nome) VALUES
('Cafe'), ('Bebidas Quentes'), ('Bebidas Frias'), ('Doces'), ('Salgados'), ('Combo');

UPDATE categoria SET nome = 'Especiais da Casa' WHERE id_categoria = 7;

INSERT INTO pedido (id_cliente, data_pedido, status_pedido, valor_total) VALUES 
(1, '2026-09-14 10:00:00', 'ABERTO', 10.00),
(2, '2026-09-14 11:00:00', 'PREPARANDO', 6.00);

UPDATE 