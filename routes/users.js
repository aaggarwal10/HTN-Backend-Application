const express = require('express')
const { getAllHackers } = require('../endpoints/AllUsersEndpoint')
const { getUserInformation } = require('../endpoints/GetUserInfoEndpoint')
const { updateUser } = require('../endpoints/UpdateUserDataEndpoint')
const { Hacker } = require('../models')
const router = express.Router()

router.get('/', async function (req, res, next) {
  const doc = await getAllHackers()
  res.send(doc)
})
router.get('/:userID', async function (req, res, next) {
  const { userID } = req.params
  const hacker = await Hacker.findOne({ where: { email: userID } })
  if (hacker === null) {
    res.send('UserID is Invalid.')
  } else {
    const doc = await getUserInformation(userID)
    res.send(doc)
  }
})
router.put('/:userID', async function (req, res, next) {
  const { userID } = req.params
  const hacker = await Hacker.findOne({ where: { email: userID } })
  if (hacker === null) {
    res.send('UserID is Invalid.')
  } else {
    const hackerEmail = await updateUser(userID, req.body)
    const doc = await getUserInformation(hackerEmail)
    res.send(doc)
  }
})
module.exports = router
