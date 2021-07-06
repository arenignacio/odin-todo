import '../style/reset.scss';
import '../style/style.scss';

import item from './modules/TodoItem';
import Project from './modules/Project';
import sayHi from './modules/sayHi';
import subItem from './modules/Item';

if (module.hot) {
	module.hot.accept();
}

const items = [
	new item(2, 'Get to the Gym', new Date(1988, 0, 2), 'task', false),
	new item(
		3,
		'Finalize app and check with Odin Project',
		new Date(2016, 10, 27),
		'task',
		false
	),
	new item(3, 'Groceries', new Date(2016, 10, 27), 'list', true),
	new item(1, 'Take Trash Out', new Date(1989, 3, 6), 'note', true),
	new item(4, 'Deploy app', new Date(2011, 10, 18), 'habit', true),

	new item(3, 'Happy Birthday', new Date(2016, 10, 27), 'eVent', false),
];

const date = new Date(2011, 12, 18);

const testProject = new Project('P001', 'Project 1');
items.forEach((item) => {
	testProject.addItem(item);
});

testProject.sortItemsByHighestPriority();
testProject.sortItemsByType();

const groceries = testProject.getAllItems()[1];
groceries.addSubItem(new subItem(1, 'Hotdog'));
groceries.addSubItem(new subItem(2, 'Pajamas'));
groceries.completeSubItem(1);
groceries.removeSubItem(0);

console.table(testProject.getAllItems());
/* 
GOAL: Create TO-DO List
Requirements: 
    Your ‘todos’ are going to be objects that you’ll want to dynamically create, which means either using factories or constructors/classes to generate them.

    Brainstorm what kind of properties your todo-items are going to have. At a minimum they should have a title, description, dueDate and priority. You might also want to include notes or even a checklist.

    Your todo list should have projects or separate lists of todos. When a user first opens the app, there should be some sort of ‘default’ project to which all of their todos are put. Users should be able to create new projects and choose which project their todos go into.

    You should separate your application logic (i.e. creating new todos, setting todos as complete, changing todo priority etc.) from the DOM-related stuff, so keep all of those things in separate modules.

    The look of the User Interface is up to you, but it should be able to do the following:
        view all projects
        view all todos in each project (probably just the title and duedate.. perhaps changing color for different priorities)
        expand a single todo to see/edit its details
        delete a todo

    For inspiration, check out the following great todo apps. (look at screenshots, watch their introduction videos etc.)
        Todoist
        Things
        any.do

    Use localStorage to save user’s projects and todos between sessions.

    Since you are probably already using webpack, adding external libraries from npm is a cinch! You might want to consider using the following useful library in your code:
        date-fns gives you a bunch of handy functions for formatting and manipulating dates and times.

PSEUDO

	VALIDATION
	START Class
		START METHOD isString(value)
			IF typeOf value !== object
				return typeOf value === 'string'
			END IF
			
			FOR (key in obj)
				IF typeOf obj.key !== 'string'
					return typeOf obj.key === 'string';
				END IF
			END FOR
		END METHOD

	ITEM
	START Function ({TITLE: STR, DESC: STR, DUE: STR, PRIORITY: NUM})
		
		TRY
			IF (TYPEOF TITLE !== 'string)
				throw Error('Invalid Title')
			
			IF (TYPEOF DESC !== 'string')
				throw Error('Invalid Description')

			IF (TYPEOF DESC !== 'string')
				throw Error('')
		

*/
