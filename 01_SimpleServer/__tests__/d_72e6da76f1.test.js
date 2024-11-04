// ********RoostGPT********
/*
Test generated by RoostGPT for test sampleNodeJSEnv using AI Type  and AI Model 

ROOST_METHOD_HASH=d_39bb39108d
ROOST_METHOD_SIG_HASH=d_72e6da76f1


*/

// ********RoostGPT********
// Importing required modules
const bootstrap = require('../js/bootstrap.min.js');

// Mocking the dependencies
const mockDetach = jest.fn();
const mockTrigger = jest.fn();
const mockRemoveAttr = jest.fn();
const mockB = jest.fn();

jest.mock('../js/bootstrap.min.js', () => ({
  e: {
    hoverState: 'not-in',
    $element: {
      removeAttr: mockRemoveAttr,
      trigger: mockTrigger,
    },
    type: 'test',
  },
  f: {
    detach: mockDetach,
  },
  b: mockB,
}));

describe('Test suite for function d', () => {
  beforeEach(() => {
    // Resetting the mocks before each test
    mockDetach.mockClear();
    mockTrigger.mockClear();
    mockRemoveAttr.mockClear();
    mockB.mockClear();
  });

  test('should call detach and removeAttr when hoverState is not "in"', () => {
    bootstrap.d();
    expect(mockDetach).toHaveBeenCalledTimes(1);
    expect(mockRemoveAttr).toHaveBeenCalledWith('aria-describedby');
    expect(mockTrigger).toHaveBeenCalledWith('hidden.bs.test');
    expect(mockB).toHaveBeenCalledTimes(1);
  });

  test('should not call detach and removeAttr when hoverState is "in"', () => {
    bootstrap.e.hoverState = 'in';
    bootstrap.d();
    expect(mockDetach).not.toHaveBeenCalled();
    expect(mockRemoveAttr).not.toHaveBeenCalled();
    expect(mockTrigger).not.toHaveBeenCalled();
    expect(mockB).not.toHaveBeenCalled();
  });
});
