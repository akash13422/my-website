var assert = require("assert");

function add(a, b){
    return a+b;
}

var expected = add(1,4);

//assert(expected === 4, 'one plus tree = 4');


//more methods 
//assert.ok(expected === 4, 'one plus tree = 4');

//assert.equal(expected , 4, 'one plus tree = 4');

//assert.notEqual(expected , 5, 'one plus tree = 4');