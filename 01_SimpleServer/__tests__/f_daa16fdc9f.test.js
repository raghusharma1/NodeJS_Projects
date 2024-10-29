// ********RoostGPT********
/*
Test generated by RoostGPT for test sampleNodeJSEnv using AI Type  and AI Model 

ROOST_METHOD_HASH=f_14aa59bc21
ROOST_METHOD_SIG_HASH=f_daa16fdc9f


*/

// ********RoostGPT********
// Import the dependencies for testing
const f = require('../js/bootstrap.min.js');

// Start test suite
describe('Test the f method in bootstrap.min.js', () => {

    // Test cases
    test('Check if the function f exists', () => {
        expect(f).toBeDefined();
    });

    test('Check if the function f is a function', () => {
        expect(typeof f).toBe('function');
    });

    // Mocking the internal functions
    let mockFn = jest.fn();
    let g = { removeClass: mockFn, find: mockFn };
    let b = { addClass: mockFn, find: mockFn, removeClass: mockFn, parent: mockFn };
    let e = mockFn;

    // Reset the mocks before each test
    beforeEach(() => {
        mockFn.mockReset();
    });

    test('Check if the function f calls the functions removeClass, find, addClass, removeClass and parent correctly', () => {
        f();
        expect(g.removeClass).toHaveBeenCalled();
        expect(g.find).toHaveBeenCalled();
        expect(b.addClass).toHaveBeenCalled();
        expect(b.removeClass).toHaveBeenCalled();
        expect(b.parent).toHaveBeenCalled();
        expect(e).toHaveBeenCalled();
    });

    test('Check if the function f calls the functions with the correct arguments', () => {
        f();
        expect(g.removeClass).toHaveBeenCalledWith('active');
        expect(g.find).toHaveBeenCalledWith('> .dropdown-menu > .active');
        expect(b.addClass).toHaveBeenCalledWith('active');
        expect(b.removeClass).toHaveBeenCalledWith('fade');
        expect(b.parent).toHaveBeenCalledWith('.dropdown-menu');
        expect(e).toHaveBeenCalledWith();
    });
});
