// ********RoostGPT********
/*
Test generated by RoostGPT for test sampleNodeJSEnv using AI Type  and AI Model 

ROOST_METHOD_HASH=c_e5ad5cd4a4
ROOST_METHOD_SIG_HASH=c_a39eb21c4c


*/

// ********RoostGPT********
// Import the function to be tested
const c = require('../js/bootstrap.min.js').c;

describe('c method in bootstrap.min.js', () => {
  // Set up
  let mockData = {
    data: jest.fn(),
  };
  let mockThis = {
    each: jest.fn((callback) => callback()),
  };

  beforeAll(() => {
    global.a = jest.fn(() => mockData);
    global.b = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should call each function', () => {
    c.call(mockThis, 'test');
    expect(mockThis.each).toHaveBeenCalled();
  });

  test('should create new b with this and f as arguments if e does not exist', () => {
    mockData.data.mockReturnValueOnce(undefined);
    c.call(mockThis, {});
    expect(global.b).toHaveBeenCalledWith(mockThis, {});
  });

  test('should not create new b if e exists', () => {
    mockData.data.mockReturnValueOnce({});
    c.call(mockThis, {});
    expect(global.b).not.toHaveBeenCalled();
  });

  test('should call e[c] if c is a string', () => {
    let mockE = {
      test: jest.fn(),
    };
    mockData.data.mockReturnValueOnce(mockE);
    c.call(mockThis, 'test');
    expect(mockE.test).toHaveBeenCalled();
  });

  test('should not call e[c] if c is not a string', () => {
    let mockE = {
      test: jest.fn(),
    };
    mockData.data.mockReturnValueOnce(mockE);
    c.call(mockThis, {});
    expect(mockE.test).not.toHaveBeenCalled();
  });
});
