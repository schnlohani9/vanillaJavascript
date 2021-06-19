//  Does not work with `new (funcA.bind(thisArg, args))`
if (!Function.prototype.bind) (function(){
    var slice = Array.prototype.slice;
    Function.prototype.bind = function() {
      var thatFunc = this, thatArg = arguments[0];
      var args = slice.call(arguments, 1);
      if (typeof thatFunc !== 'function') {
        // closest thing possible to the ECMAScript 5
        // internal IsCallable function
        throw new TypeError('Function.prototype.bind - ' +
               'what is trying to be bound is not callable');
      }
      return function(){
        var funcArgs = args.concat(slice.call(arguments))
        return thatFunc.apply(thatArg, funcArgs);
      };
    };
  })();

  // More optimized way
  Function.prototype.mybind = function (context, ...args1) {
    let fn = this;
    return function (...arg2) {
        fn.apply(context, [...args1, ...arg2])
    }
  };

  // Calling bind function
  let basic = {
    'name': 'shyam',
    'age': 24
  };
  
  function callMe(city) {
    console.log('Hi! my name is ' + this.name + ' and my age is ' + this.age + ' and my city is ' + arguments[0] + ' and state is ' + arguments[1]);
  }

  let mycallBinded = callMe.mybind(basic, 'jammu');
  mycallBinded('j&k');


  // Output1: Hi! my name is shyam and my age is 24 and my city is jammu and state is j&k
  // Output2: Hi! my name is shyam and my age is 24 and my city is jammu and state is j&k