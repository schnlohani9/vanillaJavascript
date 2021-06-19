class Test {
    text = "interview";
  
    method() {
      console.log(this.text);
    }
  }
  
  const instance  = new Test();
  
  const storedMethod = instance.method;
  
  console.log(storedMethod());