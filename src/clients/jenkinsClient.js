var request = require('sync-request');
var baseUrl = 'http://localhost:3000';

module.exports = {

     getData(jobName) {
         //console.log('baseUrl : ' + baseUrl);
         return JSON.parse(request('GET', baseUrl + '/jenkins/job/' + jobName + '/lastBuild/api/json').getBody());

     }
}