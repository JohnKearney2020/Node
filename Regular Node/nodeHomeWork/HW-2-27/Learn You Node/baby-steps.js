// console.log(process.argv);
// console.log('The standard format for the sum function is: "$ node baby-steps.js 1 2 3"');
// console.log('where 1, 2, and 3 are the arguments that go into the process.argv array');
let sumTotal = 0;
for (let i = 2; i < process.argv.length; i++) {
	// console.log(process.argv[i]);
	sumTotal += Number(process.argv[i]);
}
console.log(sumTotal);
