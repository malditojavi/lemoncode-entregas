// 1. Array operations

// ** Head
// Implementa una función head (inmutable), tal que, dado un array como entrada
// extraiga y devuelva su primer elemento. Utiliza destructuring.

//const head = (/* array */) => {};
// Implementation here.
const myArray = [1, 2, 3, 45];

const head = myArray => {
  const [first] = myArray;
  return first;
};
console.log('*** solution 1. Array Operations > Head ***');
console.log(head(myArray));

// **Tail
//Implementa una función tail (inmutable), tal que, dado un array como entrada
// devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = myArray => {
  const [, ...restOfElements] = myArray;
  return restOfElements;
}; // Implementation here.

console.log('*** solution 1. Array Operations > Tail ***');
console.log(tail(myArray));

//**Init
//Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = myArray => {
  let temp2 = myArray.slice(0, myArray.length - 1);
  return temp2;
}; // Implementation here.
console.log('*** solution 1. Array Operations > Init ***');
console.log(init(myArray));

//**Last
//Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = myArray => {
  let temp3 = myArray[myArray.length - 1];
  return temp3;
}; // Implementation here.
console.log('*** solution 1. Array Operations > Last ***');
console.log(last(myArray));

// ********
// 2. Concat
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
// devuelva la concatenación de ambos. Utiliza rest / spread operators.

// const concat = (a, b) => {}; // Implementation here.

const myFirstArray = [1, 3, 4];
const mySecondArray = [4, 6, 1];

const concat = (a, b) => {
  let tempArray = [...myFirstArray, ...mySecondArray];
  console.log(tempArray);
};
console.log('*** solution 2. Concat ***');
concat(myFirstArray, mySecondArray);

//Opcional
// Implementa una nueva versión de concat donde se acepten múltiples arrays de entrada
// (más de 2). No utilices el método Array.prototype.concat.

//3. Clone Merge
//** Clone
//Implementa una función clone que, a partir de un objeto de entrada
//source devuelva un nuevo objeto con las propiedades de source:

function clone(source) {
// Implementation here.
  let newObject = {...source}
  console.log(newObject);
}

const myObject = {
  name: 'Javier',
  age: 37,
};

console.log('*** solution 3. Clone Merge > Clone ***');
clone(myObject);



//**Merge
//Implementa una función merge que, dados dos objetos de entrada
// source y target, devuelva un nuevo objeto con todas las propiedades de target
// y de source, y en caso de propiedades con el mismo nombre,
//source sobreescribe a target.

// Por ejemplo, dados estos 2 objetos:

const a = { name: 'Maria', surname: 'Ibañez', country: 'SPA' };
const b = { name: 'Luisa', age: 31, married: true };
//el resultado de mezclar a sobre b sería:

// merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
// TIP: Puedes usar la función "clone" del apartado A.

function merge(source, target) {
  let comboObject = { ...b, ...a };
  console.log(comboObject);
}

console.log('*** solution 3. Clone Merge > Merge ***');
merge(a, b);

//4. Read Books
//Crea una función isBookRead que reciba una lista de libros y
// un título y devuelva si se ha leído o no dicho libro.
// Un libro es un objeto con title como string y isRead como booleano.
// En caso de no existir el libro devolver false
// TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.

function isBookRead(books, titleToSearch) {
  // Implementation here
  const book = books.find(item => item.title === titleToSearch)
  if (book && book.isRead) {
    return ('true');
  } else {
    return ('false');
  }
}
// Ejemplo
const books = [
  { title: 'Harry Potter y la piedra filosofal', isRead: true },
  { title: 'Canción de hielo y fuego', isRead: false },
  { title: 'Devastación', isRead: true },
];

console.log('*** solution 4. Read Books ***');

console.log(isBookRead(books, 'Devastación')); // true
console.log(isBookRead(books, 'Canción de hielo y fuego')); // false
console.log(isBookRead(books, 'Los Pilares de la Tierra')); // false

//5. Slot Machine
// El objetivo de este ejercicio es crear una máquina tragaperras utilizando
// clases donde cada vez que juguemos insertemos una moneda.
// Cada máquina tragaperras (instancia) tendrá un contador de monedas que
// automáticamente se irá incrementando conforme vayamos jugando.

// Cuando se llame al método play el número de monedas se debe incrementar
// de forma automática y debe generar tres booleanos aleatorios que representarán
// el estado de las 3 ruletas. El usuario habrá ganado en caso de que los
// tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:

//"Congratulations!!!. You won <número de monedas> coins!!";
// y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de
// la máquina. En caso contrario deberá mostrar otro mensaje:

//"Good luck next time!!".

// Ejemplo de uso
class SlotMachine {
  constructor(counter, wonMatch) {
    this.counter = 0;
    this.wonMatch = false;
  }
  play() {
    // generate 3 booleans randomly
    let random_boolean_A = Math.random() < 0.5;
    let random_boolean_B = Math.random() < 0.5;
    let random_boolean_C = Math.random() < 0.5;

    // if the 3 booleans are true, update wonMatch to true
    // if the 3 booleans are not true, keep wonMatch as false and add +1 in counter
    if (random_boolean_A && random_boolean_B && random_boolean_C === true) {
      this.wonMatch = true;
      let tempCounter = this.counter;
      this.counter = 0;
      return `Congratulations! You won ${tempCounter} coins`;
    } else {
      this.counter += 1;
      return `Good luck next time!`;
    }
  }
}

const miTirada = new SlotMachine();

console.log('*** solution 5. Sloth Machine ***');
console.log(miTirada.play());
