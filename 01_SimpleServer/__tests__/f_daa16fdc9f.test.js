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

  // Setup and Teardown
  let b, g, e;
  beforeAll(() => {
    // Mock DOM elements
    b = {
      addClass: jest.fn(),
      removeClass: jest.fn(),
      parent: jest.fn(),
      closest: jest.fn(),
      find: jest.fn(),
      attr: jest.fn(),
      offsetWidth: 0,
    };

    g = {
      removeClass: jest.fn(),
      find: jest.fn().mockReturnValue({
        removeClass: jest.fn(),
        end: jest.fn(),
      }),
    };

    e = jest.fn();
  });

  // Test cases
  test('Should correctly call functions on b and g when h is truthy', () => {
    f.call({ $element: b }, g, true, e);

    expect(g.removeClass).toHaveBeenCalledWith('active');
    expect(g.find).toHaveBeenCalledWith('> .dropdown-menu > .active');
    expect(b.addClass).toHaveBeenCalledWith('active');
    expect(b.find).toHaveBeenCalledWith('[data-toggle="tab"]');
    expect(b.attr).toHaveBeenCalledWith('aria-expanded', true);
    expect(b.addClass).toHaveBeenCalledWith('in');
    expect(e).toHaveBeenCalled();
  });

  test('Should correctly call functions on b and g when h is falsy', () => {
    f.call({ $element: b }, g, false, e);

    expect(g.removeClass).toHaveBeenCalledWith('active');
    expect(g.find).toHaveBeenCalledWith('> .dropdown-menu > .active');
    expect(b.addClass).toHaveBeenCalledWith('active');
    expect(b.find).toHaveBeenCalledWith('[data-toggle="tab"]');
    expect(b.attr).toHaveBeenCalledWith('aria-expanded', true);
    expect(b.removeClass).toHaveBeenCalledWith('fade');
    expect(e).toHaveBeenCalled();
  });
});
