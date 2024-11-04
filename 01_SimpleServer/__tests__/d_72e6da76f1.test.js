// ********RoostGPT********
/*
Test generated by RoostGPT for test sampleNodeJSEnv using AI Type  and AI Model 

ROOST_METHOD_HASH=d_39bb39108d
ROOST_METHOD_SIG_HASH=d_72e6da76f1


*/

// ********RoostGPT********
const bootstrap = require('../js/bootstrap.min.js');

describe('bootstrap.min.js tests', () => {
  let e;
  let b;
  let f;

  beforeEach(() => {
    f = {
      detach: jest.fn()
    };
    e = {
      hoverState: 'out',
      $element: {
        removeAttr: jest.fn().mockReturnThis(),
        trigger: jest.fn().mockReturnThis()
      },
      type: 'test'
    };
    b = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should call f.detach and e.$element.removeAttr & trigger if hoverState is not "in"', () => {
    bootstrap.d();

    expect(f.detach).toHaveBeenCalledTimes(1);
    expect(e.$element.removeAttr).toHaveBeenCalledTimes(1);
    expect(e.$element.removeAttr).toHaveBeenCalledWith('aria-describedby');
    expect(e.$element.trigger).toHaveBeenCalledTimes(1);
    expect(e.$element.trigger).toHaveBeenCalledWith('hidden.bs.' + e.type);
    expect(b).toHaveBeenCalledTimes(1);
  });

  test('should not call f.detach and e.$element.removeAttr & trigger if hoverState is "in"', () => {
    e.hoverState = 'in';

    bootstrap.d();

    expect(f.detach).not.toHaveBeenCalled();
    expect(e.$element.removeAttr).not.toHaveBeenCalled();
    expect(e.$element.trigger).not.toHaveBeenCalled();
    expect(b).not.toHaveBeenCalled();
  });
});
