// What is the output
//Program-1
// var num=4;
// function outer(){
//     var num=2;
//     function inner(){
//         num++;
//         var num = 3;
//         console.log(num)
//     }
//     inner()
// }
// outer();


//Program-2
// console.log(typeof typeof 1)

//Program-3
var hero={
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());
