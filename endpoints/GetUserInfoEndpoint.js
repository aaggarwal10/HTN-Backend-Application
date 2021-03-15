const { Hacker, Skill, HackerSkill } = require('../models')

async function getHacker (hackerEmail) {
  return await Hacker.findOne({ raw: true, attributes: ['name', 'picture', 'company', 'email', 'phone'], where: { email: hackerEmail } })
}

async function getAllHackerSkills (hackerEmail) {
  return await HackerSkill.findAll({ raw: true, attributes: ['SkillId', 'skill_rating'], where: { HackerEmail: hackerEmail } })
}

async function getHackerSkills (hackerEmail) {
  const hackerSkillsbyId = await getAllHackerSkills(hackerEmail)
  const hackerSkills = []
  for (const hS in hackerSkillsbyId) {
    const hSkill = hackerSkillsbyId[hS]
    const skill = await Skill.findByPk(hSkill.SkillId)
    hackerSkills.push({ name: skill.name, rating: hSkill.skill_rating })
  }
  return await hackerSkills
}

async function getUserInformation (hackerEmail) {
  const hacker = await getHacker(hackerEmail)
  const skills = await getHackerSkills(hackerEmail)
  const hackerInfo = JSON.parse(JSON.stringify(hacker))
  hackerInfo.skills = skills
  return hackerInfo
}
module.exports = { getUserInformation }
