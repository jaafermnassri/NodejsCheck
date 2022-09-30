var generator = require('generate-password');

var password = generator.generate({
	length: 14,
	numbers: true,
    uppercase: true
});

console.log(password);