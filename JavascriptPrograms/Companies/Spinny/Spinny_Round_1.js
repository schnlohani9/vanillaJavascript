// *******************************Output1*******************************************
(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();


// *******************************Output2*******************************************
for (var i = 0; i < 5; i++) {
    (function(x){setTimeout(function() { console.log(x); }, x * 1000})(i)
}
// 4 4 4 4


// *******************************Relative VS Absolute*******************************
<div relattive>
    <div relattive>
    </div>
</div>

<div relattive>
    <div absolute>
    </div>
</div>

// absolute
// relative
// fixed
// static

// *******************************Output************************************************
var a = undefined;
a=10;
console.log(a); // undefined
console.log(b);  // undefined
console.log(c); // undefined

var a = 10;
let b = 20;
const c = 30;

// *******************************Program1************************************************
const obj = {
    user: {
      name: "Vaibhav",
      adrress: {
        state: "Delhi",
        zone: "South West"
      },
        newAddress : {
            houseNo : 123,
            mailBox : "sachin52"
        }
    }
   };
   //Output
   /*
    {
      user.name:"Vaibhav",
      user.adrress.state:"Delhi",
      user.adrress.zone:"South West"
    }
   */
   function traverse(currentNode,target,flattenedKey){
       for(var key in currentNode){
           if(currentNode.hasOwnProperty(key)){
               var newKey;
               if(flattenedKey === undefined){
                   newKey = key;
               }
               else {
                   newKey = flattenedKey + '.' + key;
               }
               
               var value = currentNode[key];
               if(typeof value === 'object'){
                   traverse(value,target,newKey);
               }
               else{
                   target[newKey] = value;
               }
           }
           
       }
   }
   
   function flatObj(obj){
       var objectToBeFlattened = {};
       traverse(obj,objectToBeFlattened);
       return objectToBeFlattened;
   }
   
console.log(flatObj(obj));
   
   // var flattened = JSON.stringify(flatObj(obj))
   // console.log(flattened);