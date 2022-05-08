class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(data) {
    const newNode = new Node(data, null, null);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let curNode = this.root;
      let parent;
      while (true) {
        parent = curNode;
        if (data < curNode.data) {
          curNode = curNode.left;
          if (curNode === null) {
            parent.left = newNode;
            break;
          }
        } else {
          curNode = curNode.right;
          if (curNode === null) {
            parent.right = newNode;
            break;
          }
        }
      }
    }
  }
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }
  removeNode(node, data) {
    if (node == null) {
      return null;
    }
    if (data == node.data) {
      //자식이 없을 때
      if (node.left == null && node.right == null) {
        return null;
      }
      //왼쪽 자식이 없을 때
      if (node.left == null) {
        return node.right;
      }
      //오른쪽 자식이 없을 때
      if (node.right == null) {
        return node.left;
      }
      //둘 다 자식이 있을 때
      let tempNode = this.getSmallest(node.right);
      node.data = tempNode.data;
      node.right = this.removeNode(node.right, tempNode.data);
      return node;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else {
      node.right = this.removeNode(node.right, data);
      return node;
    }
  }
  getSmallest(node) {
    let current = node;
    while (!(current.left == null)) {
      current = current.left;
    }
    return current;
  }
}
const nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(15);
nums.insert(37);
nums.insert(3);
nums.remove(45);
console.log(nums);

//출처: https://jeong-pro.tistory.com/131 [기본기를 쌓는 정아마추어 코딩블로그]
