
function getFirstSelector(s) {
    return document.querySelector(s);
  }
  
  function nestedTarget() {
    return document.querySelector('#nested .target');
  }
  
  function deepestChild() {
    let node = document.getElementById('grand-node');
    let nextNode = node.children[0];
  
    while (nextNode) {
      node = nextNode;
      nextNode = node.children[0];
    }
  
    return node;
  }
  
  function increaseRankBy(n) {
    const theRankedLists = document.querySelectorAll('.ranked-list');
  
    for (let i = 0, l = theRankedLists.length; i < l; i++) {
      let children = theRankedLists[i].children;
  
      for (let j = 0, k = children.length; j < k; j++) {
        children[j].innerHTML = parseInt(children[j].innerHTML) + n;
      }
    }
  }