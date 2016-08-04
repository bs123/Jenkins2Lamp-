var express = require('express')
var app = express()
var jenkinsResponse = {
    "_class": "hudson.model.FreeStyleBuild",
    "actions": [{
        "_class": "hudson.model.CauseAction",
        "causes": [{
            "_class": "hudson.triggers.SCMTrigger$SCMTriggerCause",
            "shortDescription": "Build wurde durch eine SCM-Änderung ausgelöst."
        }]
    }, {}, {}, {
        "_class": "hudson.plugins.git.util.BuildData",
        "buildsByBranchName": {
            "refs/remotes/origin/master": {
                "_class": "hudson.plugins.git.util.Build",
                "buildNumber": 44,
                "buildResult": null,
                "marked": {
                    "SHA1": "sha1Dummysha1Dummysha1Dummysha1Dummy",
                    "branch": [{"SHA1": "sha1Dummysha1Dummysha1Dummysha1Dummy", "name": "refs/remotes/origin/master"}]
                },
                "revision": {
                    "SHA1": "sha1Dummysha1Dummysha1Dummysha1Dummy",
                    "branch": [{"SHA1": "sha1Dummysha1Dummysha1Dummysha1Dummy", "name": "refs/remotes/origin/master"}]
                }
            }
        },
        "lastBuiltRevision": {
            "SHA1": "sha1Dummysha1Dummysha1Dummysha1Dummy",
            "branch": [{"SHA1": "sha1Dummysha1Dummysha1Dummysha1Dummy", "name": "refs/remotes/origin/master"}]
        },
        "remoteUrls": ["git+ssh://git@lhhjj.srv.jhjhl.net/mxd-ott/mxd.client.git"],
        "scmName": ""
    }, {"_class": "hudson.plugins.git.GitTagAction"}, {}, {}],
    "artifacts": [],
    "building": false,
    "description": null,
    "displayName": "#44",
    "duration": 200034,
    "estimatedDuration": 166617,
    "executor": null,
    "fullDisplayName": "mxd.client_Master #44",
    "id": "44",
    "keepLog": false,
    "number": 44,
    "queueId": 1450,
    "result": "SUCCESS",
    "timestamp": 1470138908083,
    "url": "http://lhhjj.srv.jhjhl.net/jenkins/view/OTT_InhouseClient/job/mxd.client_Master/44/",
    "builtOn": "",
    "changeSet": {
        "_class": "hudson.plugins.git.GitChangeSetList",
        "items": [{
            "_class": "hudson.plugins.git.GitChangeSet",
            "affectedPaths": ["package.json", "src/js/components/pages/dd.js", "src/js/components/widgets/dd/ff.js", "src/js/main.js", "src/js/actions/ee.js", "src/js/stores/ee.js"],
            "commitId": "commitIdcommitIdcommitIdcommitIdcommitId",
            "timestamp": 1470041024000,
            "author": {
                "absoluteUrl": "http://lhhjj.srv.jhjhl.net/jenkins/user/Maximilian.Mustermann",
                "fullName": "Maximilian Mustermann"
            },
            "comment": "DFDMODK-885 only fetch list when not already available from\ncoverpage\n",
            "date": "2016-08-01 10:43:44 +0200",
            "id": "1234567890",
            "msg": "DFDMODK-885 only fetch list when not already available from",
            "paths": [{"editType": "edit", "file": "src/js/actions/ee.js"}, {
                "editType": "edit",
                "file": "src/js/main.js"
            }, {"editType": "edit", "file": "package.json"}, {
                "editType": "edit",
                "file": "src/js/components/pages/ff.js"
            }, {"editType": "edit", "file": "src/js/stores/ff.js"}, {
                "editType": "edit",
                "file": "src/js/components/widgets/dd/ff.js"
            }]
        }, {
            "_class": "hudson.plugins.git.GitChangeSet",
            "affectedPaths": ["src/js/main.js"],
            "commitId": "1234567890",
            "timestamp": 1470041083000,
            "author": {
                "absoluteUrl": "http://lhhjj.srv.jhjhl.net/jenkins/user/Maximilian.Mustermann",
                "fullName": "Maximilian Mustermann"
            },
            "comment": "reuse path var\n",
            "date": "2016-08-01 10:44:43 +0200",
            "id": "1234567890",
            "msg": "reuse path var",
            "paths": [{"editType": "edit", "file": "src/js/main.js"}]
        }, {
            "_class": "hudson.plugins.git.GitChangeSet",
            "affectedPaths": ["src/js/components/widgets/dd/ff.js"],
            "commitId": "1234567890",
            "timestamp": 1470041324000,
            "author": {
                "absoluteUrl": "http://lhhjj.srv.jhjhl.net/jenkins/user/Maximilian.Mustermann",
                "fullName": "Maximilian Mustermann"
            },
            "comment": "typo\n",
            "date": "2016-08-01 10:48:44 +0200",
            "id": "1234567890",
            "msg": "typo",
            "paths": [{"editType": "edit", "file": "src/js/components/widgets/dd/ff.js"}]
        }, {
            "_class": "hudson.plugins.git.GitChangeSet",
            "affectedPaths": ["src/js/main.js"],
            "commitId": "1234567890",
            "timestamp": 1470138675000,
            "author": {
                "absoluteUrl": "http://lhhjj.srv.jhjhl.net/jenkins/user/Maximilian.Mustermann",
                "fullName": "Maximilian Mustermann"
            },
            "comment": "moved comment\n",
            "date": "2016-08-02 13:51:15 +0200",
            "id": "1234567890",
            "msg": "moved comment",
            "paths": [{"editType": "edit", "file": "src/js/main.js"}]
        }],
        "kind": "git"
    },
    "culprits": [{
        "absoluteUrl": "http://lhhjj.srv.jhjhl.net/jenkins/user/Maximilian.Mustermann",
        "fullName": "Maximilian Mustermann"
    }]
}


app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/jenkins/job/mxd.client_Master/lastBuild/api/json', function (req, res) {
    res.send(jenkinsResponse);
});

app.listen(3000);