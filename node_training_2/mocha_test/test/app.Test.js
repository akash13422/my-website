const assert = require('chai').assert;
//const app = require('../app');

// describe('App', function(){
//   it('app should be return hello', function(){
//       assert.equal(app(), 'hello');
//   });
// });


/* 

*/

const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;


describe('App', function () {
    it('say hello should be return hello', function () {
        let result = sayHello();
        assert.equal(result, 'hello world');
    });

    it('say hello should be type of string', function () {
        let result = sayHello();
        assert.typeOf(result, 'string');
    });

    it('add numbers should be above 5', function () {
        let result = addNumbers(5,5);
        assert.isAbove(result,5);
        
    });

});
