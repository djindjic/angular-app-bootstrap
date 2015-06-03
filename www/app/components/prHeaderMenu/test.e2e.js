'use strict';

describe('prHeaderMenu', function() {

  beforeEach(function () {
    browser.get('/');
  });

  it('should redirect to /route2 when route2 menu item is clicked', function() {
    element(by.linkText('route2')).click()
    expect(browser.getLocationAbsUrl()).toMatch("/route2");
  });

});
