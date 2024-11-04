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
      end: jest.fn().mockReturnThis(),
      attr: jest.fn().mockReturnThis(),
    };

    b = {
      addClass: jest.fn().mockReturnThis(),
      removeClass: jest.fn().mockReturnThis(),
      find: jest.fn().mockReturnThis(),
      attr: jest.fn().mockReturnThis(),
      parent: jest.fn().mockReturnThis(),
      closest: jest.fn().mockReturnThis(),
      offsetWidth: jest.fn(),
    };

    e = jest.fn();
    h = false;
  });

  it('should correctly call the g and b methods', () => {
    f.call({ $element: b }, g, e, h);
    expect(g.removeClass).toHaveBeenCalledWith('active');
    expect(g.find).toHaveBeenCalledWith('> .dropdown-menu > .active');
    expect(g.attr).toHaveBeenCalledWith('aria-expanded', false);
    expect(b.addClass).toHaveBeenCalledWith('active');
    expect(b.attr).toHaveBeenCalledWith('aria-expanded', true);
    expect(b.removeClass).toHaveBeenCalledWith('fade');
    expect(b.parent).toHaveBeenCalledWith('.dropdown-menu');
    expect(b.closest).toHaveBeenCalledWith('li.dropdown');
    expect(e).toHaveBeenCalled();
  });

  it('should correctly call the b method with offsetWidth and addClass "in"', () => {
    h = true;
    f.call({ $element: b }, g, e, h);
    expect(b.offsetWidth).toHaveBeenCalled();
    expect(b.addClass).toHaveBeenCalledWith('in');
  });
});
