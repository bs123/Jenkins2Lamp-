var Client = require('node-rest-client').Client;
var client = new Client();

// configure basic http auth for every request
//var options_auth = { user: "admin", password: "123" };
//var client = new Client(options_auth);


// direct way
client.get("http://localhost:3000/jenkins/job/mxd.client_Master/lastBuild/api/json", function (data, response) {
    // parsed response body as js object
    //console.log(data);
    console.log(data.result);
    // raw response
    //console.log(response);
});

//// registering remote methods
//client.registerMethod("jsonMethod", "http://localhost:3000/jenkins/view/OTT_InhouseClient/job/mxd.client_Master/lastBuild/api/json", "GET");
//
//client.methods.jsonMethod(function (data, response) {
//    // parsed response body as js object
//    console.log(data);
//    // raw response
//    console.log(response);
//});
