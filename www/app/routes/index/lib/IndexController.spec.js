import {IndexController} from './IndexController';

describe('IndexController', function() {
  it('greetMe should be world', function() {
    let ctrl = new IndexController();
    expect(ctrl.greetMe).to.equal('world');
  });
});
