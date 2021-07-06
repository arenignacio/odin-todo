/* 
class Item(id, desc)
	-id
	-desc
	-completed

	+getID() : num
	+setDesc(str) : null
	+getDesc() : str
	+toggledCompleted() : null
	+isCompleted() : bool
*/

class Item {
	#id;
	#desc;
	#completed;

	constructor(id, desc) {
		this.#id = id;
		this.#desc = desc;
		this.#completed = false;
	}

	getID() {
		return this.#id;
	}

	setDesc(description) {
		this.#desc = description;
	}

	getDesc() {
		return this.#desc;
	}

	toggleCompleted() {
		this.#completed = this.#completed ? false : true;
	}

	isCompleted() {
		return this.#completed;
	}
}

export default Item;
