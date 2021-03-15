const fetch = require('node-fetch')
const { Hacker } = require('../models')
const { makeSkill, addSkill } = require('./create-skills')
async function addHacker (hacker) {
  return Hacker.create({ name: hacker.name, picture: hacker.picture, company: hacker.company, email: hacker.email, phone: hacker.phone })
}

fetch('https://gist.githubusercontent.com/Advait-M/e45603da554150067b5c4551a2bf4419/raw/3871267406e266e9020db019327c3dd7f0fdc72e/hacker-data-2021.json')
  .then(response => response.json())
  .then(async data => {
    for (const h in data) {
      const hacker = await addHacker(data[h])
      for (const s in data[h].skills) {
        const skill = data[h].skills[s]
        const sk = await makeSkill(skill.name, skill.rating)
        await addSkill(hacker, sk)
      }
    }
  })
  .catch(err => {
    console.log('Fetch Could Not Be DONE : ' + err)
  })

module.exports = { add_skill: addSkill, makeSkill }
