create database db_soe;

drop database db_soe; 

use db_soe;

create table tb_adm(

	id_adm int primary key auto_increment,
	nome varchar(255) unique ,
	senha varchar(255) unique
    
);


drop table tb_adm;

select * 
 from tb_adm;

insert into tb_adm(nome, senha)
values (? , ?);

update tb_adm 
set email = ?,
    senha = ?
where id_adm = ?;

delete from tb_adm
where id_adm = ?;


create table tb_intencoes(
    id_intencao int primary key auto_increment,
    nome varchar(100),
    telefone varchar(15),
    cep varchar(9),
    data_festa date,
    tipo_festa varchar(200),
    tema_festa varchar(200),
    data_intencao date
);

insert into tb_intencoes (nome, telefone, cep, data_festa, tipo_festa, tema_festa, data_intencao)
values (?, ?, ?, ?, ?, ?, ?);

select 
    id_intencao, 
    nome,
    telefone,
    cep,
    data_festa,
    tipo_festa,
    tema_festa,
    lembrete
from tb_intencoes;

update tb_intencoes
   set nome = ?,
       telefone = ?,
       cep = ?,
       data_festa = ?,
       tipo_festa = ?,
       tema_festa = ?,
       lembrete = ?
where id_intencao = ?;

delete from tb_intencoes
where id_intencao = ?;

drop table tb_intencoes;

drop table tb_festa;

create table tb_festa(

    id_festa             int primary key auto_increment,
    nome_cliente 		 varchar(100),
    telefone             varchar(14),
    data_festa           date,
    endereco             varchar(100),
    distancia_local      varchar(10),
    tipo_festa           varchar(100),
    tema_festa           varchar(100),
    qtd_pessoas          int,
    preco                decimal(10, 2)

);


select
id_festa             idFesta,
nome_cliente        nomeCliente,
telefone,
data_festa            dataFesta,
endereco,
distancia_local        distanciaLocal,
tipo_festa            tipoFesta,
tema_festa            temaFesta,
qtd_pessoas            quantidadePessoas,
preco                precoTotal
from tb_festa;


update tb_festa
set nome_cliente = ?,
telefone = ?,
data_festa = ?,
endereco = ?,
distancia_local = ?,
tipo_festa = ?,
tema_festa = ?,
qtd_pessoas = ?,
preco = ?
where id_festa = ?;


delete from tb_festa
where id_festa = ?;