// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // create var that points to current node
  var theBod = document.body
  var results = []
  function checkClass (node) {
   node = node || theBod
    var classes = node.classList;
    if (classes.contains(className)) {
      results.push(node)
    } 
    if(node.childNodes) {
      for(var i = 0; i < node.children.length; i++) {
        checkClass(node.children[i])
      }
    }
  }
  
console.log(results)
  return results
};

// var htmlStrings = [
//   '<div class="targetClassName"></div>',
//   '<div class="otherClassName targetClassName"></div>',
//   '<div><div class="targetClassName"></div></div>',
//   '<div><div class="targetClassName"><div class="targetClassName"></div></div></div>',
//   '<div><div></div><div><div class="targetClassName"></div></div></div>',
//   '<div><div class="targetClassName"></div><div class="targetClassName"></div></div>',
//   '<div><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></div>'
// ];