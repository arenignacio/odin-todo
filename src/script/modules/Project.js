/*
class Project(name, [desc])
	-name:str
	-desc:str
	-items:arr

	+setName(name: str): void
	+getName():	str
	+setDesc(desc: str): void
	+getDesc(): str
	+addItem(item: obj)
	+removeItem(index: num)
	+updateItem(id: num, item: obj)
	+getItemByID(id: num): obj
	+getAllItems(): arr
	+getItemsByDate(date): arr
	+getItemsByYear(year: date): arr
	+getItemsByMonth(month: date): arr
	+getItemsByPriority(priority: num): arr
	+getItemsByCheckStat(bool): arr;
	+sortItemsByNewest(): void
	+sortItemsByOldest(): void
	+sortItemsByHighestPriority(): void
	+sortItemsByLowestPriority(): void
*/
import Item from './Item';

class Project extends Item {
	#name;
	#items;

	constructor(id, name, desc = '') {
		super(id, desc);
		this.#name = name;
		this.#items = [];
	}

	setName(string) {
		this.#name = string;
	}

	getName() {
		return this.#name;
	}

	addItem(item) {
		this.#items.push(item);
	}

	removeItem(index) {
		this.#items.splice(index, 1);
	}

	updateItem(id, item) {
		const index = this.#items.findIndex((item) => item.getId() === id);

		this.#items.splice(index, 1, item);
	}

	getItemByID(id) {
		const idx = this.#items.findIndex((item) => item.getID() === id);
		return this.#items[idx];
	}

	getAllItems() {
		return this.#items;
	}

	//date objects must be converted to string for comparison because two objects that point to different references will always return false.
	getItemsByDate(date) {
		return this.#items.filter((item) => {
			return item.getDueDate().toDateString() === date.toDateString();
		});
	}

	getItemsByYear(year) {
		return this.#items.filter((item) => {
			return item.getDueDate().getFullYear() === year;
		});
	}

	getItemsByMonth(month) {
		return this.#items.filter((item) => {
			return item.getDueDate().getUTCMonth() === month;
		});
	}

	getItemsByPriority(bool) {
		return this.#items.filter((item) => item.isPriority() === bool);
	}

	getItemsByCompletionStatus(bool) {
		return this.#items.filter((item) => item.isCompleted() === bool);
	}

	sortItemsByNewest() {
		this.#items.sort((a, b) => {
			return b.getDueDate() - a.getDueDate();
		});
	}

	sortItemsByOldest() {
		this.#items.sort((a, b) => {
			return a.getDueDate() - b.getDueDate();
		});
	}

	sortItemsByHighestPriority() {
		this.#items.sort(function (a, b) {
			return b.isPriority() - a.isPriority();
		});
	}

	sortItemsByLowestPriority() {
		this.#items.sort(function (a, b) {
			return a.isPriority() - b.isPriority();
		});
	}

	sortItemsByCompletion() {
		this.#items.sort(function (a, b) {
			return a.isCompleted() - b.isCompleted();
		});
	}

	sortItemsByType() {
		//fill in sort
		this.#items.sort((a, b) => {
			return a.getTypeVal() - b.getTypeVal();
		});
	}
}

export default Project;
