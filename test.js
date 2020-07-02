'use strict';

var utils = require('./');
var expect = require('chai').expect;

var decamelize = utils.decamelize;
var dasherize = utils.dasherize;
var camelize = utils.camelize;
var classify = utils.classify;
var underscore = utils.underscore;
var capitalize = utils.capitalize;

describe('string utils', function() {

  describe('decamelize', function() {
    it('decamelizes', function() {
      expect(decamelize('innerHTML')).to.eql('inner_html');
      expect(decamelize('action_name')).to.eql('action_name');
      expect(decamelize('css-class-name')).to.eql('css-class-name');
      expect(decamelize('my favorite items')).to.eql('my favorite items');
    });
  });

  describe('dasherize', function() {
    it('dasherizes', function() {
      expect(dasherize('innerHTML')).to.eql('inner-html');
      expect(dasherize('action_name')).to.eql('action-name');
      expect(dasherize('css-class-name')).to.eql('css-class-name');
      expect(dasherize('my favorite items')).to.eql('my-favorite-items');
    });
  });

  describe('camelize', function() {
    it('camelizes', function() {
      expect(camelize('innerHTML')).to.eql('innerHTML');
      expect(camelize('action_name')).to.eql('actionName');
      expect(camelize('css-class-name')).to.eql('cssClassName');
      expect(camelize('my favorite items')).to.eql('myFavoriteItems');
      expect(camelize('My favorite items')).to.eql('myFavoriteItems');
    });
  });

  describe('classify', function() {
    it('classifies', function() {
      expect(classify('innerHTML')).to.eql('InnerHTML');
      expect(classify('action_name')).to.eql('ActionName');
      expect(classify('css-class-name')).to.eql('CssClassName');
      expect(classify('my favorite items')).to.eql('MyFavoriteItems');
      expect(classify('My favorite items')).to.eql('MyFavoriteItems');
      expect(classify('foo/bar/Baz')).to.eql('FooBarBaz');
    });
  });

  describe('underscore', function() {
    it('underscores', function() {
      expect(underscore('innerHTML')).to.eql('inner_html');
      expect(underscore('action_name')).to.eql('action_name');
      expect(underscore('css-class-name')).to.eql('css_class_name');
      expect(underscore('my favorite items')).to.eql('my_favorite_items');
    });
  });

  describe('capitalize', function() {
    it('capitalizes', function() {
      expect(capitalize('innerHTML')).to.eql('InnerHTML');
      expect(capitalize('action_name')).to.eql('Action_name');
      expect(capitalize('css-class-name')).to.eql('Css-class-name');
      expect(capitalize('my favorite items')).to.eql('My favorite items');
    });
  });

});
