const FOO={
    someMethod: function(){
        return ()=>this;
    }
}
console.log(FOO.someMethod()()===FOO);