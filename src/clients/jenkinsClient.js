var request = require('sync-request');
//var baseUrl = 'http://localhost:3000';
var config = require('../../config.json');
var baseUrl = 'http://' + config.connections.jenkins.host + ':' +  config.connections.jenkins.port;

module.exports = {

     getData(jobName) {
         //console.log('baseUrl : ' + baseUrl);
         return JSON.parse(request('GET', baseUrl + '/jenkins/job/' + jobName + '/lastBuild/api/json').getBody());

     }
}
