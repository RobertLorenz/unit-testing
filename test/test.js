const MathLib = require('../src');

const mathLib = new MathLib();

describe('MathLib', () => {
  describe('add', () => {
    it('adds two positive numbers', () => {
        expect(mathLib.add(2, 3)).toBe(5);
      });
    
      it('adds a positive and a negative number', () => {
        expect(mathLib.add(-2, 3)).toBe(1);
      });
    
      it('adds two negative numbers', () => {
        expect(mathLib.add(-2, -3)).toBe(-5);
      });
    
      it('returns the same number when adding zero', () => {
        expect(mathLib.add(0, 5)).toBe(5);
      });
    
      it('returns zero when both arguments are zero', () => {
        expect(mathLib.add(0, 0)).toBe(0);
      });
    
      it('adds floating point numbers', () => {
        expect(mathLib.add(1.5, 2.5)).toBeCloseTo(4.0);
      });
    
      it('handles very large numbers', () => {
        expect(mathLib.add(1000000, 1000000)).toBe(2000000);
      });
    
      it('concatenates strings when strings are passed', () => {
        expect(mathLib.add("hello", " world")).toBe("hello world");
      });
    
      it('returns NaN when non-number inputs are passed (except strings)', () => {
          expect(mathLib.add(undefined, 3)).toBeNaN();
        // expect(mathLib.add(null, 3)).toBeNaN();
        // expect(mathLib.add({}, 3)).toBeNaN();
      });
  });

  describe('multiply', () => {
    it('multiply two positive numbers', () => {
        expect(mathLib.multiply(2, 3)).toBe(6);
      });
    
      it('multiply a positive and a negative number', () => {
        expect(mathLib.multiply(-2, 3)).toBe(-6);
      });
    
      it('multiply two negative numbers', () => {
        expect(mathLib.multiply(-2, -3)).toBe(6);
      });
    
      it('return 0 when one argument is 0', () => {
        expect(mathLib.multiply(0, 5)).toBe(0);
      });
    
      it('return 0 when both arguments are 0', () => {
        expect(mathLib.multiply(0, 0)).toBe(0);
      });
    
      it('multiply floating point numbers', () => {
        expect(mathLib.multiply(1.5, 2.5)).toBeCloseTo(3.75);
      });
    
      it('handle very large numbers', () => {
        expect(mathLib.multiply(1000000, 1000000)).toBe(1000000000000);
      });
    
      it('return NaN when inputs are not numbers', () => {
        // expect(mathLib.multiply(null, 3)).toBeNaN();
        expect(mathLib.multiply("a", 3)).toBeNaN();
        expect(mathLib.multiply(undefined, 3)).toBeNaN();
      });
  });

  describe('fibonacci', () => {
    it('returns 0 for n = 0', () => {
        expect(mathLib.fibonacci(0)).toBe(0);
      });
    
      it('returns 1 for n = 1', () => {
        expect(mathLib.fibonacci(1)).toBe(1);
      });
    
      it('returns 1 for n = 2', () => {
        expect(mathLib.fibonacci(2)).toBe(1);
      });
    
      it('returns 2 for n = 3', () => {
        expect(mathLib.fibonacci(3)).toBe(2);
      });
    
      it('returns 3 for n = 4', () => {
        expect(mathLib.fibonacci(4)).toBe(3);
      });
    
      it('returns 5 for n = 5', () => {
        expect(mathLib.fibonacci(5)).toBe(5);
      });
    
      it('returns 55 for n = 10', () => {
        expect(mathLib.fibonacci(10)).toBe(55);
      });
    
      it('returns the correct value for larger n', () => {
        expect(mathLib.fibonacci(20)).toBe(6765);
      });

    //   it('returns NaN for negative input', () => {
    //     expect(mathLib.fibonacci(-1)).toBe(NaN);
    //   });
    
    //   it('returns NaN for non-integer input (float)', () => {
    //     expect(mathLib.fibonacci(2.5)).toBe(NaN);
    //   });
    
    //   it('returns NaN for non-integer input (string)', () => {
    //     expect(mathLib.fibonacci('hello')).toBe(NaN);
    //   });
    
    //   it('returns NaN for null input', () => {
    //     expect(mathLib.fibonacci(null)).toBe(NaN);
    //   });
    
    //   it('returns NaN for undefined input', () => {
    //     expect(mathLib.fibonacci(undefined)).toBe(NaN);
    //   });
    
    //   it('returns NaN for object input', () => {
    //     expect(mathLib.fibonacci({})).toBe(NaN);
    //   });
  });
});
