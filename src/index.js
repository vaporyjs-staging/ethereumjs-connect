"use strict";

var setFrom = require("./set-from");
var setupEventsABI = require("./setup-events-abi");
var setupFunctionsABI = require("./setup-functions-abi");
var connect = require("./connect");

module.exports = {
  version: "4.5.2",
  setFrom: setFrom,
  setupEventsABI: setupEventsABI,
  setupFunctionsABI: setupFunctionsABI,
  connect: connect
};
