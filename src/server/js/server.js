var express = require('express')
var app = express()
var jenkinsResponse = {
    "_class" : "hudson.model.FreeStyleBuild",
    "actions" : [
        {
            "_class" : "hudson.model.CauseAction",
            "causes" : [
                {
                    "_class" : "hudson.model.Cause$UserIdCause",
                    "shortDescription" : "Gestartet durch Benutzer Jan maier",
                    "userId" : "jan.maier",
                    "userName" : "Jan maier"
                }
            ]
        },
        {

        },
        {

        }
    ],
    "artifacts" : [

    ],
    "building" : false,
    "description" : null,
    "displayName" : "#16",
    "duration" : 16,
    "estimatedDuration" : 16,
    "executor" : null,
    "fullDisplayName" : "DevNetBridge #16",
    "id" : "16",
    "keepLog" : false,
    "number" : 16,
    "queueId" : 2879,
    "result" : "SUCCESS",
    "timestamp" : 1473325514718,
    "url" : "http://lhhjj.srv.jhjhl.net/jenkins/job/DevNetBridge/16/",
    "builtOn" : "",
    "changeSet" : {
        "_class" : "hudson.scm.EmptyChangeLogSet",
        "items" : [

        ],
        "kind" : null
    },
    "culprits" : [

    ]
}


app.get('/', function (req, res) {
    res.send('Hello World');
});

app.put('/api/*/lights/*/state', function (req, res) {
    res.send('[{"success":{"/lights/1/state/on":true}},{"success":{"/lights/1/state/bri":100}},{"success":{"/lights/1/state/hue":22}},{"success":{"/lights/1/state/sat":255}}]');
});

app.get('/jenkins/job/mxd.client_Master/lastBuild/api/json', function (req, res) {
    res.send(jenkinsResponse);
});

app.listen(3000);