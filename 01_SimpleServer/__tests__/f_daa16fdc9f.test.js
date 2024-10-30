// ********RoostGPT********
/*
Test generated by RoostGPT for test sampleNodeJSEnv using AI Type  and AI Model 

ROOST_METHOD_HASH=f_14aa59bc21
ROOST_METHOD_SIG_HASH=f_daa16fdc9f


*/

// ********RoostGPT********
// Importing required functions and modules
const { f } = require('../js/bootstrap.min');

// Test suite for function f
describe('Testing f function in bootstrap.min.js', () => {
  let b, e, g;

  // Set up before each test case
  beforeEach(() => {
    b = {
      addClass: jest.fn(),
      removeClass: jest.fn(),
      find: jest.fn(),
      parent: jest.fn(),
      closest: jest.fn(),
      attr: jest.fn()
    };

    e = jest.fn();

    g = {
      removeClass: jest.fn(),
      find: jest.fn()
    };
  });

  // Test case 1: Check if the function calls addClass and removeClass on b and g correctly
  test('Check if the function calls addClass and removeClass on b and g correctly', () => {
    f(b, e, g);
    expect(b.addClass).toHaveBeenCalledWith('active');
    expect(b.removeClass).toHaveBeenCalledWith('fade');
    expect(g.removeClass).toHaveBeenCalledWith('active');
  });

  // Test case 2: Check if the function calls find on b and g correctly
  test('Check if the function calls find on b and g correctly', () => {
    f(b, e, g);
    expect(b.find).toHaveBeenCalled();
    expect(g.find).toHaveBeenCalled();
  });

  // Test case 3: Check if the function calls attr on b correctly
  test('Check if the function calls attr on b correctly', () => {
    f(b, e, g);
    expect(b.attr).toHaveBeenCalledWith("aria-expanded", true);
  });

  // Test case 4: Check if the function calls e correctly
  test('Check if the function calls e correctly', () => {
    f(b, e, g);
    expect(e).toHaveBeenCalled();
  });
});
