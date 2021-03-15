const { getSkills } = require('../endpoints/SkillsEndpoint')
const express = require('express')

const router = express.Router()

router.get('/', async function (req, res, next) {
  const minFrequency = req.query.min_frequency || -1
  const maxFrequency = req.query.max_frequency || -1
  const doc = await getSkills(minFrequency, maxFrequency)
  res.send(doc)
})

module.exports = router
