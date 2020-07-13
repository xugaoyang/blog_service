'use strict';

module.exports = app => {
  // require('./router/default')(app);
  const { router, controller, jwt } = app;
  // const adminauth = app.middleware.adminauth();
  router.get('/admin/index', controller.admin.main.index);
  router.post('/admin/checkLogin', controller.admin.main.checkLogin);
  router.get('/admin/getTypeInfo', jwt, controller.admin.main.getTypeInfo);
  router.post('/admin/addArticle', jwt, controller.admin.main.addArticle);
  router.post('/admin/updateArticle', jwt, controller.admin.main.updateArticle);
  router.get('/admin/getArticleList', jwt, controller.admin.main.getArticleList);
  router.delete('/admin/deleteArticle/:id', jwt, controller.admin.main.deleteArticle);
  router.get('/admin/getArticleById/:id', jwt, controller.admin.main.getArticleById);
};
