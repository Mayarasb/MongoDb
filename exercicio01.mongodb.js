//Mayara Souza Barros

use("exercicio01")
 
const dadosFuncionarios = [
    {
    nome: "João Silva",
    cargo: "Desenvolvedor",
    sexo: "Masculino",
    salario: 5000,
    departamento: "TI",
    dataContratacao: new Date("2023-01-01"),
    projetos: ["Projeto A", "Projeto B"],
    dataCadastro: new Date()
    },
    {
    nome: "Maria Santos",
    cargo: "Analista de Dados",
    sexo: "Feminino",
    salario: 4800,
    departamento: "TI",
    dataContratacao: new Date("2023-06-15"),
    projetos: ["Projeto C"],
    dataCadastro: new Date()
    },
    {
    nome: "Carlos Oliveira",
    cargo: "Desenvolvedor",
    sexo: "Masculino",
    salario: 5100,
    departamento: "TI",
    dataContratacao: new Date("2022-03-10"),
    projetos: ["Projeto B"],
    dataCadastro: new Date()
    },
    {
    nome: "Ana Pereira",
    cargo: "Gerente de Projetos",
    sexo: "Feminino",
    salario: 7500,
    departamento: "Gestão",
    dataContratacao: new Date("2021-09-20"),
    projetos: ["Projeto A", "Projeto C"],
    dataCadastro: new Date()
    },
    {
    nome: "Luis Fernandes",
    cargo: "Contador",
    sexo: "Masculino",
    salario: 4200,
    departamento: "Contabilidade",
    dataContratacao: new Date("2020-11-05"),
    projetos: [],
    dataCadastro: new Date()
    },
    {
    nome: "Luiza Costa",
    cargo: "Analista Financeira",
    sexo: "Feminino",
    salario: 4600,
    departamento: "Financeiro",
    dataContratacao: new Date("2023-04-18"),
    projetos: ["Projeto D"],
    dataCadastro: new Date()
    },
    {
    nome: "João Souza",
    cargo: "Desenvolvedor",
    sexo: "Masculino",
    salario: 4900,
    departamento: "TI",
    dataContratacao: new Date("2023-07-01"),
    projetos: ["Projeto A"],
    dataCadastro: new Date()
    }
    ];
   db.funcionarios.insertMany(dadosFuncionarios)      
 
//02 - Insira um novo funcionário usando o método insertOne():
use("exercicio01")
db.funcionarios.insertOne({
    nome: "Mayara Barros",
    cargo: "EStágiária de TI",
    sexo: "Feminino",
    salario: 1800,
    departamento: "TI",
    dataContratacao: new Date("2024-07-01"),
    projetos: ["Projeto A"],
    dataCadastro: new Date()
    })
 
   
use("exercicio01")
db.funcionarios.find()
 
//03 - Aumente o salário de todos os desenvolvedores em mais R$ 100 usando o método updateMany():
use("exercicio01")
db.funcionarios.updateMany(
    {cargo:"Desenvolvedor"},
    {$inc: {salario: + 100}}
)
 
//04 - Adicione o projeto "Projeto C" à lista de projetos do funcionário João Silva usando o método updateOne():
use("exercicio01")
db.funcionarios.updateOne(
    {nome: "João Silva"},
    {$push: {projetos: "Projeto C"}}
)

//05 - Remova o campo "dataContratacao" de todos os funcionários usando o método updateMany():
use("exercicio01")
db.funcionarios.updateMany(
    {},
    { $unset: { dataContratacao: "" } }
);

 
//06 - Crie um novo campo chamado "bonificacao" e atribua o valor 500 para todos os funcionários do departamento de TI usando o método updateMany():
use("exercicio01")
db.funcionarios.updateMany(
    {departamento: "TI"},
    {$set: {Bonificação: "500"}}
)

use("exercicio01")
db.funcionarios.find()
 
//07 - Remova o registro do funcionário com o nome "João Silva".
use("exercicio01")
db.funcionarios.deleteOne({nome:"João Silva"})
 
//08 - Remover todos os registros dos funcionários do departamento de "Contabilidade"
use("exercicio01")
db.funcionarios.deleteMany({departamento: "Contabilidade"})
 
//09 - Mostre o nome, sexo e salário de todos os desenvolvedores:
use("exercicio01")
db.funcionarios.find(
    {cargo: "Desenvolvedor"},
    {nome:1 ,salario:1 ,sexo:1,_id:0})
 
