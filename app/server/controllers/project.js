const express = require("express");
const router = express.Router();
const  projectService = require("../services/project");
const userService = require( "../services/user");

router.get("/project/:id", (req, res) => {
   const {id} = req.params;
   const project = projectService.getById(id);
   project.createdBy = userService.getById(project.createdBy)
   
    const user = req.session.user;
    return res.render("Project", { project, user });
  });

router.get("/projects/submit", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/login");
  }
  const error = req.flash("error");
  let formData = req.flash("login_form_data");
  if (formData.length > 0) {
    formData = JSON.parse(formData[0]);
  } else {
    formData = {};
  }
  const user = req.session.user;
  return res.render("CreateProject", { error, formData, user });
});

router.post("/projects/submit", (req, res) => {
  const project = req.body;
  project.authors = project.authors
    ? project.authors.split(",")
    : project.authors;
  project.tags = project.tags ? project.tags.split(" ") : project.tags;
  project.createdBy = req.session.user.id;
  console.log(project);

  const [valid, error] = projectService.create(project);
  if (valid) {
    return res.redirect("/");
  } else {
    req.flash("error", error);
    res.redirect("/projects/submit");
  }
});

module.exports = router;
