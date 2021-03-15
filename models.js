const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('sqlite:./databases/hackathon.db', { logging: false })

const Hacker = sequelize.define('Hackers', {
  name: DataTypes.STRING,
  picture: DataTypes.STRING,
  company: DataTypes.STRING,
  email: { type: DataTypes.STRING, primaryKey: true },
  phone: DataTypes.STRING
})

const Skill = sequelize.define('Skills', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: DataTypes.STRING
})

const HackerSkill = sequelize.define('HackerSkills', {
  skill_rating: DataTypes.INTEGER
})

async function makeAssociation () {
  await Hacker.hasMany(HackerSkill)
  await HackerSkill.belongsTo(Skill)
}
async function syncDatabase () {
  return await sequelize.sync()
}

makeAssociation()
syncDatabase()
module.exports = { Hacker, Skill, HackerSkill }
