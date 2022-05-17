var Node = require("./Node");

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    var newNode = new Node(data);

    //if tree is empty
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    //check new data is less than the root data then add that to the left
    if (newNode.data < node.data) {
      //check root has any left child or not? if no then new node in to the left
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode); // if left root has already left child then call again insertNode function to check same condition
      }
    }
    //check new data is grater than the root data then add that to the left
    else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  delete(data) {
    this.root = this.deleteNode(this.root, data);
  }

  deleteNode(node, dataToDelete) {
    //check wheather tree is empty or not
    if (node === null) {
      return null;
    }

    // if data to be delete is less than
    // roots data then move to left subtree
    else if (dataToDelete < node.data) {
      node.left = this.deleteNode(node.left, dataToDelete);
      return node;
    }
    // if data to be delete is greater than
    // roots data then move to right subtree
    else if (dataToDelete > node.data) {
      node.right = this.deleteNode(node.right, dataToDelete);
      return node;
    }

    // if data is similar to the root's data
    // then delete this node
    else {
      // deleting node with no children
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      //deleting node with one children
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      //deleting node with two children
      /**
       * to do this we need to find the smallest child from right subtree since
       * we are removing root so we need to make sure that it has to be smallest
       * child of right sub tree so it can be grater than left sub tree but it will
       * be less than right sub tree so it will satisfy BST rules
       */

      var minValueOfRightSubTree = this.findMinNode(node.right);
      node.data = minValueOfRightSubTree.data;

      node.right = this.deleteNode(node.right, minValueOfRightSubTree.data);
      return node;
    }
  }

  /**
   * 1. Visit the node
   * 2. Visit the left subtree
   * 3. Visit the right subtree
   * @param {} node
   */
  preorder(node) {
    if (node === null) {
      return;
    } else {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  inorder(node) {
    if (node === null) {
      return;
    } else {
      this.preorder(node.left);
      console.log(node.data);
      this.preorder(node.right);
    }
  }

  // Performs postorder traversal of a tree
  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  findMinNode(node) {
    // if left of a node is null
    // then it must be minimum node
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }

  getRootNode() {
    return this.root;
  }

  // search for a node with given data
  search(node, data) {
    // if trees is empty return null
    if (node === null) return null;
    // if data is less than node's data
    // move left
    else if (data < node.data) return this.search(node.left, data);
    // if data is grater than node's data
    // move right
    else if (data > node.data) return this.search(node.right, data);
    // if data is equal to the node data
    // return node
    else return node;
  }
}

var BST = new BinarySearchTree();

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

var root = BST.getRootNode();
console.log("inorder traversal");

// prints 9 10 13 17 22 25 27
BST.inorder(root);

console.log("postorder traversal");
BST.postorder(root);
console.log("preorder traversal");
BST.preorder(root);
