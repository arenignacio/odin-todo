/* 
	class TodoItem(id: num, desc: str, dueDate: date, priority: num)
		-id:str
		-desc:str
		-dueDate:date
		-priority:num

		
		+getID(): num
		+setDesc(str): void
		+getDesc(): str
		+setDueDate(date): void
		+getDueDate(): date
		+togglePriority(): void
		+isPriority(): num
		+toggleCompleted: void
		+isCompleted: bool
 */

import Item from './Item';

class TodoItem extends Item {
	//private fields
	#dueDate;
	#priority;
	#type;
	#subItems;

	/* START Function (ID: NUM, DESC: STR, DUE: STR, PRIORITY: NUM) */
	constructor(id, desc, dueDate, type = 'task', priority = false) {
		super(id, desc);
		this.#priority = priority;
		this.#dueDate = dueDate;
		this.#type = type.toLowerCase();
		this.#subItems = type === 'list' ? [] : null;
	}

	setDueDate(date) {
		this.#dueDate = date;
	}

	getDueDate() {
		return this.#dueDate;
	}

	togglePriority() {
		this.#priority = this.#priority ? false : true;
	}

	isPriority() {
		return this.#priority;
	}

	setType(type) {
		this.#type = type.toLowerCase();
	}

	getType() {
		return this.#type;
	}

	getTypeVal() {
		switch (this.#type) {
			case 'event':
				return 1;
			case 'task':
				return 2;
			case 'list':
				return 2;
			case 'note':
				return 2;
			case 'habit':
				return 3;
		}
	}

	addSubItem(item) {
		typeof this.#subItems === 'object'
			? this.#subItems.push(item)
			: Error('item needs to be type of list before adding any subItems');
	}

	completeSubItem(index) {
		this.#subItems[index].toggleCompleted();
	}

	removeSubItem(index) {
		this.#subItems.splice(index, 1);
	}

	updateItem(id, item) {
		const index = this.#subItems.findIndex((item) => item.getId() === id);

		this.#subItems.splice(index, 1, item);
	}
}

export default TodoItem;
