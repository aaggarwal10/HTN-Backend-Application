const { getSkills } = require('../endpoints/SkillsEndpoint')
const express = require('express')

const router = express.Router()

/**
 * @api {get} /skills/?min_frequency=:min_freq&max_frequency=:max_freq Get Skill in Frequency Range
 * @apiName GetSkills
 * @apiGroup Skills
 *
 * @apiParam {Number} min_freq Optional minimum bound of occurrences of skill in database.
 * @apiParam {Number} max_freq Optional maximum bound of occurrences of skill in database.
 *
 * @apiSuccess {Object[]} Array of Name-Frequency Pairs representing skills in the database.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [
 *      {
 *         "name": "Java",
 *         "frequency": 206
 *      },
 *      {
 *         "name": "iOS",
 *         "frequency": 223
 *      }
 *    ]
 */
router.get('/', async function (req, res, next) {
  const minFrequency = req.query.min_frequency || -1
  const maxFrequency = req.query.max_frequency || -1
  const doc = await getSkills(minFrequency, maxFrequency)
  res.send(doc)
})

module.exports = router
