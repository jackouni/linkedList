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
			return "ERROR: Can't remove HEAD.";
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

	function contains(value) {
		let currentNode = headNode;

		while (currentNode != null) {
			if (currentNode.value === value) {
				return true;
			}
			currentNode = currentNode.nextNode;
		}

		return false;
	}

	function find(value) {
		let currentNode = headNode;
		let count = 0;

		while (currentNode != null) {
			if (currentNode.value === value) {
				return count;
			}
			currentNode = currentNode.nextNode;
			count++;
		}

		return null;
	}

	function toString() {
		let currentNode = headNode;
		let string = "";

		while (currentNode != null) {
			string += ` ( ${currentNode.value} ) -> `;
			currentNode = currentNode.nextNode;
		}

		string += " null ";
		return string;
	}

	function insertAt(value, index) {
		let proceedingNode = at(index);
		let precedingNode = at(index - 1);
		let newNode = createNode(value, null);

		precedingNode.nextNode = newNode;
		newNode.nextNode = proceedingNode;
	}

	function removeAt(index) {
		let indexNextNode = at(index + 1);
		let indexPreviousNode = at(index - 1);

		let listLength = size() - 1;

		if (index > listLength || index === 0) {
			return "ERROR: Please select an index within the scope of the list.";
		}

		if (index === listLength) {
			indexPreviousNode.nextNode = null;
		} else {
			indexPreviousNode.nextNode = indexNextNode;
		}
	}

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
		insertAt,
		removeAt,
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
