/*
  source: http://www.dofactory.com/javascript/composite-design-pattern
 */

const Node = function(name) {
  this.children = [];
  this.name = name;
};

Node.prototype = {
  add: function(child){
    this.children.push(child);
  },
  remove: function(child){
    this.children = this.children.filter(item => item !== child);
  },
  getChild: function(i) {
    return this.children[i];
  },
  hasChildren: function () {
    return this.children.length > 0;
  }
};

// logging helper

const log = (function () {
  let log = "";

  return {
    add: function (msg) { log += msg + "\n"; },
    show: function () { console.log(log); log = ""; }
  }
})();

// recursively traverse a (sub)tree

function traverse(indent, node) {
  log.add(Array(indent++).join("--") + node.name);

  for (let i = 0, len = node.children.length; i < len; i++) {
    traverse(indent, node.getChild(i));
  }
}

function run() {
  const tree = new Node("root");
  const left = new Node("left");
  const right = new Node("right");
  const leftleft = new Node("leftleft");
  const leftright = new Node("leftright");
  const rightleft = new Node("rightleft");
  const rightright = new Node("rightright");

  tree.add(left);
  tree.add(right);
  tree.remove(right);  // note: remove
  tree.add(right);

  left.add(leftleft);
  left.add(leftright);

  right.add(rightleft);
  right.add(rightright);

  traverse(1, tree);

  log.show();
}

run();