
const { Hacker, Skill, HackerSkill } = require('../models')

async function getHackers () {
  return await Hacker.findAll({ raw: true, attributes: ['name', 'picture', 'company', 'email', 'phone'] })
}

async function getSkillsForHacker (hackerEmail) {
  const allSkillsbyId = await HackerSkill.findAll({ raw: true, attributes: ['SkillId', 'skill_rating'], where: { HackerEmail: hackerEmail } })
  const allSkills = []
  for (const s in allSkillsbyId) {
    const data = allSkillsbyId[s]
    await Skill.findByPk(data.SkillId).then(
      (skill) => {
        const curSkill = { name: skill.name, rating: data.skill_rating }
        allSkills.push(curSkill)
      })
      .catch((err) => {
        console.log('Database Linkage Error: ' + err)
      })
  }
  return allSkills
}
async function getAllHackers () {
  const hackerTable = await getHackers()
  const returnTable = JSON.parse(JSON.stringify(hackerTable))
  for (const h in returnTable) {
    const hacker = returnTable[h]
    const aSkills = await getSkillsForHacker(hacker.email)
    hacker.skills = aSkills
  }
  return await returnTable
}

module.exports = { getAllHackers }
