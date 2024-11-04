// ********RoostGPT********
/*
Test generated by RoostGPT for test sampleNodeJSEnv using AI Type  and AI Model 

ROOST_METHOD_HASH=d_39bb39108d
ROOST_METHOD_SIG_HASH=d_72e6da76f1


*/

// ********RoostGPT********
const bootstrap = require('../js/bootstrap.min.js');

describe("Bootstrap Component Test Suite", () => {
  let e;
  let b;
  let f = {
    detach: jest.fn()
  };

  beforeEach(() => {
    e = {
      hoverState: 'out',
      $element: {
        removeAttr: jest.fn(),
        trigger: jest.fn()
      },
      type: 'bs'
    };
    b = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should call appropriate functions when hoverState is not 'in'", () => {
    bootstrap.d();
    expect(f.detach).toHaveBeenCalled();
    expect(e.$element.removeAttr).toHaveBeenCalledWith('aria-describedby');
    expect(e.$element.trigger).toHaveBeenCalledWith('hidden.bs.' + e.type);
    expect(b).toHaveBeenCalled();
  });

  test("should not call detach, removeAttr, trigger and b when hoverState is 'in'", () => {
    e.hoverState = 'in';
    bootstrap.d();
    expect(f.detach).not.toHaveBeenCalled();
    expect(e.$element.removeAttr).not.toHaveBeenCalled();
    expect(e.$element.trigger).not.toHaveBeenCalled();
    expect(b).not.toHaveBeenCalled();
  });
});
