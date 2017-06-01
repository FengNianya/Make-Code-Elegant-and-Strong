import { assert } from 'chai';

describe('数组的测试', () => {
  describe('#indexOf() 方法', () => {
    it('若没有找到则返回 -1', () => {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
    it('若找到则返回首个被找到的元素在数组中的索引位置', () => {
      assert.equal(2, [1, 2, 3].indexOf(3));
    });
  });
});
