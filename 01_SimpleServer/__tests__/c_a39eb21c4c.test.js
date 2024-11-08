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
      each: jest.fn((callback) => callback()),
      data: jest.fn().mockImplementation((key, value) => {
        if (value !== undefined) {
          mockData[key] = value;
        }
        return mockData[key];
      }),
      height: jest.fn().mockReturnValue(100)
    };
    
    mockData = {
      "bs.scrollspy": null
    };
    
    global.a = jest.fn(() => mockElement);
    global.b = jest.fn();
  });
  
  // Test 1: Check if the function calls each function of this object
  test('should call each function of the object', () => {
    bootstrap.c.call(mockElement, "test");
    expect(mockElement.each).toHaveBeenCalled();
  });
  
  // Test 2: Check if the function calls data function of the object with correct arguments
  test('should call data function of the object with correct arguments', () => {
    bootstrap.c.call(mockElement, "test");
    expect(mockElement.data).toHaveBeenCalledWith("bs.scrollspy", expect.anything());
  });
  
  // Test 3: Check if the function creates new instance of b when "bs.scrollspy" data is not present
  test('should create new instance of b when "bs.scrollspy" data is not present', () => {
    bootstrap.c.call(mockElement, "test");
    expect(global.b).toHaveBeenCalled();
  });
  
  // Test 4: Check if the function does not create new instance of b when "bs.scrollspy" data is present
  test('should not create new instance of b when "bs.scrollspy" data is present', () => {
    mockData["bs.scrollspy"] = {};
    bootstrap.c.call(mockElement, "test");
    expect(global.b).not.toHaveBeenCalled();
  });
  
  // Test 5: Check if the function calls the method of "bs.scrollspy" data when string is passed
  test('should call the method of "bs.scrollspy" data when string is passed', () => {
    const mockMethod = jest.fn();
    mockData["bs.scrollspy"] = {
      test: mockMethod
    };
    bootstrap.c.call(mockElement, "test");
    expect(mockMethod).toHaveBeenCalled();
  });
});
