/* eslint-env mocha */

"use strict";

var assert = require("chai").assert;
var setNetworkID = require("../src/set-network-id");

describe("set-network-id", function () {
  var test = function (t) {
    it(t.description, function (done) {
      setNetworkID(t.rpc, function (err, networkID) {
        t.assertions(err, networkID);
        done();
      });
    });
  };
  test({
    description: "set current block number",
    rpc: {
      version: function (callback) {
        callback(null, "3");
      }
    },
    assertions: function (err, networkID) {
      assert.strictEqual(networkID, "3");
    }
  });
  test({
    description: "networkID is undefined",
    rpc: {
      version: function (callback) {
        callback(null, undefined);
      }
    },
    assertions: function (err, networkID) {
      assert.isTrue(err instanceof Error);
      assert.isUndefined(networkID);
    }
  });
  test({
    description: "networkID is null",
    rpc: {
      version: function (callback) {
        callback(null, null);
      }
    },
    assertions: function (err, networkID) {
      assert.isTrue(err instanceof Error);
      assert.isUndefined(networkID);
    }
  });
});
