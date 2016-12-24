/**
 * Created by yanglei on 16/12/13.
 */

var ajax = require('../tool/ajax');
var $ = require('jquery');

$('.button').on('click', function () {
    ajax.post('test.ajax', {dkdkd: 1})
        .then(function (res) {
            $('.show').val(res.name);
        });
});

