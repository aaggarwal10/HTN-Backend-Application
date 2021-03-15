const { OPEN_CREATE } = require('sqlite3')

const sqlite3 = require('sqlite3').verbose()

const DB = new sqlite3.Database('./databases/hackathon.db', OPEN_CREATE, err => {
  if (err) {
    console.log(err)
  } else {
    console.log('DB Connected.')
  }
})

DB.close()
