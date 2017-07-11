* Any value that is not falsy is a truthy value.

* If the result of a conditional expression is not a Boolean, the JavaScript interpreter will automatically coerce the value to a Boolean.

* Many values do not map to distinctly true or false values.  Because of this,the coerced Boolean values are often informally referred to as truthy or falsy ― approximations of true and false based on JavaScript’s coercion rules.

* Following values are considered to be falsy values:

  false
  0
  undefined
  null
  “” (empty string)
  NaN (Not a Number)

* The Falsy values 0, “” (empty string) and false are equal to each other and comparison among them results in a true value.

* Do the comparison

* Null and undefined are both falsy values but are not equal to any value, not even falsy. A bit strange but that’s true.

null == 0
null == false
null == ''
false == 0
false == '0'

* Null and undefined are equal to themselves.

* == & ===

* Type conversion
  0 == '0'

* "0" == false, "0" === false

* Always use a triple equal since it is difficult to memorize the rules of double equal and truthy falsy comparison result.

Ref:- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators

https://stackoverflow.com/questions/7615214/in-javascript-why-is-0-equal-to-false-but-when-tested-by-if-it-is-not-fals


