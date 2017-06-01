import { expect } from 'chai';

describe('超时的测试', () => {
  it('少于 500 ms', done => {
    setTimeout(done, 300);
  });
  it('少于 500 ms', done => {
    setTimeout(done, 250);
  });
});
