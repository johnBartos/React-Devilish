const generators = require('yeoman-generator');

const generator = generators.Base.extend({
  initializing: function initialize() {
    this.props = {};
  },
  writing: function write() {
  }
});

module.exports = generator;
