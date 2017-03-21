/* ================================================================
 * webdriver-keycode by xdf(xudafeng[at]126.com)
 *
 * first created at : Sun Aug 21 2016 11:25:44 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright  xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

'use strict';

var keycode = require('..');

describe('test', function() {
  it('should be ok', function() {
    console.log(keycode);
    keycode.should.be.ok();
  });
});
