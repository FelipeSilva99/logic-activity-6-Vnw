// Crie um objeto que receba ao menos três propriedades sobre você.
let Felipe ={
    prop: 'Se não poder fazer tudo, faça tudo que puder.',
    prop2: 'Nada é em vão, se não é benção, é lição.',
    prop3: 'O corpo alcança, o que a mente acredita.💪🏾👊🏾'
}
// Adicione uma nova propriedade sem alterar seu objeto inicial.
Felipe.prop4 = 'Diga a verdade, esclareça as coisas. Ela acolhe todo mundo.';
// Remova uma propriedade desse objeto.
delete Felipe.prop4;
//Mostre no console todas as propriedades desse objeto.
console.log(Felipe)
// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
let Cadastro =[{
    name : 'Rayanne',
    age : '(45) 56568-6451',
    friend : 'Eva', 
},
{
    name : 'Helena',
    age : '(22) 12356-6151',
    friend : 'Jade', 
},
{
    name : 'Lola',
    age : '(87) 95151-4954',
    friend : 'Patricia', 
},
{
    name : 'Felipe',
    age : '(41) 59414-6541',
    friend : 'Andreia', 
},
{
    name : 'Theo',
    age : '(26) 16589-9845',
    friend : 'Daniel', 
},
]
// Mostre no console o nome de um amigo de cada lista.
console.log(Cadastro[2].friend)
console.log(Cadastro[4].friend)
console.log(Cadastro[3].friend)
console.log(Cadastro[0].friend)
console.log(Cadastro[1].friend)