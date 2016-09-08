var request = require('sync-request');
var baseUrl = 'http://localhost:3000';

module.exports = {

    //getStatus(callback)
    //{
    //    var responseData = {};
    //    client.get("http://localhost:3000/jenkins/job/mxd.client_Master/lastBuild/api/json", function (data, response) {
    //        //console.log(data.result);
    //        responseData = data;
    //        callback(responseData.result);
    //    });
    //}

     getData(jobName) {
         return JSON.parse(request('GET', baseUrl + '/jenkins/job/' + jobName + '/lastBuild/api/json').getBody());

     }
}