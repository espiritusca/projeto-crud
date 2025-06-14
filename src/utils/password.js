bcrypt = require('bcrypt')

async function crypto(pwd) { //password =pwd

    const salt = await bcrypt.genSalt()
    const password = await bcrypt.hash(pwd, salt)

    return password
}

module.exports = {
    crypto,
}