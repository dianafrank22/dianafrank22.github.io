const router        = require('express').Router();
const {getProjects} = require('../apis/project');

router.get('/', getProjects,(req,res)=>{
	res.json({projects: res.projects})
})

module.exports = router;