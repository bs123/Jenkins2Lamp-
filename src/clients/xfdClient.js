var request = require('sync-request');
//var baseUrl = 'http://localhost:3000';
var baseUrl = 'http://192.168.247.253/';
var headers = {
    'Origin': baseUrl,
    'Accept-Encoding': 'gzip, deflate',
    'Upgrade-Insecure-Requests': 1,
    'user-agent': 'some-user-agent',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Cache-Control': 'max-age=0',
    'Connection': 'keep-alive',
    'Referer': baseUrl
};

module.exports = {

    login() {
        var response =  request('POST', baseUrl + 'login.html', {
            'headers': headers,
            'body': 'pw=1'
        });
        return response;
    },

    logout() {
        var response = request('GET', baseUrl + 'login.html');
        return response;
    },

    on(ctlNum) {
        //this.login();
        var response = request('POST', baseUrl, {
            'headers': headers,
            'body': 'ctl'+ ctlNum + '=1'
        });

        return response;
    },

    off(ctlNum) {
        var response = request('POST', baseUrl, {
            'headers': headers,
            'body': 'ctl'+ ctlNum + '=0'
        });

        return response;
    },  
    
    allOff() {
        var output = '';
        //var response1 = request('POST', baseUrl + 'login.html', {
        //    'headers': headers,
        //    'body': 'pw=1'
        //});
        var response = request('POST', baseUrl, {
            'headers': headers,
            'body': 'ctl'+ ctlNum + '=1'
        });

        for (var property in response) {
            output += property + ': ' + response[property] + '; ';
        }
        console.log(' : ' + output);
        return response;
    }

}