// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
var result;
  // check type of elements
  // use typeof to check  
  if ( typeof obj === "number" || typeof obj === "boolean" || typeof obj === "undefined"){
     result = '' + obj
  }
  if (typeof obj === "function" || obj === undefined) {
  return '{}'
  }

  if (obj === null || obj === NaN){
    result = null + ''
     return result
    }
  if ( typeof obj === "string") {
   result = '"' + obj + '"' 
}
  if (Array.isArray(obj)){
    if (obj.length < 1) {
     return '[]'
  }
   var arrElem =[];
   for(var i = 0; i < obj.length; i++){
     arrElem.push(stringifyJSON(obj[i]))
  }
  return result = '[' + arrElem + ']'
 } 

  else if (typeof obj === "object" && obj !== undefined) {
    var objStor = []
    if (Object.keys(obj).length === 0) {
      return '{}'
      }
    if (obj !== 'undefined' || obj !== 'functions') {
    for (var keys in obj) {
      if (typeof obj[keys] === "function" || typeof obj[keys] === "undefined"){
        continue
      }
      objStor.push(stringifyJSON(keys) + ":" + stringifyJSON(obj[keys])) 
    }
  }
  result = '{' + objStor + '}'
}

  return result

};


unstringifiableValues = [
  {
    'functions': function() {},
    'undefined': undefined
  }
];
