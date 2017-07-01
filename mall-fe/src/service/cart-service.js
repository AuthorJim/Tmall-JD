/*
 * @Author: AuthorJim 
 * @Date: 2017-07-01 15:41:27 
 * @Last Modified by: AuthorJim
 * @Last Modified time: 2017-07-01 17:47:21
 */

var _util = require('util/index')

var _product = {
    // 加入到购物车
    addToCart: function (productInfo, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/cart/add.do'),
            data: productInfo,
            success: resolve,
            error: reject
        })
    }
}

module.exports = _product