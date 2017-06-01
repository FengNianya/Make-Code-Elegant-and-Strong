import { add } from './add';
import { multiply } from './multiply';
import { expect } from 'chai';

describe('基本运算的测试', () => {
  // add
  it('-1 + 1 = 0', () => {
    expect(add(-1, 1)).to.be.equal(0);
  });
  it('0 + 1 = 1', () => {
    expect(add(0, 1)).to.be.equal(1);
  });
  it('1 + 1 = 2', () => {
    expect(add(1, 1)).to.be.equal(2);
  });

  // multiply
  it('-1 * 1 = -1', () => {
    expect(multiply(-1, 1)).to.be.equal(-1);
  });
  it('0 * 1 = 1', () => {
    expect(multiply(0, 1)).to.be.equal(0);
  });
  it('1 * 1 = 1', () => {
    expect(multiply(1, 1)).to.be.equal(1);
  });
});
