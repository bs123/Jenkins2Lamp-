var request = require('sync-request');
var config = require('../../config.json');
var baseUrl = 'http://' + config.connections.jenkins.host + ':' +  config.connections.jenkins.port;
if (config.mock) {
    baseUrl = 'http://' + config.connections.mock.host + ':' +  config.connections.mock.port;
}

module.exports = {

     getData(jobName) {
         //console.log('baseUrl : ' + baseUrl);
         return JSON.parse(request('GET', baseUrl + '/jenkins/job/' + jobName + '/lastBuild/api/json').getBody());

     }
}