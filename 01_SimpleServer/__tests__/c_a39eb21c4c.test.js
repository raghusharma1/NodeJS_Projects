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
  let mockElement, mockData;
  
  // Setup before each test
  beforeEach(() => {
    mockElement = {
      each: jest.fn((cb) => cb()),
      data: jest.fn().mockImplementation((key, value) => {
        if (value) {
          mockData[key] = value;
        }
        return mockData[key];
      }),
    };
    mockData = {};
    global.a = jest.fn(() => mockElement);
    global.b = jest.fn();
  });

  // Test Case 1: Check if c function calls each function on the element
  test('should call each function on the element', () => {
    bootstrap.c('test');
    expect(mockElement.each).toHaveBeenCalled();
  });

  // Test Case 2: Check if c function sets the data correctly when e is not truthy
  test('should set the data correctly when e is not truthy', () => {
    bootstrap.c('test');
    expect(mockElement.data).toHaveBeenCalledWith('bs.scrollspy', expect.anything());
    expect(a).toHaveBeenCalledWith('test');
    expect(b).toHaveBeenCalledWith(mockElement, 'test');
  });

  // Test Case 3: Check if c function calls the function on e when e is truthy and c is a string
  test('should call the function on e when e is truthy and c is a string', () => {
    mockData['bs.scrollspy'] = {
      test: jest.fn(),
    };
    bootstrap.c('test');
    expect(mockData['bs.scrollspy'].test).toHaveBeenCalled();
  });
});
