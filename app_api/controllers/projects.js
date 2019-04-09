var mongoose = require('mongoose');
var Project = mongoose.model('Project');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};


/* GET list of all projects */
module.exports.projectsReadAll = function(req, res) {
  Project
    .find({})
    .exec(
      function(err, projects) {
        if (err) {
          sendJSONresponse(res, 400, err);
        } else {
          sendJSONresponse(res, 200, projects);
        }
      } 
    );
};


/* POST a new project */
module.exports.projectsCreate = function(req, res) {
  Project
    .create({
      rcmProjectId: req.body.rcmProjectId,
      name: req.body.name,
      shipyardName: req.body.shipyardName
      }, function(err, project) {
        if (err) {
          sendJSONresponse(res, 400, err);
        } else {
          sendJSONresponse(res, 201, project);
        }
    });
};



// /* GET a location by the id */
// module.exports.locationsReadOne = function(req, res) {
//   console.log('Finding location details', req.params);
//   if (req.params && req.params.locationid) {
//     Loc
//       .findById(req.params.locationid)
//       .exec(function(err, location) {
//         if (!location) {
//           sendJSONresponse(res, 404, {
//             "message": "locationid not found"
//           });
//           return;
//         } else if (err) {
//           console.log(err);
//           sendJSONresponse(res, 404, err);
//           return;
//         }
//         console.log(location);
//         sendJSONresponse(res, 200, location);
//       });
//   } else {
//     console.log('No locationid specified');
//     sendJSONresponse(res, 404, {
//       "message": "No locationid in request"
//     });
//   }
// };

/* POST a new location */
/* /api/locations */
// module.exports.locationsCreate = function(req, res) {
//   console.log(req.body);
//   Loc.create({
//     name: req.body.name,
//     address: req.body.address,
//     facilities: req.body.facilities.split(","),
//     coords: [parseFloat(req.body.lng), parseFloat(req.body.lat)],
//     openingTimes: [{
//       days: req.body.days1,
//       opening: req.body.opening1,
//       closing: req.body.closing1,
//       closed: req.body.closed1,
//     }, {
//       days: req.body.days2,
//       opening: req.body.opening2,
//       closing: req.body.closing2,
//       closed: req.body.closed2,
//     }]
//   }, function(err, location) {
//     if (err) {
//       console.log(err);
//       sendJSONresponse(res, 400, err);
//     } else {
//       console.log(location);
//       sendJSONresponse(res, 201, location);
//     }
//   });
// };

/* PUT /api/locations/:locationid */
// module.exports.locationsUpdateOne = function(req, res) {
//   if (!req.params.locationid) {
//     sendJSONresponse(res, 404, {
//       "message": "Not found, locationid is required"
//     });
//     return;
//   }
//   Loc
//     .findById(req.params.locationid)
//     .select('-reviews -rating')
//     .exec(
//       function(err, location) {
//         if (!location) {
//           sendJSONresponse(res, 404, {
//             "message": "locationid not found"
//           });
//           return;
//         } else if (err) {
//           sendJSONresponse(res, 400, err);
//           return;
//         }
//         location.name = req.body.name;
//         location.address = req.body.address;
//         location.facilities = req.body.facilities.split(",");
//         location.coords = [parseFloat(req.body.lng), parseFloat(req.body.lat)];
//         location.openingTimes = [{
//           days: req.body.days1,
//           opening: req.body.opening1,
//           closing: req.body.closing1,
//           closed: req.body.closed1,
//         }, {
//           days: req.body.days2,
//           opening: req.body.opening2,
//           closing: req.body.closing2,
//           closed: req.body.closed2,
//         }];
//         location.save(function(err, location) {
//           if (err) {
//             sendJSONresponse(res, 404, err);
//           } else {
//             sendJSONresponse(res, 200, location);
//           }
//         });
//       }
//   );
// };

// /* DELETE /api/locations/:locationid */
// module.exports.locationsDeleteOne = function(req, res) {
//   var locationid = req.params.locationid;
//   if (locationid) {
//     Loc
//       .findByIdAndRemove(locationid)
//       .exec(
//         function(err, location) {
//           if (err) {
//             console.log(err);
//             sendJSONresponse(res, 404, err);
//             return;
//           }
//           console.log("Location id " + locationid + " deleted");
//           sendJSONresponse(res, 204, null);
//         }
//     );
//   } else {
//     sendJSONresponse(res, 404, {
//       "message": "No locationid"
//     });
//   }
// };
