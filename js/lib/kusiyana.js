//node prototype for binary tree
var node = function(text, rules) {
	this.left = null;
	this.right = null;
	this.text = text.toLowerCase();
	if(typeof(rules) == 'object' && rules.length>0) {this.done = false} else {this.done = true};
}

//function to iteratively create aa binary tree based on a starting value and array of rules
function iterateRules (n,rules) {
	if (!n.done) {
		var rule = rules.pop();
		n.left = new node(n.text,copyArray(rules));
		n.right = new node(rule(n.text), copyArray(rules));
		iterateRules(n.left,copyArray(rules));
		iterateRules(n.right,copyArray(rules));
	}
}


//function to output unique results from the binary tree into an array
function getUniqueResults (node) {
	var result = [];
	traverse(node, function(node) {
		if(result.indexOf(node.text) == -1) result.push(node.text);
	});
	return result;
}

//function to traverse all nodes on the tree
function traverse(node, process) {
	function inOrder(node){
		if (node){

				//traverse the left subtree
				if (node.left !== null){
						inOrder(node.left);
				}            

				//call the process method on this node
				process.call(this, node);

				//traverse the right subtree
				if (node.right !== null){
						inOrder(node.right);
				}
		}
	}
	
	inOrder(node);
}		

//utility function to copy an array
function copyArray(arr) {return arr.slice(0)};