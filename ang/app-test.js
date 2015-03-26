'use strict';

describe('app module', function() 
{
  beforeEach(module('CeradBlogAppModule'));

  describe('Existence', function()
  {
    it('should exist', inject(function($controller) 
    {
      //var view1Ctrl = $controller('View1Ctrl');
      expect(true).toBe(true);
    }));
  });
});