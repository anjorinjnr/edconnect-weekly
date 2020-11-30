const express = require('express');
const router = express.Router();

const projectService = require('../services/project')

router.get('/', (req, res) => {
    const projects = projectService.getAll()
    const user = req.session.user;
    console.log('>>', user)
    return res.render('Home', { projects, user })
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});
module.exports = router;