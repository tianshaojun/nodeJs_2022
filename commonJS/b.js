var moduleA = require('./a');
console.log(moduleA.upper('xiaoming'));

function test() {
    console.log('test-bbb');
}

module.exports = test;