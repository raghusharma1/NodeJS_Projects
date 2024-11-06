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
  let a, b, d, e, f;

  // Set up our document body
  document.body.innerHTML =
    '<div id="element" data-bs-scrollspy="test"></div>' +
    '<div id="target"></div>';

  beforeEach(() => {
    a = jest.fn();
    b = jest.fn();
    d = { data: jest.fn() };
    e = { c: jest.fn() };
    f = {};
  });

  test('should correctly initialize and call c method', () => {
    const element = document.querySelector('#element');
    const target = document.querySelector('#target');
    a.mockReturnValueOnce({ scrollTop: () => 0 });
    b.mockReturnValueOnce({ height: () => 0 });
    d.data.mockReturnValueOnce('bs.scrollspy');
    e.c.mockReturnValueOnce('someValue');
    expect(c.call({ $element: element, $target: target }, 'c')).toBeUndefined();
    expect(a).toHaveBeenCalledWith(element);
    expect(d.data).toHaveBeenCalledWith('bs.scrollspy');
    expect(e.c).toHaveBeenCalled();
  });

  test('should handle when c is an object', () => {
    const element = document.querySelector('#element');
    const target = document.querySelector('#target');
    a.mockReturnValueOnce({ scrollTop: () => 0 });
    b.mockReturnValueOnce({ height: () => 0 });
    d.data.mockReturnValueOnce(null);
    expect(c.call({ $element: element, $target: target }, { someKey: 'someValue' })).toBeUndefined();
    expect(a).toHaveBeenCalledWith(element);
    expect(d.data).toHaveBeenCalledWith('bs.scrollspy');
    expect(b).toHaveBeenCalledWith(element, { someKey: 'someValue' });
  });
});
