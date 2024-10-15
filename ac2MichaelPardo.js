//EJERCICIO 1

// let salaries = {
//     John: 100,
//     Jane: 160,
//     Pete: 130
// }       

// function calculateSalaries(object){
//     var total = 0
//     for (let item in object){
//         total = total + object[item]
//     }
//     return total
// }
// console.log(calculateSalaries(salaries))

//EJERCICIO 2

//COPIAR POR REFERENCIA
// let user = {nombre: "Michael"};
// let user2 = user;
// console.log(user2)

//COPIAR POR CLONADO
// let user = {nombre: "Michael"};
// let clone = Object.assign({},user)
// console.log(clone)

//COPIAR POR CLONADO ESTRUCTURADO O RECURSIVO
// let user = {nombre: "Michael", edad: 18};
// let clone = structuredClone(user)
// console.log(clone)

//EJERCICIO 3

// function marry(man, woman){
//     woman.husband = man;
//     man.wife = woman;

//     return{
//     father: man,
//     mother: woman
//     }
// }

// let family = marry({
//     name:  "John"
//     },{
//     name: "Ann"
// });

// delete family.father;
// delete family.mother.husband;
// El Garbage Collector no eliminará ningún objeto de memoria porque ambos siguen teniendo una referencia.

// family = null
// El Garbage Collector eliminará los objetos man y woman ya que dejarán de tener una referencia

//EJERCICIO 4

// function makeUser(){
    
//     return{
//         name: "John",
//         ref: this
//     };
// }

// let user = makeUser();

// console.log(user.ref)

//user.ref hace referencia al objeto Window, que es el valor por defecto de this

// function makeUser() {

//     this.name = "John";
//     this.ref = this;
// }

// let user = new makeUser();

// console.log(user.ref);


// Ahora user.ref hace referencia hace referencia a this y this hace referencia a la función en la que está

//EJERCICIO 5

// let calculator = {
//     read(num1, num2) {
//         this.a = num1;
//         this.b = num2;
//     },
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     }
// };

// calculator.read(10, 5);
// console.log("Suma: " + calculator.sum());
// console.log("Multiplicación: " + calculator.mul());

//EJERCICIO 6

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this
//     },
//     down(){
//         this.step--;
//         return this
//     },
//     showStep: function(){
//         alert(this.step);
//         return this
//     }
// };

// ladder.up().up().showStep().down().showStep()

//Al poner return this JS permite hacer llamadas encadenadas de funciones en un objeto.





