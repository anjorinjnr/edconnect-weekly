const express = require("express");
const router = express.Router();

const userService = require("../services/user");
const schoolService = require("../services/school");

router.get("/signup", (req, res) => {
  const programs = schoolService.getPrograms();
  const graduationYears = schoolService.getGradYears();
  const error = req.flash("error");

  let formData = req.flash("signup_form_data");
  if (formData.length > 0) {
    formData = JSON.parse(formData[0]);
  } else {
    formData = {};
  }
  const user = req.session.user;
  return res.render("Signup", {
    error,
    programs,
    graduationYears,
    formData,
    user,
  });
});

router.post("/signup", (req, res) => {
  const [valid, resp] = userService.create(req.body);
  if (valid) {
    req.session.user = resp;
    console.log("resp", resp);
    return res.redirect("/");
  } else {
    req.flash("error", resp);
    req.flash("signup_form_data", JSON.stringify(req.body));
    res.redirect("/signup");
  }
});

router.get("/login", (req, res) => {
  const error = req.flash("error");

  let formData = req.flash("login_form_data");
  if (formData.length > 0) {
    formData = JSON.parse(formData[0]);
  } else {
    formData = {};
  }
  const authUser = req.session.user;
  return res.render("Login", { error, formData, authUser });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const [valid, resp] = userService.authenticate(email, password);
  if (valid) {
    req.session.user = resp;
    return res.redirect("/");
  } else {
    console.log(">>>>>>", resp);
    req.flash("error", resp);
    // req.flash("signup_form_data", JSON.stringify(req.body));
    res.redirect("/login");
  }
});

module.exports = router;
