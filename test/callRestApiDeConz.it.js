var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var deCONZClient = require('../src/clients/deCONZClient.js');

describe.only('RestApi', function () {
    describe('colours', function () {

        it('should set color red', function () {
            var data = deCONZClient.redOn();
            console.log('data : ' + data.stringify);
            assert.equal('success', data.success);
        });

        it('should set color green', function () {

            var data = deCONZClient.greenOn();
            console.log('data : ' + data.stringify);
            assert.equal('success', data.success);
        });

        xit('should set off', function () {
            var data = deCONZClient.off();
            console.log('data : ' + data.stringify);
            assert.equal('success', data.success);
        });
    });
});