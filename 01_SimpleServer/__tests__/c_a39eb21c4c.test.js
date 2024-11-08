// ********RoostGPT********
/*
Test generated by RoostGPT for test sampleNodeJSEnv using AI Type  and AI Model 

ROOST_METHOD_HASH=c_e5ad5cd4a4
ROOST_METHOD_SIG_HASH=c_a39eb21c4c


*/

// ********RoostGPT********
// Importing necessary modules
const bootstrap = require('../js/bootstrap.min');

// Test Suite for c function
describe('c function in bootstrap.min.js', () => {
  // Mocking the data function
  const mockDataFn = jest.fn();
  // Mocking the each function
  const mockEachFn = jest.fn((callback) => {
    callback();
    return {
      data: mockDataFn,
    };
  });
  // Mocking the scrollTop function
  const mockScrollTopFn = jest.fn(() => 100);
  // Mocking the a function
  const mockAFn = jest.fn(() => ({
    each: mockEachFn,
    scrollTop: mockScrollTopFn,
  }));

  // Setting global a function
  global.a = mockAFn;

  // Test Case 1: Check if the function calls the each function of a
  test('should call each function of a', () => {
    // Calling the function with an object
    bootstrap.c({});
    // Expect each function to have been called
    expect(mockEachFn).toHaveBeenCalled();
  });

  // Test Case 2: Check if the function calls the data function
  test('should call data function', () => {
    // Calling the function with a string
    bootstrap.c('string');
    // Expect data function to have been called
    expect(mockDataFn).toHaveBeenCalled();
  });
});
