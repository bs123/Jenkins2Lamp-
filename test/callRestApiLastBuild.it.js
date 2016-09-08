var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var jenkinsClient = require('../src/jenkinsClient.js');

//var Client = require('node-rest-client').Client;
//var client = new Client();
var request = require('sync-request');

describe('RestApi', function () {
    describe('lastBuild', function () {

        it('should return BuildStatus', function () {


            var data = JSON.parse(request('GET', 'http://localhost:3000/jenkins/job/mxd.client_Master/lastBuild/api/json').getBody());
            assert.equal('SUCCESS', data.result);

            //jenkinsClient.getStatus();

            //assert.equal('SUCSS', jenkinsClient.getStatus(function (result) {
            //        return result;
            //    })
            //);

            //client.get("http://localhost:3000/jenkins/job/mxd.client_Master/lastBuild/api/json", function (data, response) {
            //  console.log(data.result);
            //  assert.equal('SUCCESS', data.result);
            //});
        });

        it('timestamp should be in the past', function () {
            var data = JSON.parse(request('GET', 'http://localhost:3000/jenkins/job/mxd.client_Master/lastBuild/api/json').getBody());
            assert.equal('SUCCESS', data.result);
            //assert(new Date().getTime() > data.timestamp, 'timestamp not in the past');
            //assert.isAtLeast(new Date().getTime(), data.timestamp, 'timestamp not in the past');
            //assert.isAtLeast(data.timestamp, new Date().getTime(), 'timestamp not in the past');

            expect(new Date().getTime()).to.be.above(data.timestamp);
        });

    });
});