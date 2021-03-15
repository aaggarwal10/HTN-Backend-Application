const { Skill, HackerSkill } = require('../models')
async function addSkill (hacker, skill) {
  return await hacker.addHackerSkill(skill)
}
async function makeSkill (skill, rating) {
  let sk = await Skill.findOne({ where: { name: skill } })
  if (!sk) {
    sk = await Skill.create({ name: skill })
  }
  const sr = await HackerSkill.create({ skill_rating: rating })
  sr.setSkill(sk)
  return sr
}
module.exports = { makeSkill, add_skill: addSkill }
