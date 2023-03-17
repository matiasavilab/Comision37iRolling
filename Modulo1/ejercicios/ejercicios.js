// EJERCICIO 1

// let nombre, edad, actividadfav, deportefav;

// nombre= prompt(`Ingrese su nombre:`);
// edad=parseInt(prompt(`Ingrese su edad:`));
// actividadfav=prompt(`Ingrese su actividad favorita:`);
// deportefav= prompt(`Ingrese su deporte favorito:`);

// document.write(`El nombre del alumno es ${nombre}, tiene ${edad} años. Su actividad favorita es ${actividadfav} y su deporte elegido es ${deportefav}.`);

// EJERCICIO 2
// let num1, num2, num3, num4, suma, producto;

// num1= parseInt(prompt`Ingresar el primer valor`);
// num2= parseInt(prompt`Ingrese el segundo valor`);
// num3= parseInt(prompt`Ingrese el tercer valor`);
// num4= parseInt(prompt`Ingrese el cuarto valor`);

// suma= num4 + num2 + num3 + num1;
// producto= num2 * num1 * num4 * num3;

// document.write(`La suma de todos los valores (${num1},${num2},${num3},${num4}) nos da un total de ${suma} y la multiplicacion de los mismos un total de ${producto}.`);

// EJERCICIO 3
// let nombre, nombreProducto, precio, cantidad, total;

// nombre=(prompt`Ingrese su nombre:`);
// nombreProducto=(prompt`¿Que prodcuto desea comprar?:`);
// precio= parseInt(prompt`Ingrese el precio del producto:`);
// cantidad= parseInt(prompt`Ingrese la cantidad`);
// total= precio * cantidad;

// document.write(`El cliente ${nombre} desea comprar ${nombreProducto}. El precio unitario del mismo es de $${precio}. ${nombre} lleva ${cantidad} ${nombreProducto} y debe abonar un total de $${total}.`)


// EJERCICIO 4
// let num1, num2, suma, producto, resta;

// num1=parseInt(prompt(`Ingresar el primer numero`));
// num2=parseInt(prompt(`Ingresar el segundo numero`));

// suma= num1 + num2;
// resta= num2 - num1;
// producto= num1 * num2;

// if (num1>num2) {
//   console.log(`${suma}`);
// } else if (num1<num2) {
//   console.log(`${resta}`);
// } else if (num1==num2) {
//   console.log(`${producto}`);
// } else {
//   console.log(`El resultado no es valido`);
// };

// EJERCICIO 5
let num1, num2, num3, mayor, menor, raiz;

num1=parseInt(prompt(`Ingresar el primer numero`));
num2=parseInt(prompt(`Ingresar el segundo numero`));
num3=parseInt(prompt(`Ingresar el tercer numero`));

mayor= Math.max(num1,num2,num3);
menor= Math.min(num1,num2,num3);
raiz= Math.sqrt(num2);

document.write(`El mayor numero ingresado es ${mayor}, el menor numero  es ${menor} y la raiz cuadrada del segundo numero es ${raiz}.`);


