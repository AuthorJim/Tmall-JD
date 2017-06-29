/*
 * @Author: AuthorJim 
 * @Date: 2017-06-29 13:18:54 
 * @Last Modified by: AuthorJim
 * @Last Modified time: 2017-06-29 13:43:43
 */
require('./index.css')
require('../common/nav-simple/index.css')
var _util = require('util/index.js')

$(function () {
    var type = _util.getUrlParam('type') || 'default'
    var $element = $('.' + type + '-success')
    // 显示对应的提示
    $element.show()
})