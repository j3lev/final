'use strict';

describe('Service: editItem', function () {

  // load the service's module
  beforeEach(module('finalApp'));

  // instantiate service
  var editItem;
  beforeEach(inject(function (_editItem_) {
    editItem = _editItem_;
  }));

  it('should do something', function () {
    expect(!!editItem).toBe(true);
  });

});
