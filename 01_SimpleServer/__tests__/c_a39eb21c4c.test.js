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

  // Test Case 2: Check if c function sets the data correctly
  test('should set the data correctly', () => {
    bootstrap.c('test');
    expect(mockElement.data).toHaveBeenCalledWith('bs.scrollspy', expect.anything());
  });

  // Test Case 3: Check if c function calls the c function on e when c is a string 
  test('should call the c function on e when c is a string', () => {
    const mockE = { c: jest.fn() };
    mockData['bs.scrollspy'] = mockE;
    bootstrap.c('c');
    expect(mockE.c).toHaveBeenCalled();
  });

  // Test Case 4: Check if c function does not call the c function on e when c is not a string 
  test('should not call the c function on e when c is not a string', () => {
    const mockE = { c: jest.fn() };
    mockData['bs.scrollspy'] = mockE;
    bootstrap.c({ key: 'value' });
    expect(mockE.c).not.toHaveBeenCalled();
  });
});
