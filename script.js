function createLinkedList(value) {
	function append(value) {
		let currentNode = headNode;

		while (currentNode.nextNode != null) {
			currentNode = currentNode.nextNode;
		}

		currentNode.nextNode = createNode(value);
	}
	function prepend(value) {
		let newHead = createNode(value);
		newHead.nextNode = headNode;
		headNode = newHead;
	}
	function size() {
		let count = 1;
		let currentNode = headNode;

		while (currentNode.nextNode != null) {
			count++;
			currentNode = currentNode.nextNode;
		}

		return count;
	}
	function head() {
		return headNode;
	}

	function tail() {
		let currentNode = headNode;

		while (currentNode.nextNode != null) {
			currentNode = currentNode.nextNode;
		}

		return currentNode;
	}
	function at(index) {
		let currentNode = headNode;
		let count = 0;

		while (currentNode != null) {
			if (count == index) {
				return currentNode;
			} else {
				count++;
			}
			currentNode = currentNode.nextNode;
		}
		return "ERROR: Index is out of scope.";
	}

	function pop() {
		if (size() === 1) {
			return "ERROR: Can't delete Head.";
		}
		let currentNode = headNode;
		let secondLastNode = size() - 1;
		let count = 1;

		while (count != secondLastNode) {
			currentNode = currentNode.nextNode;
			count++;
		}

		currentNode.nextNode = null;
	}
	function contains(value) {}
	function find(value) {}
	function toString() {}

	let headNode = createNode("HEAD");

	return {
		get headNode() {
			return headNode;
		},
		append,
		prepend,
		size,
		head,
		tail,
		at,
		pop,
		contains,
		find,
		toString,
	};
}

function createNode(value) {
	return {
		value: value,
		nextNode: null,
	};
}

let myList = createLinkedList(10);
myList.append(101);
myList.append(22);
myList.append(11);
console.log(myList.head());
