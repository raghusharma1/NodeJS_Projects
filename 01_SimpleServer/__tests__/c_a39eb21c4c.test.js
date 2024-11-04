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
    global.b = jest.fn((el, options) => ({...options}));
  });

  // Test case 1: Check if function c is called with an object
  test('should call function c with an object', () => {
    bootstrap.c({ key: 'value' });
    expect(mockElement.each).toHaveBeenCalled();
    expect(mockElement.data).toHaveBeenCalledWith('bs.scrollspy', expect.any(Object));
  });

  // Test case 2: Check if function c is called with a string
  test('should call function c with a string', () => {
    const mockObject = { c: jest.fn() };
    mockElement.data.mockReturnValueOnce(mockObject);
    bootstrap.c('c');
    expect(mockObject.c).toHaveBeenCalled();
  });

  // Test case 3: Check if function c is called with a non-string and non-object value
  test('should call function c with a non-string and non-object value', () => {
    bootstrap.c(42);
    expect(mockElement.each).toHaveBeenCalled();
    expect(mockElement.data).toHaveBeenCalledWith('bs.scrollspy', expect.any(Object));
  });
});