//10 - Encontrar funcionários com salário maior que 4000:
use("exercicio01")
db.funcionarios.find({salario: {$gte: 4400}})
 
//11 - Encontrar funcionários contratados em 2023: (Dica utilize o new Date() na omparação
use("exercicio01")
db.funcionarios.find(
    {dataContratacao:
        {$gte: new Date("2023-01-01"),$lt: new Date("2024-01-01")},
    },
    {nome:1,dataContratacao:1,_id:1})
 
 
//12 - Encontrar funcionários que trabalham no "Projeto A" ou no "Projeto B"
use("exercicio01")
db.funcionarios.find(
    {projetos:{$in :["Projeto A","Projeto B"]}})
 
//13 - Encontrar funcionários que não trabalham no "Projeto B":
use("exercicio01")
db.funcionarios.find(
    {projetos: {$nin:["Projeto B"]}
})
 
//14 - Mostrar o nome, salário, departamento e sexo apenas dos funcionários do sexo feminino:
use("exercicio01")
db.funcionarios.find(
    {sexo: "Feminino"},
    {nome:1,salario:1, departamento:1, sexo:1, _id:0})
 
//15 - Encontrar funcionários contratados antes de 2023 e com salário menor que 5000:
use("exercicio01")
db.funcionarios.find({
    $and: [
    {salario:{$lt:5000}},
    {dataContratacao: {$lt: new Date("2023-01-01")}}
    ]
})
 
//16 - Encontrar funcionários que trabalham em mais de um projeto: (Dica utilize o operador $size)
use("exercicio01")
db.funcionarios.find({
    $expr: { $gt: [{ $size: "$projetos" }, 1] }
})
 
//17 - Encontrar funcionários cadastrados nos últimos 30 dias:
use("exercicio01")
const dataLimite = new Date();
dataLimite.setDate(dataLimite.getDate() - 30);
db.funcionarios.find({ dataCadastro: { $gte: dataLimite } });


//18 - Encontrar funcionários cujo nome começa com "João":

use("exercicio01")
db.funcionarios.find({nome: /^João/})
 
//19 - Encontrar funcionários cujo nome termina com "Silva":
use("exercicio01")
db.funcionarios.find({nome: /Silva$/ })
 
//20 - Encontrar funcionários cujo nome contenha Luis ou Luiz
use("exercicio01")
use('Exercicios')
db.funcionarios.find({ nome: /Luis|Luiz/ });
 
//21 - Encontrar todos os desenvolvedores do departamento de TI com salário maior que 4500:
use("exercicio01")
db.funcionarios.find({
    cargo: "Desenvolvedor",
    departamento: "TI",
    salario: { $gt: 4500 }
});
 
//22 - Encontrar todos os funcionários que não são desenvolvedores e que foram contratados em 2023:
use("exercicio01")
db.funcionarios.find({
    cargo: { $ne: "Desenvolvedor" },
    dataContratacao: { $gte: new Date("2023-01-01") }
}, {nome:1,dataContratacao:1,cargo:1,_id:0})
 
//23 - Encontrar funcionários que trabalham no "Projeto A" ou no "Projeto B" e que tenham salário menor ou igual a 5000:
use('Exercicios')
db.funcionarios.find({
    projetos: { $in: ["Projeto A", "Projeto B"] },
    salario: { $lte: 5000 }
});

 
//24 - Encontrar funcionários que não sejam do departamento de TI e que não trabalhem no "Projeto A":
use("exercicio01")
db.funcionarios.find(
    {departamento:{$ne: "TI"},projetos:{$nin: ["Projeto A"]} })
 
//25 - Encontrar funcionários que sejam do sexo feminino ou que tenham sido contratados antes de 2023:
use("exercicio01")
db.funcionarios.find({
    $or: [
      { sexo: "Feminino" },
      { dataContratacao: { $lt: new Date("2023-01-01") }}
    ]
  },{nome:1,dataContratacao:1,sexo:1,_id:0})
 
//26 - Encontrar funcionários que são desenvolvedores ou analistas, com salário maior que 4000 e contratados a partir de 2023.
use("exercicio01")
db.funcionarios.find({
    $or: [
      { cargo: "Desenvolvedor" },
      { cargo: "Analista" }
    ],
    salario: { $gt: 4000 },
    dataContratacao: { $gte: new Date("2023-01-01") }
  });

 