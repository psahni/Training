* Immediately invoked function expression
* function statement
* function expression
*
``js
var greeting = function(name) {
  return "Hello " +  name;
}();
``


* Make this IIFE

function(name){
 return "hello" +  name
}

* You are creating this function on the fly, any thing inside the parenthesis is an expression.


Example:-

``js
In Main.js

var thing = {
  'hello' : 'main'
}

In Other.js

var thing = {
  'hello2' : 'other'
};

The thing object in global scope will be corrupted. Becz other.js is loaded after main.js.

(function(){
  var thing = {
    'hello2' : 'other'
  };
  console.log(thing);
})();

``
