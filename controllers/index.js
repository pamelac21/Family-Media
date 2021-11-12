const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const calendarRoutes = require('./calendar-routes');
const photosRoutes = require('./photos-routes');
const todoListRoutes = require('./todo-list-routes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/calendar', calendarRoutes);
router.use('/photos', photosRoutes);
router.use('/todos', todoListRoutes)

module.exports = router;