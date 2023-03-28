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
// let num1, num2, num3, mayor, menor, raiz;

// num1=parseInt(prompt(`Ingresar el primer numero`));
// num2=parseInt(prompt(`Ingresar el segundo numero`));
// num3=parseInt(prompt(`Ingresar el tercer numero`));

// mayor= Math.max(num1,num2,num3);
// menor= Math.min(num1,num2,num3);
// raiz= Math.sqrt(num2);

// document.write(`El mayor numero ingresado es ${mayor}, el menor numero  es ${menor} y la raiz cuadrada del segundo numero es ${raiz}.`);

// EJERCICIO 6 (primero de laultima tarea)
// let lado, perimetro;

// lado= parseInt(prompt`Ingrese el valor del lado:`)
// perimetro= lado * 4;

// document.write(`El valor del lado ingresado es ${lado}; por ende el perimetro nos da un total de ${perimetro}.`);

// EJERCICIO 7
// let clave1, clave2;

// clave1= prompt(`Ingrese su clave:`);
// clave2= prompt(`Confirme su clave:`);

// if (clave1==clave2) {
//   document.write(`La clave ingresada es ${clave1}`);
// } else { 
//   document.write(`La clave ingresada no es valida.`)
// }

// EJERCICIO 8
// let num;

// num= parseInt(prompt(`Ingrese un valor:`));

// if (num>0) {
//   document.write(`El valor ingresado es positivo.`);
// } else if (num<0) {
//   document.write(`El valor ingresado es negativo.`);
// } else if (num==0) {
//   document.write(`El valor ingresado es igual a cero.`);
// } else {
//   document.write(`El valor ingresado no es valido.`);
// }

// EJERCICIO 9

// let nombre, cantpreg, pregcorrectas, promedio;

// nombre= prompt(`Ingrese su nombre:`);
// cantpreg= parseInt(prompt`Ingrese la cantidad de preguntas realizadas:`);
// pregcorrectas= parseInt(prompt`Ingrese la cantidad de preguntas contestadas correctamente`);

// promedio= (pregcorrectas* 100) / cantpreg;

// if (promedio>=90 ){
//   document.write(`El alumno corresponde a nivel superior con un porcentaje de ${promedio}.`);
// } else if  (promedio>=75){
//   document.write(`El alumno corresponde a nivel medio con un porcentaje de ${promedio} por ciento.`); } else if (promedio>=50 ){
//   document.write(`El alumno corresponde a nivel regular con un porcentaje de ${promedio} por ciento.`);
// } else if (promedio<50){
//   document.write(`El alumno esta fuera de nivel con un porcentaje de ${promedio} por ciento.`);
// } else {
//   document.write(`Respuesta no valida.`);
// }

// EJERCICIO 10
// Confeccionar un programa que lea 3 pares de datos, cada par de datos corresponde
// a la medida de la base y la altura de un triángulo. El programa deberá informar:
// a) De cada triángulo la medida de su base, su altura y su superficie.
// b) La cantidad de triángulos cuya superficie es mayor a 12.

// let base, altura, superficie, contMayorDoce= 0;

// for(let i=1; i<=3; i=i+1){
//   base= parseFloat(prompt`Ingrese la base del triangulo:`);
//   altura= parseFloat(prompt`Ingrese la altura del triangulo:`);
//   superficie= (base*altura)/2;

//   if(superficie>12){
//     contMayorDoce++;
//   }
//   document.write(`Triangulo ${i}. <br> Teniendo en cuenta que la base es ${base}, la altura ${altura}; el total de la superficie nos da ${superficie}.<br>`);
// }
// document.write(`<br>La cantidad de triangulos con superficie mayor a 12 es de: ${contMayorDoce} triangulos.`);

// EJERCICIO 11
// Desarrollar un programa que solicite la carga de 10 números e imprima la suma de los últimos 5 valores ingresados.

// let valores, suma= 0;

