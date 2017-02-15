const router        = require('express').Router();
const {getProjects} = require('../apis/project');

router.get('/', getProjects,(req,res)=>{
	console.log(res.projects)
	res.json({projects: res.projects})
})

module.exports = router;