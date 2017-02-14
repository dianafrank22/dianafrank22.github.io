const router        = require('express').Router();
const {getProjects} = require('../apis/projects');

router.get('/', getProjects,(req,res)=>{
	res.json({projects: res.projects})
})

module.exports = router;