// JSON: Javascript Object Notation
// pessoa = Lucas, 20 anos

// const pessoa = {
//     name: 'Lucas',
//     idade: 20,
//     endereco: {
//         rua: 'Lusqeua da Silva',
//         numero: 3203,
//         bairro: 'Camoões da Vaz'
//     }
// }

// console.log(pessoa.endereco.rua)
// console.log(pessoa['endereco']['numero'])

//console.log(pessoa)
//console.log(pessoa.name)
//console.log(pessoa.idade)
//console.log(pessoa['name'])



//closures
//higher order function

// function f(func){
//     func()
// }

// function g(){
//     console.log('g')
// }


const concessionaria = {
    cnpj: '0123456789',
    endereco: {
        rua: 'Avenida dos Industrais',
        numero: 2300,
        bairro: 'Centro',

    },
    veiculos:[
        {
            marca: 'Porsche',
            modelo: '911',
            ano: 2024,
            preco: 3000000
        },
        {
            marca: 'Mercedes-Benz',
            modelo: 'C63',
            ano: 2019,
            preco: 300000
        }
    ]
}
//console.log(concessionaria.veiculos[1].ano)



// 1° exercício. Usando o foreach para exibir cada detalhe de cadsa veículo

concessionaria.veiculos.forEach(carro => {
    console.log(carro)
})

// ou podemos usar essa:
concessionaria.veiculos.forEach(v => {
  console.log(`Modelo: ${v.modelo}, Marca: ${v.marca}, ano: ${v.ano}`)
})

// 2° adicionar um preço e exibir o valor médio dos veículos

let valores = []
let media = 0
concessionaria.veiculos.forEach(carro => {
    valores.push(carro.preco)
    media = valores.reduce((a, b) => a + b, 0)/valores.length
});

console.log(media)