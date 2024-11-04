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
  let mockElement;
  let mockData;

  // Setup for Tests
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

    mockData = {
      'bs.scrollspy': null,
    };

    global.a = jest.fn(() => mockElement);
  });

  // Test Case 1: Check if c function is defined
  test('c is defined', () => {
    expect(bootstrap.c).toBeDefined();
  });

  // Test Case 2: Check if c function is called successfully with object as parameter
  test('c function is called successfully with object as parameter', () => {
    const mockObject = { testKey: 'testValue' };
    bootstrap.c(mockObject);
    expect(mockElement.data).toHaveBeenCalledWith('bs.scrollspy', expect.any(Object));
    expect(typeof mockData['bs.scrollspy']).toBe('object');
  });

  // Test Case 3: Check if c function is called successfully with string as parameter
  test('c function is called successfully with string as parameter', () => {
    const mockString = 'testString';
    bootstrap.c(mockString);
    expect(mockElement.data).toHaveBeenCalledWith('bs.scrollspy', expect.any(Object));
    expect(typeof mockData['bs.scrollspy']).toBe('object');
  });

  // Test Case 4: Check if c function is called successfully without any parameter
  test('c function is called successfully without any parameter', () => {
    bootstrap.c();
    expect(mockElement.data).toHaveBeenCalledWith('bs.scrollspy', expect.any(Object));
    expect(typeof mockData['bs.scrollspy']).toBe('object');
  });

  // Test Case 5: Check if c function throws error when called with invalid parameter
  test('c function throws error when called with invalid parameter', () => {
    expect(() => {
      bootstrap.c(123);
    }).toThrow();
  });
});
