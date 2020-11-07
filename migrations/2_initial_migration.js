const hello_world = artifacts.require("hello_world");

module.exports = function (deployer) {
  deployer.deploy(hello_world);
};
