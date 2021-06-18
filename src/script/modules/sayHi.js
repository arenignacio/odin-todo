import { format, parseISO } from 'date-fns';

const sayHi = (name) => {
	const body = document.getElementById('body');
	const date = new Date();

	console.log(parseISO('1988-01-02'));

	body.innerText = `Hello! ${name} Ignacio, today is ${format(
		parseISO('1988-01-02'),
		'MM/dd/yyyy'
	)}`;
};

export default sayHi;
