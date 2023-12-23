// var anObject = {
//     foo: 'bar',
//     length: 'interesting',
//     '0': 'zero!',
//     '1': 'one!'
// };
// var anArray =['zero.','one.'];
// //Aquí en object hace referencia al nombre de la propiedad y no de la posición
// console.log(anArray[0], anObject[0]);
// //Pasa lo mismo que el anterior
// console.log(anArray[1], anObject[1]);
// //Aunque length sea un método, en objeto hay una propiedad llamada igual por lo que tienen prioridad
// console.log(anArray.length, anObject.length);
// //En el array no se puede acceder con el uso de puntos
// console.log(anArray.foo, anObject.foo);
// //Ambos son tomados como objetos
// console.log(typeof anArray == 'object', typeof anObject=='object');
// //Como son ambos tomados como objeto es verdadero
// console.log(anArray instanceof Object, anObject instanceof Object);
// //Aquí si se diferencia entre el objeto y el array
// console.log(anArray instanceof Array, anObject instanceof Array);
// //La clase Array muestra si pertenece a una instancia del mismo
// console.log(Array.isArray(anArray), Array.isArray(anObject));

// var obj = {
//     a: "hello",
//     b: "this is",
//     c: "jacascript",
// };
// var array = Object.values(obj);
// console.log(array);

// function imprimirNumerosPares() {
//     for (let i = 0; i <= 98; i += 2) {
//         console.log(i);
//     }
// }

// imprimirNumerosPares();

// let zero = 0;
// function multiply(x){ return x*2}
// function add( a=1+zero, b=a, c=b+a, d=multiply(c) ){
//     console.log((a + b + c),d);
// }
// add(1);
// add(3);
// add(2,7);
// add(1,2,5);
// add(1,2,5,10);

// class MyClass{
//     constructor(){
//         this.names_ =[];
//     }
//     set name(value){
//         this.names_.push(value);
//     }
//     get name(){
//         return this.names_[this.names_.length-1];
//     }
// }
// const myClassInstance = new MyClass();
// myClassInstance.name = 'Joe';
// myClassInstance.name = 'Bob';

// console.log(myClassInstance.name);

// console.log(myClassInstance.names_);

// const classInstance = new class {
//     get prop() {
//         return 5;
//     }
// }
// classInstance.prop = 10;
// console.log(classInstance.prop);

// class Queue {
//     constructor(){
//         const list = [];

//         this.enqueue = function (type){
//             list.push(type);
//             return type;
//         };
//         this.dequeue = function (){
//             return list.shift();
//         };
//     }
// }

// var q = new Queue;
// q.enqueue(9);
// q.enqueue(8);
// q.enqueue(7);


// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());

// console.log(q);
// console.log(Object.keys(q));

// class Person {
//     constructor(nombre, apellido){
//         this.firstname = nombre;
//         this.lastname = apellido;
//     }

//     get firstname(){
//         return this._firstname;
//     }
//     set firstname(newName){
//         this._firstname = newName;
//     }

//     get lastname(){
//         return this._lastname;
//     }
//     set lastname(newLastName){
//         this._lastname = newLastName;
//     }
// }

// let person = new Person('John', 'Doe');
// console.log(person.firstname, person.lastname);

// person.firstname = 'Foo';
// person.lastname = 'Bar';

// console.log(person.firstname, person.lastname);

document.addEventListener('DOMContentLoaded', function () {

    // var deleteBtn = document.querySelectorAll("[data-deletepost]");
    // deleteBtn.forEach(boton => {
    //     let div = document.getElementById(boton.getAttribute('data-deletepost'));
    //     boton.addEventListener('click', function () {
    //         let resp = confirm(`¿ Seguro de eliminar: 
    //     " ${div.querySelector('p').innerHTML} " ?`)
    //         resp == true ? div.remove() : '';
    //     })
    // });
    let div = document.getElementById('recuadro');
    let pTiempo = document.getElementById('tiempo');
    
    let hrs = 0;
    let min = 0;
    let seg = 0;

    
    function cambiarTiempo() {
        console.log('Entro a intervalo');
        seg += 1;
        if (seg == 60) {
            console.log('Entr a seg = 60')
            min += 1;
            seg = 0;
        }
        if (min == 60) {
            hrs += 1;
            min = 0;
        }
        pTiempo.innerHTML = `${hrs >= 10 ? hrs : 
                                '0' + hrs} h 
                            : ${min >= 10 ? min : '0' + min} min 
                            : ${seg >= 10 ? seg : '0' + seg} seg`;
    }
    setInterval(cambiarTiempo, 1000);
});