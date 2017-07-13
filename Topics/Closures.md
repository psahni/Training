
* Lexical Scope.

``javascript
function greet(whattosay) {
  return function(name) {
    console.log(whattosay + ' ' + name);
  }
}

var sayHi = greet('Hi'); // Global Execution Context
sayHi('Prashant');
``

``javascript
  function sendRequest() {
    var requestId = '123';

    $.ajax({
      url: '/myUrl',
      success: function(response) {
        alert('Request ' + requestID + ' returned');
      }
    })
  }
``

``javascript
var arr = []
function makeFunctions() {
 for(i=0; i<3; i++){
    arr[i] = function() { return i };
 }
};
``

``javascript
var arr = []
function makeFunctions() {
 for(i=0; i<3; i++){
  (function(j){
    arr[j] = function() { return j };
  })(i)
 }
};
``

# REF
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures



