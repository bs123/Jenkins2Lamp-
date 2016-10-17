var request = require('sync-request');
var config = require('../../config.json');
var baseUrl = 'http://' + config.connections.deCONZ.host + ':' +  config.connections.deCONZ.port;
var authToken = config.lamps.id1.authToken; // 'f95bab93da0a1841116266d2c7163f33';

module.exports = {

    redOn()  {
        return this.on(config.lamps.id1.hueCodeRed);
    },

    yellowOn()  {
        return  this.on(config.lamps.id1.hueCodeYellow);
    },

    greenOn()  {
        return  this.on(config.lamps.id1.hueCodeGreen);
    },

    on(hueCode) {
        //console.log('baseUrl : ' + baseUrl);
        return JSON.parse(request('PUT', baseUrl + '/api/' + authToken + '/lights/1/state', {
            json: {
                "on": true,
                "bri": 250,
                "hue": hueCode,
                "sat": 255,
                "transitiontime": 1
            }
        }).getBody('utf8'));
    },

    off() {
        //console.log('baseUrl : ' + baseUrl);
        return JSON.parse(request('PUT', baseUrl + '/api/' + authToken + '/lights/1/state', {
            json: {
                "on": false,
                "transitiontime": 1
            }
        }).getBody('utf8'));

    }
}
