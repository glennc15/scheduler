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
  project_data = {
      rcmProjectId: req.body.rcmProjectId,
      name: req.body.name,
      shipyardName: req.body.shipyardName,
      projectSelected: false
  };

  Project
    .findOneAndUpdate(
      {rcmProjectId: req.body.rcmProjectId},
      project_data,
      {upsert: true},
      function(err, project) {
        if (err) {
          sendJSONresponse(res, 400, err);
        } else {
          sendJSONresponse(res, 201, project);
        }
    });


    // .create({
    //   rcmProjectId: req.body.rcmProjectId,
    //   name: req.body.name,
    //   shipyardName: req.body.shipyardName,
    //   projectSelected: false
    //   }, function(err, project) {
    //     if (err) {
    //       sendJSONresponse(res, 400, err);
    //     } else {
    //       sendJSONresponse(res, 201, project);
    //     }
    // });
};


/* PUT /projects/setActiveProject/:projectid */
/* set the active project */
module.exports.projectSetActiveProject = function(req, res) {
  req.params.projectid
  if (!req.params.projectid) {
    sendJSONresponse(res, 404, {
      "message": "Not found, projectid is required"
    });
    return;
  }

  seachData = {
    _id: req.params.projectid
  };

  updateData = {
    projectSelected: true
  };

  Project
    .findOneAndUpdate(
      seachData,
      updateData,
      function(err, project) {
        if (!project) {
          sendJSONresponse(res, 404, {
            "message": "projectid not found"
          });
          return;
        } else if (err) {
          sendJSONresponse(res, 400, err);
          return;
        }
    });
};

// PUT: /projects/deselectAllProject/:projectid
/* set the active project */
module.exports.deselectAllProjects = function(req, res) {
  Project
    .updateMany({}, {projectSelected: false})
    .exec(
      function(err, project) {
        if (err) {
          sendJSONresponse(res, 400, err);
          return;
        } else {
          sendJSONresponse(res, 200, project);
        }
      });
};

/* GET a location by the id */
module.exports.projectsReadOne = function(req, res) {
  // console.log('Finding location details', req.params);
  if (req.params && req.params.projectid) {
    Project
      .findById(req.params.projectid)
      .exec(function(err, project) {
        if (!project) {
          sendJSONresponse(res, 404, {
            "message": "projectid not found"
          });
          return;
        } else if (err) {
          // console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        // console.log(project);
        sendJSONresponse(res, 200, project);
      });
  } else {
    // console.log('No projectid specified');
    sendJSONresponse(res, 404, {
      "message": "No projectid in request"
    });
  }
};


/* DELETE /api/projects/:projectid */
module.exports.projectsDeleteOne = function(req, res) {
  var projectid = req.params.projectid;
  if (projectid) {
    Project
      .findByIdAndRemove(projectid)
      .exec(
        function(err, location) {
          if (err) {
            // console.log(err);
            sendJSONresponse(res, 404, err);
            return;
          }
          // console.log("Location id " + projectid + " deleted");
          sendJSONresponse(res, 204, null);
        }
    );
  } else {
    sendJSONresponse(res, 404, {
      "message": "No projectid"
    });
  }
};
