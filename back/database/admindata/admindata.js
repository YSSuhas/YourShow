const bcrypt = require('bcryptjs')

const admins = [
  {
    adminname: 'Ryuga',
    mail: 'ryuga@yourshow.com',
    password: bcrypt.hashSync('ldrago', 10),
  }, 
  {
    adminname: 'Ginga',
    mail: 'ginga@yourshow.com',
    password: bcrypt.hashSync('pegasus', 10),
  },
]

module.exports = admins