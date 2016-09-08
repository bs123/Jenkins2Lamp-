var chai = require('chai');
var assert = chai.assert;

var xfdClient = require('../src/clients/xfdClient.js');

describe('XFD', function () {

    it('should logout', function () {

        var response = xfdClient.logout();
        console.log('respponse.statusCode : ' + response.statusCode);
        assert.equal(200, response.statusCode);

    });


    describe('turn lights on/off', function () {

        //beforeEach

        it('should turn on 3 ', function () {
            xfdClient.login();
            var response = xfdClient.on(3);
            console.log('respponse.statusCode : ' + response.statusCode);
            assert.equal(200, response.statusCode);
            xfdClient.logout();
        });

        it('should turn off3', function () {
            xfdClient.login();
            var response = xfdClient.off(3);
            console.log('respponse.statusCode : ' + response.statusCode);
            assert.equal(200, response.statusCode);
            xfdClient.logout();
        });

    });
    describe('turn all lights on/off', function () {

        // permanantly ignored, SIT
        xit('should turn on and off all  ', function () {
            xfdClient.allOn();
            xfdClient.allOff();
        });

    });
});