//  for(i=1; i<=10; i++){
//    valores= parseInt(prompt(`Ingrese un valor:`));
//    if(i>5){
//      suma= suma  + valores;
//    }
//  }
//  document.write(`El total de la suma de los ultimos cinco valores ingresados es de ${suma}.`);

// EJERCICIO 12
//Desarrollar un programa que muestre la tabla de multiplicar del 5 (del 5 al 50)

// let tabla= 5;
// for(i=1; i<=10; i++){
//   document.write(tabla `<br>`);
//   tabla= tabla + 5;
// }

// EJERCICIO 13
// Confeccionar un programa que permita ingresar un valor del 1 al 10 y nos muestre la tabla de multiplicar del mismo (los primeros 12 términos)
// Ejemplo: Si ingreso 3 deberá aparecer en pantalla los valores 3, 6, 9, hasta el 36.

// let tabla, contador;

// tabla= parseInt(prompt(`Ingresar un valor del 1 al 10:`));
// contador= tabla;
// for(i=1; i<=12; i++){
//   document.write(contador + `<br>`);
//   contador= contador + tabla;
// }

// EJERCICIO 14
// Realizar un programa que lea los lados de 4 triángulos, e informar:
// a) De cada uno de ellos, qué tipo de triángulo es: equilátero (tres lados iguales), isósceles (dos lados iguales), o escaleno (ningún lado igual)
// b) Cantidad de triángulos de cada tipo.
// c) Tipo de triángulo del que hay menor cantidad.

// let trianguloEquilatero=0;
// let trianguloIsosceles=0;
// let trianguloEscaleno=0;

// for(i=1; i<= 4; i++){
//   let lado1, lado2, lado3;
//   lado1= parseInt(prompt`Ingresar el valor del primer lado:`);
//   lado2= parseInt(prompt`Ingresar el valor del segundo lado:`);
//   lado3= parseInt(prompt`Ingresar el valor del tercer lado:`);
//   if(lado1==lado2 && lado1==lado3){
//     document.write(`Triangulo Equilatero.<br>`);
//     trianguloEquilatero++;
//   }
//   else if(lado1==lado2 || lado1==lado3 || lado2==lado3){
//     document.write(`Triangulo Isosceles.<br>`);
//     trianguloIsosceles++;
//   }
//   else{
//     document.write(`Triangulo Escaleno. <br>`);
//     trianguloEscaleno++; 
//   }
// }

// document.write(`Triangulos equilateros: ${trianguloEquilatero}. <br> Triangulos isosceles: ${trianguloIsosceles}. <br> Triangulos escaleno: ${trianguloEscaleno}.<br>`);

// if(trianguloEquilatero < trianguloEscaleno && trianguloEquilatero > trianguloIsosceles){
//   document.write(`El triangulo con menor cantidad es el triangulo equilatero. `);
// } else if(trianguloEscaleno < trianguloIsosceles){
//     document.write(`El triangulo con menor cantidad es el triangulo escaleno.`);
// } else{
//   document.write(`El triangulo con menor cantidad es el triangulo isosceles.`);
// }

// EJERCICIO 15
// Escribir un programa que pida ingresar coordenadas (x,y) que representan puntos en el plano. Informar cuántos puntos se han ingresado en el primer, segundo, tercer y cuarto cuadrante. Al comenzar el programa se pide que se ingrese la cantidad de puntos a procesar.

// let cuadrante1=0, cuadrante2=0, cuadrante3=0, cuadrante4=0;
// let cantidadPuntos;
// cantidadPuntos= parseInt(prompt(`Ingresar la cantidad de puntos a procesar. `));
// cantidadPuntos= parseInt(cantidadPuntos);

