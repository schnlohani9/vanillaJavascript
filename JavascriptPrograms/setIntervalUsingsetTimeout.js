// Approach 1
function _setInterval(fn, delay) {
  // wrap the original function, recursively call the wrapper function with setTimeout 
  const wrapper = () => {
    fn();
    return setTimeout(wrapper, delay)
  }
  setTimeout(wrapper, delay);
}
_setInterval(console.log.bind(null, 'hello world'), 1000);
// https://michaelzheng.medium.com/implement-setinterval-with-settimeout-bfe1f467731f



// Approach 2
// function interval(cb, ms){
//     var a = {
//       clear : function(){
//         clearTimeout(a.timer)
//       }
//     };
//     (function run(){
//       cb();
//       a.timer = setTimeout(run, ms);
//     })();
    
//     return a;
//   }
  
  
//   var myInterval_1 = interval(()=>{ console.log(1) }, 1000); // create an "interval" 
//   var myInterval_2 = interval(()=>{ console.log(2) }, 1000); // create another "interval" 
  
//   // clear the first interval
//   setTimeout(()=>{ myInterval_1.clear() }, 4000)



