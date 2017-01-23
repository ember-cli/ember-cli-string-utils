'use strict';

var utils = require('./');
var expect = require('chai').expect;

describe('string utils', function() {

  describe('decamelize', function() {
    it('decamelizes', function() {
      expect(utils.decamelize('innerHTML')).to.eql('inner_html');
      expect(utils.decamelize('action_name')).to.eql('action_name');
      expect(utils.decamelize('css-class-name')).to.eql('css-class-name');
      expect(utils.decamelize('my favorite items')).to.eql('my favorite items');
    });
  });

  describe('dasherize', function() {
    it('dasherizes', function() {
      expect(utils.dasherize('innerHTML')).to.eql('inner-html');
      expect(utils.dasherize('action_name')).to.eql('action-name');
      expect(utils.dasherize('css-class-name')).to.eql('css-class-name');
      expect(utils.dasherize('my favorite items')).to.eql('my-favorite-items');
    });
  });

  describe('camelize', function() {
    it('camelizes', function() {
      expect(utils.camelize('innerHTML')).to.eql('innerHTML');
      expect(utils.camelize('action_name')).to.eql('actionName');
      expect(utils.camelize('css-class-name')).to.eql('cssClassName');
      expect(utils.camelize('my favorite items')).to.eql('myFavoriteItems');
    });
  });

  describe('underscore', function() {
    it('underscores', function() {
      expect(utils.underscore('innerHTML')).to.eql('inner_html');
      expect(utils.underscore('action_name')).to.eql('action_name');
      expect(utils.underscore('css-class-name')).to.eql('css_class_name');
      expect(utils.underscore('my favorite items')).to.eql('my_favorite_items');
    });
  });

  describe('capitalize', function() {
    it('capitalizes', function() {
      expect(utils.capitalize('innerHTML')).to.eql('InnerHTML');
      expect(utils.capitalize('action_name')).to.eql('Action_name');
      expect(utils.capitalize('css-class-name')).to.eql('Css-class-name');
      expect(utils.capitalize('my favorite items')).to.eql('My favorite items');
    });
  });

});
