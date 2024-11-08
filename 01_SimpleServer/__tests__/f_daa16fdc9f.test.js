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

    // Mocking the internal functions and variables
    let g = {
        removeClass: jest.fn().mockReturnThis(),
        find: jest.fn().mockReturnThis(),
        attr: jest.fn().mockReturnThis(),
        end: jest.fn().mockReturnThis()
    };
    let b = {
        addClass: jest.fn().mockReturnThis(),
        removeClass: jest.fn().mockReturnThis(),
        find: jest.fn().mockReturnThis(),
        attr: jest.fn().mockReturnThis(),
        parent: jest.fn().mockReturnThis(),
        closest: jest.fn().mockReturnThis()
    };
    let e = jest.fn();

    // Mocking the global variables
    global.g = g;
    global.b = b;
    global.e = e;

    test('Check if the function f calls the correct methods with the correct arguments', () => {
        f();
        expect(g.removeClass).toHaveBeenCalledWith('active');
        expect(g.find).toHaveBeenCalledWith('> .dropdown-menu > .active');
        expect(b.addClass).toHaveBeenCalledWith('active');
        expect(b.find).toHaveBeenCalledWith('[data-toggle="tab"]');
        expect(b.attr).toHaveBeenCalledWith('aria-expanded', true);
        expect(b.parent).toHaveBeenCalledWith('.dropdown-menu');
        expect(b.closest).toHaveBeenCalledWith('li.dropdown');
        expect(e).toHaveBeenCalled();
    });

    // Reset the mocks after each test
    afterEach(() => {
        jest.clearAllMocks();
    });
});
