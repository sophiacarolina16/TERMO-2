-- Geração de Modelo físico
-- Sql ANSI 2003 - brModelo.



CREATE TABLE Clientes+Programa_Fidelidade (
Id_Cliente Auto_Incremente primary key,
Nome varchar(35)not_null,
CPF varchar(35) not null unique,
Telefone varchar(35)not_null,
Email varchar(35)not_null,
Data_Cadastro datetime,
Id_Programa_fidelidade Auto_Incremente primary key,
Saldo_Pontos varchar(35)not_null,
Data_Ultimo_Resgate datetime,
Id_Delivery Auto_Incremente primary key,
PRIMARY KEY(Id_Cliente,Id_Programa_fidelidade)
)

CREATE TABLE Pedidos+Pagamento (
Status_Pedido varchar,
Id_Pedidos Auto_Incremente primary key,
Data_Hora timestamp_default,
Id_Pagamento Auto_Incremente primary key,
Data_Pagamento datetime,
Status_Transacao varchar(35)not_null,
Codigo_Autorizacao varchar(35) not null unique,
Valor_Pago varchar(35)not_null,
Id_Delivery Auto_Incremente primary key,
PRIMARY KEY(Id_Pedidos,Id_Pagamento)
)

CREATE TABLE Delivery (
Id_Delivery Auto_Incremente primary key PRIMARY KEY,
Endereco_Entrega varchar(35)not_null,
Taxa_Entrega varchar(35)not_null,
Status_Entrega varchar(35)not_null,
Tempo_Estimado varchar(35)not_null,
Id_Pedidos Auto_Incremente primary key,
Id_Pagamento Auto_Incremente primary key,
FOREIGN KEY(Id_Pagamento,,) REFERENCES Pedidos+Pagamento (Id_Pedidos,Id_Pagamento)
)

CREATE TABLE Valor_Total (
Credito varchar(35) not null unique,
Debito varchar(35) not null unique,
Pix varchar(35) not null unique
)

CREATE TABLE Tipo_pedido (
Delivery varchar(35)not_null,
presencial varchar(35)not_null
)

CREATE TABLE entrega (
Id_Funcionario Auto_Incremente primary key,
CPF varchar(35) not null unique,
Id_Delivery Auto_Incremente primary key,
FOREIGN KEY(Id_Delivery) REFERENCES Delivery (Id_Delivery)
)

CREATE TABLE atende (
Id_Pedidos Auto_Incremente primary key,
Id_Pagamento Auto_Incremente primary key,
Id_Funcionario Auto_Incremente primary key,
CPF varchar(35) not null unique,
FOREIGN KEY(Id_Pagamento,,) REFERENCES Pedidos+Pagamento (Id_Pedidos,Id_Pagamento)
)

CREATE TABLE Funcionario (
Id_Funcionario Auto_Incremente primary key PRIMARY KEY,
Cargo varchar(35)not_null,
Data_Admissao datetime,
Nome_Funcionario varchar(100)not_null,
CPF varchar(35) not null unique,
Salario varchar(100)not_null
)

CREATE TABLE Fornecedor (
Id_Fornecedor Auto_Incremente primary key PRIMARY KEY,
Razao_Social varchar(35)not_null,
nome_fornecedor varchar(100)not_null,
Telefone_Contatos varchar(35) not null unique,
CNPJ varchar(35)not_null,
Email_Vendas varchar(35)not_null,
Id_Funcionario Auto_Incremente primary key,
CPF varchar(35) not null unique,
FOREIGN KEY(Id_Funcionario) REFERENCES Funcionario (Id_Funcionario)
)

CREATE TABLE Forma_Pagamento (
Credito varchar(35) not null unique,
Debito varchar(35) not null unique,
Pix varchar(35) not null unique,
Dinheiro varchar(35) not null unique
)


CREATE TABLE Atende (
Id_Fornecedor Auto_Incremente primary key,
Id_Estoques Auto_Incremente primary key,
FOREIGN KEY(Id_Fornecedor) REFERENCES Fornecedor (Id_Fornecedor)
)

CREATE TABLE Relação_2+item_pedidios (
Id_Produtos Auto_Incremente primary key,
Id_Pedidos Auto_Incremente primary key,
quantidade varchar(35)not_null,
preco_historico varchar(35)not_null,
FOREIGN KEY(/*erro: ??*/) REFERENCES Pedidos+Pagamento (Id_Pedidos,Id_Pagamento)
)

CREATE TABLE Produtos (
Id_Produtos Auto_Incremente primary key PRIMARY KEY,
Nome_Produto varchar(100)not_null,
Descricao varchar(35)not_null,
Preco_Unitario varchar(35)not_null,
Categoria varchar(35)not_null
)

CREATE TABLE Relação_3+Ficha_tecnica (
Id_Estoques Auto_Incremente primary key,
Id_Produtos Auto_Incremente primary key,
quantidade_gasta varchar(100)not_null,
FOREIGN KEY(Id_Produtos) REFERENCES Produtos (Id_Produtos)
)

CREATE TABLE Unidade_Medida (
Kg varchar(100)not_null,
ml varchar(100)not_null,
un varchar(100)not_null
)

CREATE TABLE Categoria (
Setor_Preparo varchar(35)not_null,
Nome_Categoria varchar(35)not_null,
Id_Categoria Auto_Incremente primary key PRIMARY KEY,
Descricao varchar(100)not_null,
Ordem_Exibicao varchar(100)not_null,
Exibir_Menu varchar(100)not_null,
Id_Estoques Auto_Incremente primary key,
Id_Produtos Auto_Incremente primary key,
FOREIGN KEY(Id_Produtos) REFERENCES Produtos (Id_Produtos)
)

CREATE TABLE Estoques (
Id_Estoques Auto_Incremente primary key PRIMARY KEY,
Quantidade_Atual varchar(100)not_null,
quantidade_minima varchar(100)not_null,
Nome_Insumo varchar(100)not_null,
Estoque_Minimo varchar(100)not_null
)

CREATE TABLE Realiza (
Id_Pedidos Auto_Incremente primary key,
Id_Cliente Auto_Incremente primary key,
CPF varchar(35) not null unique,
FOREIGN KEY(/*erro: ??*/) REFERENCES Pedidos+Pagamento (Id_Pedidos,Id_Pagamento),
FOREIGN KEY(/*erro: ??*/) REFERENCES Clientes+Programa_Fidelidade (Id_Cliente,Id_Programa_fidelidade)
)

ALTER TABLE Clientes+Programa_Fidelidade ADD FOREIGN KEY(Id_Delivery) REFERENCES Delivery (Id_Delivery)
ALTER TABLE Pedidos+Pagamento ADD FOREIGN KEY(Id_Delivery) REFERENCES Delivery (Id_Delivery)
ALTER TABLE entrega ADD FOREIGN KEY(Id_Funcionario) REFERENCES Funcionario (Id_Funcionario)
ALTER TABLE atende ADD FOREIGN KEY(Id_Funcionario) REFERENCES Funcionario (Id_Funcionario)
ALTER TABLE Atende ADD FOREIGN KEY(Id_Estoques) REFERENCES Estoques (Id_Estoques)
ALTER TABLE Relação_2+item_pedidios ADD FOREIGN KEY(Id_Produtos) REFERENCES Produtos (Id_Produtos)
ALTER TABLE Relação_3+Ficha_tecnica ADD FOREIGN KEY(Id_Estoques) REFERENCES Estoques (Id_Estoques)
ALTER TABLE Categoria ADD FOREIGN KEY(Id_Estoques) REFERENCES Estoques (Id_Estoques)
