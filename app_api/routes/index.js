var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlReviews = require('../controllers/reviews');
var ctrlProjects = require('../controllers/projects');

router.get('/locations', ctrlLocations.locationsListByDistance);
router.post('/locations', ctrlLocations.locationsCreate);
router.get('/locations/:locationid', ctrlLocations.locationsReadOne);
router.put('/locations/:locationid', ctrlLocations.locationsUpdateOne);
router.delete('/locations/:locationid', ctrlLocations.locationsDeleteOne);

// reviews
router.post('/locations/:locationid/reviews', ctrlReviews.reviewsCreate);
router.get('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsReadOne);
router.put('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsUpdateOne);
router.delete('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsDeleteOne);


// projects:
router.get('/projects', ctrlProjects.projectsReadAll);
router.post('/projects', ctrlProjects.projectsCreate);
router.put('/projects/setActiveProject/:projectid', ctrlProjects.projectSetActiveProject);
router.put('/projects/deselectAllProjects', ctrlProjects.deselectAllProjects);
router.get('/projects/:projectid', ctrlProjects.projectsReadOne);
// router.put('/projects/:projectid', ctrlProjects.projectsUpdateOne);
router.delete('/projects/:projectid', ctrlProjects.projectsDeleteOne);


module.exports = router;
