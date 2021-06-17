import sayHi from './modules/sayHi';

if (module.hot) {
	module.hot.accept();
}

console.log(sayHi('Siopao'));
//To-Do at style loaders to webpack
