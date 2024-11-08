// ********RoostGPT********
/*
Test generated by RoostGPT for test sampleNodeJSEnv using AI Type  and AI Model 

ROOST_METHOD_HASH=f_14aa59bc21
ROOST_METHOD_SIG_HASH=f_daa16fdc9f


*/

// ********RoostGPT********
// Importing required functions and modules
const { f } = require('../js/bootstrap.min.js');

// Test Suite for function f
describe('Function f', () => {

  // Mock dependencies
  let mockElement = {
    removeClass: jest.fn(),
    find: jest.fn(),
    attr: jest.fn(),
    addClass: jest.fn(),
    parent: jest.fn(),
    closest: jest.fn(),
    end: jest.fn(),
  };

  let mockFunc = jest.fn();

  beforeEach(() => {
    global.g = mockElement;
    global.b = mockElement;
    global.h = true;
    global.e = mockFunc;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test Case 1: Check if the function executes without error
  test('should execute without error', () => {
    expect(() => {
      f();
    }).not.toThrow();
  });

  // Test Case 2: Check if the function calls the right methods with the correct arguments
  test('should call the right methods with correct arguments', () => {
    f();
    expect(mockElement.removeClass).toHaveBeenCalledWith('active');
    expect(mockElement.find).toHaveBeenCalledWith('> .dropdown-menu > .active');
    expect(mockElement.attr).toHaveBeenCalledWith('aria-expanded', false);
    expect(mockElement.addClass).toHaveBeenCalledWith('active');
    expect(mockElement.attr).toHaveBeenCalledWith('aria-expanded', true);
    expect(mockFunc).toHaveBeenCalled();
  });
});
