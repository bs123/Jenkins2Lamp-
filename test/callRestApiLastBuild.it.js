var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var jenkinsClient = require('../src/clients/jenkinsClient.js');

describe('RestApi', function () {
    describe('lastBuild', function () {

        it('should return BuildStatus', function () {
            var data = jenkinsClient.getData('mxd.client_Master');
            assert.equal('SUCCESS', data.result);
        });

         it('should not build in progress', function () {
            var data = jenkinsClient.getData('mxd.client_Master');
            assert.equal(false, data.building);
        });

        it('timestamp should be in the past', function () {
            var data = jenkinsClient.getData('mxd.client_Master');
            //assert(new Date().getTime() > data.timestamp, 'timestamp not in the past');
            //assert.isAtLeast(new Date().getTime(), data.timestamp, 'timestamp not in the past');
            //assert.isAtLeast(data.timestamp, new Date().getTime(), 'timestamp not in the past');
            expect(new Date().getTime()).to.be.above(data.timestamp);
        });
    });
});