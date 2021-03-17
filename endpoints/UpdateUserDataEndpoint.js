const { Hacker, HackerSkill } = require('../models')
const { makeSkill, addSkill } = require('../databases/create-skills')

async function deleteSkills (hackerEmail) { // Delete ALL Skills from Hacker
  HackerSkill.destroy({ where: { HackerEmail: [hackerEmail] } })
}
async function addSkills (hacker, skillList) { // add all skills in skillList to hacker
  for (const s in skillList) {
    const skill = skillList[s]
    const hSkill = await makeSkill(skill.name, skill.rating)
    hacker = await addSkill(hacker, hSkill)
  }
  return hacker
}
async function updateUser (hackerEmail, newData) { // Updater User with newData given.
  if ('skills' in newData) {
    deleteSkills(hackerEmail)
  }
  const hacker = await Hacker.findByPk(hackerEmail)
  for (const key in newData) {
    if (key === 'skills') {
      await addSkills(hacker, newData[key])
    } else {
      hacker[key] = newData[key]
    }
  }
  await hacker.save()
  return hacker.email
}

module.exports = { updateUser }
