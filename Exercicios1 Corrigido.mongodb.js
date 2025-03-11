use('Exercicios')
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

db.funcionarios.insertMany(dadosFuncionarios);

use('Exercicios')
db.funcionarios.find()

//2
use('Exercicios')
db.funcionarios.insertOne({
    nome: "Carlos Martins",
    cargo: "Designer",
    sexo: "Masculino",
    salario: 4000,
    departamento: "Marketing",
    dataContratacao: new Date("2023-08-12"),
    projetos: ["Projeto E"],
    dataCadastro: new Date()
});

//3
use('Exercicios')
db.funcionarios.updateMany(
    { cargo: "Desenvolvedor" },
    { $inc: { salario: +100 } }
);

//4
use('Exercicios')
db.funcionarios.updateOne(
    { nome: "João Silva" },
    { $push: { projetos: "Projeto C" } }
);

//5
use('Exercicios')
db.funcionarios.updateMany(
    {},
    { $unset: { dataContratacao: "" } }
);

//6
use('Exercicios')
db.funcionarios.updateMany(
    { departamento: "TI" },
    { $set: { bonificacao: 500 } }
);

//7
use('Exercicios')
db.funcionarios.deleteOne({ nome: "João Silva" });

//8
use('Exercicios')
db.funcionarios.deleteMany({ departamento: "Contabilidade" });

//9
use('Exercicios')
db.funcionarios.find(
    { cargo: "Desenvolvedor" },
    { nome: 1, sexo: 1, salario: 1, _id: 0 }
);

//10
use('Exercicios')
db.funcionarios.find({ salario: { $gt: 4000 } });

//11
use('Exercicios')
db.funcionarios.find({
    dataContratacao: { $gte: new Date("2023-01-01"), $lt: new Date("2024-01-01") }
});

//12
use('Exercicios')
db.funcionarios.find({
    projetos: { $in: ["Projeto A", "Projeto B"] }
});

//13
use('Exercicios')
db.funcionarios.find({
    projetos: { $nin: ["Projeto B"] }
});

//14
use('Exercicios')
db.funcionarios.find(
    { sexo: "Feminino" },
    { nome: 1, salario: 1, departamento: 1, sexo: 1, _id: 0 }
);

//15
use('Exercicios')
db.funcionarios.find({
    dataContratacao: { $lt: new Date("2023-01-01") },
    salario: { $lt: 5000 }
});

//16
use('Exercicios')
db.funcionarios.find({
    $expr: { $gt: [{ $size: "$projetos" }, 1] }
});

//17
use('Exercicios')
const dataLimite = new Date();
dataLimite.setDate(dataLimite.getDate() - 30);
db.funcionarios.find({ dataCadastro: { $gte: dataLimite } });


//18
use('Exercicios')
db.funcionarios.find({ nome: /^João/ });

//19
use('Exercicios')
db.funcionarios.find({ nome: /Silva$/ });

//20
use('Exercicios')
db.funcionarios.find({ nome: /Luis|Luiz/ });

//21
use('Exercicios')
db.funcionarios.find({
    cargo: "Desenvolvedor",
    departamento: "TI",
    salario: { $gt: 4500 }
});

//22
use('Exercicios')
db.funcionarios.find({
    cargo: { $ne: "Desenvolvedor" },
    dataContratacao: { $gte: new Date("2023-01-01") }
});

//23
use('Exercicios')
db.funcionarios.find({
    projetos: { $in: ["Projeto A", "Projeto B"] },
    salario: { $lte: 5000 }
});

//24
use('Exercicios')
db.funcionarios.find({
    departamento: { $ne: "TI" },
    projetos: { $nin: ["Projeto A"] }
});

//25
use('Exercicios')
db.funcionarios.find({
    $or: [
        { sexo: "Feminino" },
        { dataContratacao: { $lt: new Date("2023-01-01") } }
    ]
});

//26
use('Exercicios')
db.funcionarios.find({
    $or: [
      { cargo: "Desenvolvedor" },
      { cargo: "Analista" }
    ],
    salario: { $gt: 4000 },
    dataContratacao: { $gte: new Date("2023-01-01") }
  });
  



