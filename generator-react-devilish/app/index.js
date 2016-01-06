const generators = require('yeoman-generator');

const generator = generators.Base.extend({
  initializing: function initialize() {
    this.props = {};
  },
  writing: function write() {
    this.directory('client', 'client');
    this.directory('server', 'server');
    this.directory('files', '.');
  },
  installingDependencies: function installDependencies() {
    this.npmInstall();
  }
});

module.exports = generator;
