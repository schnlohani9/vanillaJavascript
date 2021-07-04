function Counter(){
    let counter=0;
    let a = {};
    
    a.currentValue = function currentValue(){
      return counter}
   
    a.increment = () => {
      counter = counter+1
      return counter
    }
   
    a.decrement = () => {
      counter  = counter-1;
      return counter
      }
      return a
  }
  
  let c = new Counter();
  c.currentValue();