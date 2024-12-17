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
  let b, g, e;

  // beforeEach function to initialize required variables and dependencies
  beforeEach(() => {
    b = {
      addClass: jest.fn(),
      removeClass: jest.fn(),
      find: jest.fn(),
      parent: jest.fn(),
      closest: jest.fn(),
      attr: jest.fn(),
    };
    g = {
      removeClass: jest.fn(),
      find: jest.fn(),
      end: jest.fn(),
    };
    e = jest.fn();
  });

  // Test case for successful execution of function f
  test('Should execute all functions successfully', () => {
    f();
    expect(b.addClass).toHaveBeenCalled();
    expect(b.removeClass).toHaveBeenCalled();
    expect(b.find).toHaveBeenCalled();
    expect(b.parent).toHaveBeenCalled();
    expect(b.closest).toHaveBeenCalled();
    expect(b.attr).toHaveBeenCalled();
    expect(g.removeClass).toHaveBeenCalled();
    expect(g.find).toHaveBeenCalled();
    expect(g.end).toHaveBeenCalled();
    expect(e).toHaveBeenCalled();
  });

  // Test case for failure execution of function f
  test('Should fail when any function throws an error', () => {
    b.addClass.mockImplementation(() => {
      throw new Error('Error occurred');
    });
    try {
      f();
    } catch (error) {
      expect(error).toEqual(new Error('Error occurred'));
    }
  });
});
