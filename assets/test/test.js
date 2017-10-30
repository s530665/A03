

// The following is a helpful summary of all the QUnit asserts: 

//deepEqual(value, expected[, message]): A recursive, strict comparison that works on all the JavaScript types. The assertion passes if value and expected are identical in terms of properties, values, and they have the same prototype;
//equal(value, expected[, message]): Verify the value provided is equal the expected parameter using a non-strict comparison (==).
//notDeepEqual(value, expected[, message]): Same as deepEqual() but tests for inequality;
//notEqual(value, expected[, message]): Same as equal() but tests for inequality;
//propEqual(value, expected[, message]): A strict comparison of the properties and values of an object. The assertion passes if all the properties and the values are identical;
//strictEqual(value, expected[, message]): Verify the value provided is equal to the expected parameter using a strict comparison (===);
//notPropEqual(value, expected[, message]): Same as propEqual() but tests for inequality;
//notStrictEqual(value, expected[, message]): Same as strictEqual() but tests for inequality;
//ok(value[, message]: An assertion that passes if the first argument is truthy;
//throws(function [, expected ] [, message ]): Test if a callback throws an exception, and optionally compare the thrown error;

// ******************************************************************************
// To complete, (1) uncomment the code below.
// (2) Complete your application code (W03.js) so all these tests pass also.
// ******************************************************************************


QUnit.test('Testing the new add function with four sets of inputs', function (assert) {
    assert.equal(discount(100, 10), 10, "works with two positive integers");
     assert.throws(function() {discount(-200, 20);}, /Value shouldn't be 0 or negative value!/,'Passing in negative value correctly raises an error');
     assert.throws(function() {discount(null, null);}, /Value shouldn't be 0 or negative value!/, 'Passing in null correctly raises an error');
     assert.equal(discount(50.1, 5.2 ), 2.6052000000000004, "works with two decimal numbers");
});