// for(i=1; i<=cantidadPuntos; i++ ){
//   let x,y;
//   x= parseInt(prompt(`Ingrese el valor de x:`));
//   y= parseInt(prompt(`Ingrese el valor de y:`));
//   if(x>0 && y>0){
//     cuadrante1++;
//   } else if(x<0 && y<0){
//     cuadrante2++;
//   } else if(x>0 && y<0){
//     cuadrante3++;
//   } else if(x<0 && y>0){
//     cuadrante4++;
//   }
// }
// document.write(`En el primer cuadrante se ingresaron ${cuadrante1} puntos.<br> En el segundo cuadrante ${cuadrante2}.<br> En el tercer cuadrante ${cuadrante3}.<br> En el cuarto cuadrante ${cuadrante4}. `);

// EJERCICIO 16
// Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
// a) La cantidad de valores negativos ingresados.
// b) La cantidad de valores positivos ingresados.
// c) La cantidad de múltiplos de 15.
// d) El valor acumulado de los números ingresados que son pares.

// let cantNegativos=0, cantidadPositivos=0, cantidadMultiplo=0, totalPares=0;
// for(i=1; i<=10; i++){
//   let num= parseInt(prompt(`Ingrese un valor:`));
//   if(num>0){
//     cantidadPositivos++;
//   } else if(num<0){
//     cantNegativos++;
//   }
//   if(num % 2 == 0){
//     totalPares++;
//   }
//   if(num %15 ==0 && num != 0){
//     cantidadMultiplo++;
//   }
// }

// document.write(`La cantidad de valores negativos ingresados es de ${cantNegativos}, de positivos ${cantidadPositivos}, de multiplo de 15 ${cantidadMultiplo} y de la suma de los pares ${totalPares}.`);

// EJERCICIO 17
/*Se cuenta con la siguiente información:
Las edades de 5 estudiantes del turno mañana.
Las edades de 6 estudiantes del turno tarde.
Las edades de 11 estudiantes del turno noche.
Las edades de cada estudiante deben ingresarse por teclado.
a) Obtener el promedio de las edades de cada turno (tres promedios)
b) Imprimir dichos promedios (promedio de cada turno).
c) Mostrar por pantalla un mensaje que indique cual de los 
tres turnos tiene un promedio de edades mayor. */

// let suma1=0;
// for(i=1; i<=5; i++){
//   let edad= parseInt(prompt(`Ingrese la edad:`));
//   suma1= suma1 + edad;
// }

// let suma2=0;
// for(i=1; i<=6; i++){
//   let edad= parseInt(prompt(`Ingrese la edad:`));
//   suma2= suma2 + edad;
// }

// let suma3=0;
// for(i=1; i<=11; i++){
//   let edad= parseInt(prompt(`Ingrese la edad:`));
//   suma3= suma3 + edad;
// }

// let promedio1, promedio2, promedio3;

// promedio1= suma1 / 5;
// promedio2= suma2 / 6;
// promedio3= suma3 / 11;

// document.write(`Turno noche promedio de edad es de ${promedio1},turno tarde ${promedio2} y turno mañana ${promedio3}.`);

// if(promedio1>promedio2 && promedio1>promedio3){
//   document.write(`Truno nochetiene un promedio de edad mayor.`);
// } else if(promedio2>promedio3){
//   document.write(`Truno tarde tiene un promedio de edad mayor.`)
// } else{
//   document.write(`Truno mañana tiene un promedio de edad mayor.`)
// }

// EJERCICIO 18
// Confeccionar un programa que permita cargar un número entero positivo de hasta tres cifras y muestre un mensaje indicando si tiene 1, 2, o 3 cifras.

// let num;
// num= parseInt(prompt(`Ingrese un valor de 1, 2 o 3 cifras:`));

// if(num<10){
//   document.write(`El valor ingresado es de una cifra`);
// } else if(num<100){
//   document.write(`El valor ingresado es de dos cifras`);
// } else if(num<1000){
//   document.write(`El valor ingresado es de tres cifras`);
// } else{
//   document.write(`El valor ingresado no es valido.`);
// }






