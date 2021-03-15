const { Skill, HackerSkill } = require('../models')

async function getAllSkills () {
  return await Skill.findAll({ raw: true, attributes: ['id', 'name'] })
}
async function getSkills (minFreq, maxFreq) {
  const allSkills = await getAllSkills()
  const skillsInRange = []
  for (const s in allSkills) {
    const skill = allSkills[s]
    const skillFreq = await HackerSkill.count({ where: { SkillId: skill.id } })
    let skillInRange = true
    if (minFreq !== -1 && skillFreq < minFreq) {
      skillInRange = false
    }
    if (maxFreq !== -1 && skillFreq > maxFreq) {
      skillInRange = false
    }
    if (skillInRange) {
      skillsInRange.push({ name: skill.name, freq: skillFreq })
    }
  }
  console.log(skillsInRange)
  return skillsInRange
}
module.exports = { getSkills }
