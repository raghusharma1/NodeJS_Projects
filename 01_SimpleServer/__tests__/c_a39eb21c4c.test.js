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
  let element;
  let data;
  let object;
  let returnedValue;

  beforeAll(() => {
    element = {
      each: jest.fn((callback) => callback.call(element)),
      data: jest.fn((key, value) => {
        if (value !== undefined) {
          data = value;
        }
        return data;
      }),
    };
    object = {};
    returnedValue = 'someValue';
    data = {
      'bs.scrollspy': {
        c: jest.fn(() => returnedValue),
      },
    };
    global.a = jest.fn(() => element);
    global.b = jest.fn(() => data['bs.scrollspy']);
  });

  test('should call each method on this', () => {
    c.call(element, 'c');
    expect(element.each).toBeCalled();
  });

  test('should get data from element', () => {
    c.call(element, 'c');
    expect(element.data).toBeCalledWith('bs.scrollspy');
  });

  test('should set data on element if not exist', () => {
    data = {};
    c.call(element, 'c');
    expect(element.data).toBeCalledWith('bs.scrollspy', expect.anything());
  });

  test('should not set data on element if exist', () => {
    data = {
      'bs.scrollspy': {},
    };
    c.call(element, 'c');
    expect(element.data).toBeCalledTimes(1);
  });

  test('should call c method on data if string is passed', () => {
    c.call(element, 'c');
    expect(data['bs.scrollspy'].c).toBeCalled();
  });

  test('should return the returned value of c method on data if string is passed', () => {
    const result = c.call(element, 'c');
    expect(result).toBe(returnedValue);
  });

  test('should not call c method on data if object is passed', () => {
    c.call(element, object);
    expect(data['bs.scrollspy'].c).not.toBeCalled();
  });
});
