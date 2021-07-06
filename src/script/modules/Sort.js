const sortArrayBy = (array = [], property = null) => {
	property = property.toLowerCase();

	if (property === 'newest') {
		return array.sort((a, b) => {
			return b.getDueDate() - a.getDueDate();
		});
	}

	if (property === 'oldest') {
		return array.sort((a, b) => {
			return a.getDueDate() - b.getDueDate();
		});
	}

	/* 	sortItemsByNewest() {
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
			return a.getPriority() - b.getPriority();
		});
	}

	sortItemsByLowestPriority() {
		this.#items.sort(function (a, b) {
			return b.getPriority() - a.getPriority();
		});
	} */
};
