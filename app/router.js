module.exports = app => {
  const { router, controller } = app;
  router.get('/:id', controller.home.index);
  router.get('/pc/festival', controller.double.index);
};
