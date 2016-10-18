var request = require('sync-request');
var config = require('../../config.json');
var baseUrl = 'http://' + config.connections.deCONZ.host + ':' +  config.connections.deCONZ.port;
var authToken = config.lamps.id1.authToken;
if (config.mock) {
    baseUrl = 'http://' + config.connections.mock.host + ':' +  config.connections.mock.port;
}

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
        var res = request('PUT', baseUrl + '/api/' + authToken + '/lights/' + config.lamps.id1.id + '/state', {
            json: {
                "on": true,
                "bri": 250,
                "hue": hueCode,
                "sat": 255,
                "transitiontime": 1
            }
        });
        console.log('res : ' + res);
        console.log('res : ' +   JSON.parse(res.getBody('utf8'))[0].stringify ); // data[0].stringify
        return   JSON.parse(res.getBody('utf8'));
    },

    off() {
        return JSON.parse(request('PUT', baseUrl + '/api/' + authToken + '/lights/' + config.lamps.id1.id + '/state', {
            json: {
                "on": false,
                "transitiontime": 1
            }
        }).getBody('utf8'));

    }
}
