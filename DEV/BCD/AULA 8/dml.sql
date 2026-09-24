-- Active: 1788436126633@@127.0.0.1@3308@sesi_cr_ta
--- BANCO DE DADOS - SMARTCOFFEE - DML

DROP DATABASE IF EXISTS SMARTCOFFEE_DML_SOPHIA;

CREATE DATABASE IF NOT EXISTS SMARTCOFFEE_DML_SOPHIA;

USE SMARTCOFFEE_DML_SOPHIA;

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

CREATE TABLE forma_pagamento (
    id_forma_pagamento INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE pagamento (
    id_pagamento INT PRIMARY KEY AUTO_INCREMENT,
    id_pedido INT NOT NULL,
    id_forma_pagamento INT NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    data_pagamento DATETIME,
    CONSTRAINT fk_pagamento_pedido FOREIGN KEY (id_pedido) REFERENCES pedido(id_pedido),
    CONSTRAINT fk_forma_pagamento FOREIGN KEY (id_forma_pagamento) REFERENCES forma_pagamento(id_forma_pagamento)
);



INSERT INTO cliente (nome, email, telefone, cidade, ativo) VALUES 
('Luis Felipe', 'luis@email.com', '1999999991', 'Limeira', TRUE),
('Maria Eduarda', 'maria@email.com', '1999999992', 'Limeira', TRUE),
('Mateus Silva', 'mateus@email.com', '1999999993', 'Limeira', TRUE),
('Matheus Oricolli', 'matheus@email.com', '1999999994', 'Limeira', TRUE),
('Nicolas Filipe', 'nicolas@email.com', '1999999995', 'Limeira', TRUE),
('Otavio Correia', 'otavio@email.com', '1999999996', 'Conchal', TRUE),
('Pedro Mirando', 'pedro@email.com', '1999999997', 'Berlim', TRUE),
('Rafael Viera', 'rafael@email.com', NULL, 'Limeira', TRUE),
('Rebecca', 'rebecca@email.com', NULL, 'Limeira', TRUE),
('Rennan Campos', 'rennan@email.com', '1999999998', 'Americanas', TRUE),
('Samira Dalosto', 'samira@email.com', NULL, 'Ourinhos', TRUE),
('Sophia Carolina', 'sophia@email.com', '1999999911', 'Taubate', TRUE),
('Stefany Santanas', 'stefany@email.com', NULL, 'Ourinhos', FALSE),
('Vanessa Queiroz', 'vanessa@email.com', '1999999912', 'Limeira', TRUE),
('Vinicius OlhoVerde', 'viniciusv@email.com', '1999999913', 'Limeira', TRUE),
('Vinicius OlhoAzul', 'viniciusa@email.com', '1999999914', 'Chicago', TRUE);


SELECT * FROM pedido;

INSERT INTO categoria (nome) VALUES
('Cafe'), ('Bebidas Quentes'), ('Bebidas Frias'), ('Doces'), ('Salgados'), ('Combo');


INSERT INTO produto (nome, descricao, id_categoria, preco, ativo) VALUES 
('Capuchino', 'Café com leite vaporizado e espuma de leite', 1, 5.00, TRUE),
('Chocolate Quente', 'Chocolate quente com leite e canela', 2, 6.00, TRUE),
('Pão de queijo', 'Pão de queijo tradicional', 5, 7.00, TRUE),
('Tapioca romeu e julieta', 'Tapioca com recheio de goiabada e queijo', 4, 10.00, FALSE);


INSERT INTO pedido (id_cliente, data_pedido, status_pedido, valor_total) VALUES 
(1, '2026-09-14 10:00:00', 'ABERTO', 10.00),
(2, '2026-09-14 11:00:00', 'PREPARANDO', 6.00),
(3, '2026-09-14 12:00:00', 'FINALIZADO', 7.00),
(4, '2026-09-14 13:00:00', 'CANCELADO', 25.00);

INSERT INTO item_pedido (id_pedido, id_produto, quantidade, preco_unitario, observacao) VALUES 
(1, 1, 2, 5.00, 'Sem açúcar'),
(2, 2, 1, 6.00, 'Quente'),
(3, 3, 1, 7.00, 'Com recheio'),
(4, 4, 1, 10.00, 'Sem recheio');

