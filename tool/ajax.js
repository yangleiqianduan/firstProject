
var request = require('superagent');

exports.post = function(url, data) {
    return new Promise(function (resolve, reject) {
        request
            .post(url)
            .send(data || {})
            .set('Accept', 'application/json')
            .end(function (err, res) {
                resolve(res.body.data)
            });
    })
};
