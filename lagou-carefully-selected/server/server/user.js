const user = require('../model/user')

exports.signup = async function(data) {
  return await user.findOrCreate({
    where: {
      email: data.email
    },
    defaults: {
      ...data
    }
  })
}

exports.signin = async function(email) {
  return await user.findOne({
    where: {
      email
    }
  })
}
