const express = require('express')
const { getAllHackers } = require('../endpoints/AllUsersEndpoint')
const { getUserInformation } = require('../endpoints/GetUserInfoEndpoint')
const { updateUser } = require('../endpoints/UpdateUserDataEndpoint')
const { Hacker } = require('../models')
const router = express.Router()

/**
 * @api {get} /users/ Get All Users Information
 * @apiName GetUsers
 * @apiGroup Users
 *
 * @apiSuccess {Object[]} users Array of user objects that make up database.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *
 *         {
 *           "name": "Eliza Wright",
 *           "picture": "http://lorempixel.com/200/200/sports/8",
 *           "company": "Slambda",
 *           "email": "elizawright@slambda.com",
 *           "phone": "+1 (913) 504-2495",
 *           "skills": [
 *             {
 *               "name": "Go",
 *               "rating": 5
 *             },
 *             {
 *               "name": "JS",
 *               "rating": 5
 *             }
 *           ]
 *         },
 *         {
 *           "name": "Jenna Luna",
 *           "picture": "http://lorempixel.com/200/200/sports/0",
 *           "company": "Veraq",
 *           "email": "jennaluna@veraq.com",
 *           "phone": "+1 (949) 580-2608",
 *           "skills": [
 *             {
 *               "name": "Android",
 *               "rating": 9
 *             },
 *             {
 *               "name": "Android",
 *               "rating": 2
 *             },
 *             {
 *               "name": "C",
 *               "rating": 7
 *             }
 *           ]
 *         }
 *     ]
 */

router.get('/', async function (req, res, next) {
  const doc = await getAllHackers()
  res.send(doc)
})

/**
 * @api {get} /users/:email Get User Information
 * @apiName GetUser
 * @apiGroup Users
 *
 * @apiParam {String} email User email
 *
 * @apiSuccess {String} name User name
 * @apiSuccess {String} picture User picture
 * @apiSuccess {String} company User company
 * @apiSuccess {String} phone User phone
 * @apiSuccess {Object[]} skills Array of skill objects belonging to user
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *     "name": "Eliza Wright",
 *     "picture": "http://lorempixel.com/200/200/sports/8",
 *     "company": "Slambda",
 *     "email": "elizawright@slambda.com",
 *     "phone": "+1 (913) 504-2495",
 *     "skills": [
 *       {
 *         "name": "Go",
 *         "rating": 5
 *       },
 *       {
 *         "name": "JS",
 *         "rating": 5
 *       }
 *     ]
 *    }
 * @apiSampleRequest https://localhost:4000
 */
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
/**
 * @api {put} /users/:userID Update User Information
 * @apiName PutUser
 * @apiGroup Users
 *
 * @apiParam {String} name Optional name of User
 * @apiParam {String} picture Optional picture of User
 * @apiParam {String} company Optional company of User
 * @apiParam {String} phone Optional phone of User
 * @apiParam {Object[]} skills Optional Array of skill objects belonging to User
 *
 * @apiSuccess {String} name Updated name of User
 * @apiSuccess {String} picture Updated picture of User
 * @apiSuccess {String} company Updated company of User
 * @apiSuccess {String} phone Updated phone of User
 * @apiSuccess {Object[]} skills Updated Array of skill objects belonging to User
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *     "name": "Anish Aggarwal",
 *     "picture": "http://lorempixel.com/200/200/sports/20",
 *     "company": "Breality",
 *     "email": "anish@anisha.ca",
 *     "phone": "+1 (999) 999-999",
 *     "skills": [
 *       {
 *         "name": "Basketball",
 *         "rating": 10
 *       },
 *       {
 *         "name": "Chess",
 *         "rating": 2
 *       }
 *     ]
 *    }
 */
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
