function receivesAFunction(callback) {
    callback();
  }

  function returnsANamedFunction() {
    return function sayHi() { console.log("Hi!")};
  }
  
  function returnsAnAnonymousFunction() {
    return function() {console.log("");};
  }
  
  
  