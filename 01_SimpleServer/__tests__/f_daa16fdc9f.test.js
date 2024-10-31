// ********RoostGPT********
/*
Test generated by RoostGPT for test sampleNodeJSEnv using AI Type  and AI Model 

ROOST_METHOD_HASH=f_14aa59bc21
ROOST_METHOD_SIG_HASH=f_daa16fdc9f


*/

// ********RoostGPT********
const { f } = require('../js/bootstrap.min.js');

describe('bootstrap.min.js', () => {

  let g, b, e, h;

  beforeEach(() => {
    g = {
      removeClass: jest.fn().mockReturnThis(),
      find: jest.fn().mockReturnThis(),
      attr: jest.fn().mockReturnThis()
    };

    b = {
      addClass: jest.fn().mockReturnThis(),
      removeClass: jest.fn().mockReturnThis(),
      parent: jest.fn().mockReturnThis(),
      find: jest.fn().mockReturnThis(),
      attr: jest.fn().mockReturnThis(),
      closest: jest.fn().mockReturnThis(),
      end: jest.fn().mockReturnThis()
    };

    e = jest.fn();
    h = false;
  });

  test('should call the appropriate methods on g and b', () => {
    global.g = g;
    global.b = b;
    global.e = e;
    global.h = h;

    f();

    expect(g.removeClass).toHaveBeenCalledWith('active');
    expect(g.find).toHaveBeenCalledWith('> .dropdown-menu > .active');
    expect(g.attr).toHaveBeenCalledWith('data-toggle', 'tab', 'aria-expanded', false);
    expect(b.addClass).toHaveBeenCalledWith('active');
    expect(b.removeClass).toHaveBeenCalledWith('fade');
    expect(b.attr).toHaveBeenCalledWith('data-toggle', 'tab', 'aria-expanded', true);
    expect(b.parent).toHaveBeenCalledWith('.dropdown-menu');
    expect(b.closest).toHaveBeenCalledWith('li.dropdown');
    expect(b.find).toHaveBeenCalledWith('[data-toggle="tab"]');
    expect(e).toHaveBeenCalled();
  });

  test('should add class "in" to b if h is true', () => {
    h = true;
    global.h = h;

    f();

    expect(b.addClass).toHaveBeenCalledWith('in');
  });

});
