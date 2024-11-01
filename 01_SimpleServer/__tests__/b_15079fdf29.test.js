// ********RoostGPT********
/*
Test generated by RoostGPT for test sampleNodeJSEnv using AI Type  and AI Model 

ROOST_METHOD_HASH=b_fb94df674e
ROOST_METHOD_SIG_HASH=b_15079fdf29


*/

// ********RoostGPT********
// Import the necessary modules
const bootstrap = require('../js/bootstrap.min.js');

describe("Testing bootstrap.min.js", () => {
  let instance;

  beforeEach(() => {
    instance = new bootstrap();
  });

  describe("Testing function b", () => {
    it('should return the correct value when a valid parameter is passed', () => {
      const mockData = jest.fn();
      const mockEach = jest.fn((fn) => fn());
      const mockThis = { each: mockEach };
      instance.a = jest.fn().mockReturnValue({ data: mockData });
      mockData.mockReturnValueOnce(undefined).mockReturnValueOnce(new instance.c());
      const result = instance.b.call(mockThis, "test");
      expect(instance.a).toBeCalled();
      expect(mockEach).toBeCalled();
      expect(mockData).toBeCalledWith("bs.affix");
      expect(result).toBe(mockThis);
    });

    it('should return the correct value when a string parameter is passed', () => {
      const mockData = jest.fn();
      const mockEach = jest.fn((fn) => fn());
      const mockThis = { each: mockEach };
      instance.a = jest.fn().mockReturnValue({ data: mockData });
      const mockE = { test: jest.fn() };
      mockData.mockReturnValue(mockE);
      const result = instance.b.call(mockThis, "test");
      expect(instance.a).toBeCalled();
      expect(mockEach).toBeCalled();
      expect(mockData).toBeCalledWith("bs.affix");
      expect(mockE.test).toBeCalled();
      expect(result).toBe(mockThis);
    });

    it('should throw an error when an invalid parameter is passed', () => {
      const mockData = jest.fn();
      const mockEach = jest.fn((fn) => fn());
      const mockThis = { each: mockEach };
      instance.a = jest.fn().mockReturnValue({ data: mockData });
      const mockE = { test: jest.fn() };
      mockData.mockReturnValue(mockE);
      expect(() => instance.b.call(mockThis, "invalid")).toThrow();
    });
  });
});
