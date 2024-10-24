// ********RoostGPT********
/*
Test generated by RoostGPT for test sampleNodeJSEnv using AI Type  and AI Model 

ROOST_METHOD_HASH=b_fb94df674e
ROOST_METHOD_SIG_HASH=b_15079fdf29


*/

// ********RoostGPT********
// Importing the dependencies
const a = require('../js/bootstrap.min.js');

describe("Bootstrap Affix Method", () => {
    let testObject;

    // Setup for tests
    beforeEach(() => {
        testObject = {
            data: jest.fn(),
            each: jest.fn(function(callback) {
                callback.call(this);
            })
        };
        a.prototype.each = testObject.each;
        a.prototype.data = testObject.data;
    });

    // Test case 1: Check if method calls 'each' function of 'this'
    test("should call each function of this", () => {
        const b = jest.fn();
        a.prototype.b(b);
        expect(testObject.each).toHaveBeenCalled();
    });

    // Test case 2: Check if method calls 'data' function of 'this' inside 'each'
    test("should call data function of this inside each", () => {
        const b = jest.fn();
        a.prototype.b(b);
        expect(testObject.data).toHaveBeenCalled();
    });

    // Test case 3: Check if method calls 'data' function of 'this' with correct parameters
    test("should call data function of this with correct parameters", () => {
        const b = "bs.affix";
        a.prototype.b(b);
        expect(testObject.data).toHaveBeenCalledWith("bs.affix");
    });

    // Test case 4: Check if method works correctly with a string parameter
    test("should work correctly with a string parameter", () => {
        const b = "bs.affix";
        const e = { b: jest.fn() };
        testObject.data.mockReturnValueOnce(e);
        a.prototype.b(b);
        expect(e.b).toHaveBeenCalled();
    });

    // Test case 5: Check if method works correctly with an object parameter
    test("should work correctly with an object parameter", () => {
        const b = { bs: "affix" };
        const e = { b: jest.fn() };
        testObject.data.mockReturnValueOnce(e);
        a.prototype.b(b);
        expect(e.b).not.toHaveBeenCalled();
    });
});
