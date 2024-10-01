//RESUELVE LOS EJERCICIOS AQUI

// MAP
// 1.- Dado el array numbers cuyo valor sea [4, 5, 6, 7, 8, 9, 10], crea una función elevados que devuelva un array con el cuadrado de cada uno de los elementos.
let numbers = [4, 5, 6, 7, 8, 9, 10];

function elevados() {
    return numbers.map(elemento => elemento ** elemento);
}

// 2.- Dado el array foodList con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], generar un segundo array que consiga generar de salida el resultado esperado.

// [
//     'Como soy de Italia, amo comer Pizza',
//     'Como soy de Japón, amo comer Ramen',
//     'Como soy de Valencia, amo comer Paella',
//     'Aunque no como carne, el Entrecot es sabroso'
// ]

let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
let sitios = ['Italia', 'Japón', 'Valencia'];

function foodStrings(comidas){
    let resultado = [];
    for (let i = 0; i <= 2; i++) {
        resultado.push(`Como soy de ${sitios[i]}, amo comer ${comidas[i]}`);
    }
    resultado.push(`Aunque no como carne, el ${comidas[3]} es sabroso`);
    return resultado;
}

let result2 = foodStrings(foodList);

// 3.- Dado el array staff, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:

  // Resultado esperado
/*
  [
    'Pepe es The Boss y le gusta leer y ver pelis',
    'Ana es becaria y le gusta nadar y bailar',
    'Luis es programador y le gusta dormir y comprar',
    'Ana es becaria y le gusta nadar y bailar',
    'Carlos es secretario y le gusta futbol y queso'
  ]
*/

const staff = [
    {
      name: 'Pepe',
      role: 'The Boss',
      hobbies: ['leer', 'ver pelis']
    },
    {
      name: 'Ana',
      role: 'becaria',
      hobbies: ['nadar', 'bailar']
    },
    {
      name: 'Luis',
      role: 'programador',
      hobbies: ['dormir', 'comprar']
    },
    {
      name: 'Carlos',
      role: 'secretario',
      hobbies: ['futbol', 'queso']
    }
  ];

  function gustos(user) {
    let resultado = user.map(elemento => `${elemento.name} es ${elemento.role} y le gusta ${elemento.hobbies[0]} y ${elemento.hobbies[1]}`);
    return resultado;
  }

let result3 = gustos(staff);

// FILTER

// 4.- Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function impares(numbers) {
    return numbers.filter(number => number %2 !== 0);
}

let result4 = impares(numbers2);

// 5.- Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo

const foodList2 =[
    {
      name: 'Tempeh',
      isVeggie: true
    },
    {
      name: 'Cheesbacon burguer',
      isVeggie: false
    },
    {
      name: 'Tofu burguer',
      isVeggie: true
    },
    {
      name: 'Entrecot',
      isVeggie: false
    }];

    function veganos(food) {
        return food
            .filter(comida => comida.isVeggie)
            .map(comida => `Que ric${comida.name === 'Tofu burguer' ? 'a' : 'o'} ${comida.name} me voy a comer!`);
    }


    let result5 = veganos(foodList2);


    // 6.- Dado el array inventory, devolver un array con los nombres de los elementos que valgan más de 300 euros.

    const inventory = [
        {
          name: 'Mobile phone',
          price: 199
        },
        {
          name: 'TV Samsung',
          price: 459
        },
        {
          name: 'Viaje a Cancún',
          price: 600
        },
        {
          name: 'Mascarilla',
          price: 1
        }
      ];
      
      /*
        [
          'TV Samsung,',
          'Viaje a Cancún'
        ]
      */

    function caro(array) {
        return array
            .filter(elemento => elemento.price > 300)
            .map(elemento => elemento.name);
    }

    let result6 = caro(inventory);

    // REDUCE
    // 6.- Dado el siguiente array numeros [39, 2, 4, 25, 62], obten la multiplicación de todos los elementos del array

    let numeros3 = [39, 2, 4, 25, 62];

    function multiplicar(array) {
        return array.reduce((accumulator, current) => accumulator * current);
    }

    let result7 = multiplicar(numeros3);

    // 7.- Concatena todos los elementos del array con reduce para que devuelva una sola frase

    const sentenceElements = [
        'Me',
        'llamo',
        'Deydre',
        'y',
        'quiero',
        'sentir',
        'la',
        'fuerza',
        'con',
        'javascript'
      ];

      function concatenar(string) {
        return string.reduce((accumulator, current) => accumulator + " " + current)
      }

    let result8 = concatenar(sentenceElements);

    // 8.- Obtener el monto total de los elementos que pertenecen a category "code" en el siguiente array.

    const books = [
        {
          name: ' JS for dummies',
          author: 'Emily A. Vander Veer',
          price: 20,
          category: 'code'
        },
        {
          name: 'Don Quijote de la Mancha',
          author: 'Cervantes',
          price: 14,
          category: 'novel'
        },
        {
          name: 'Juego de tronos',
          author: 'George R. Martin',
          price: 32,
          category: 'Fantasy'
        },
        {
          name: 'javascript the good parts',
          author: 'Douglas Crockford',
          price: 40,
          category: 'code'
        }
      ];

        function categoryCode(array) {
            return array
                .filter(elemento => elemento.category == 'code')
                .reduce((accumulator, current) => accumulator.price + current.price);           
        }

        let result9 = categoryCode(books);