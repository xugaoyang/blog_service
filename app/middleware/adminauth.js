'use strict';

module.exports = options => {
  return async function adminauth(ctx, next) {
    console.log('查看openId', ctx, ctx.session.openId);
    console.log('session', ctx.session);
    if (ctx.session.openId) {
      await next();
    } else {
      ctx.body = { data: '没有登陆' };
    }
  };
}
;
