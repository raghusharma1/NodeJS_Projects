// ********RoostGPT********
/*
Test generated by RoostGPT for test sampleNodeJSEnv using AI Type  and AI Model 

ROOST_METHOD_HASH=f_14aa59bc21
ROOST_METHOD_SIG_HASH=f_daa16fdc9f


*/

// ********RoostGPT********
// Importing required functions and modules
const $ = require('jquery');
const bootstrap = require('../js/bootstrap.min.js');

// Test Suite for f() method
describe('f() method in bootstrap.min.js', () => {
    let b, e, g;

    // Setup before each test
    beforeEach(() => {
        // Initialize jQuery objects
        g = $('<div class="active"><div class="dropdown-menu"><div class="active"></div></div><div data-toggle="tab"></div></div>');
        b = $('<div class="fade"><div data-toggle="tab"></div></div>');
        e = jest.fn();

        // Append jQuery objects to body
        $('body').append(g);
        $('body').append(b);
    });

    // Cleanup after each test
    afterEach(() => {
        g.remove();
        b.remove();
    });

    // Test case 1: Check if 'active' class is removed from g and added to b
    test('Check if active class is removed from g and added to b', () => {
        bootstrap.f();
        expect(g.hasClass('active')).toBe(false);
        expect(b.hasClass('active')).toBe(true);
    });

    // Test case 2: Check if 'fade' class is removed from b
    test('Check if fade class is removed from b', () => {
        bootstrap.f();
        expect(b.hasClass('fade')).toBe(false);
    });

    // Test case 3: Check if 'aria-expanded' attribute is set to false for g and true for b
    test('Check if aria-expanded attribute is set to false for g and true for b', () => {
        bootstrap.f();
        expect(g.find('[data-toggle="tab"]').attr('aria-expanded')).toBe('false');
        expect(b.find('[data-toggle="tab"]').attr('aria-expanded')).toBe('true');
    });

    // Test case 4: Check if e function is called
    test('Check if e function is called', () => {
        bootstrap.f();
        expect(e).toHaveBeenCalled();
    });
});
