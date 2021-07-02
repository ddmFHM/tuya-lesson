const fs = require('fs/promises')

async function getUserData() {
  try {
    let res = await fs.readFile('model/user.json', 'utf-8')
    return res
  } catch (err) {
    return []
  }
}

async function writeUserData(data) {
  try {
    let res = await fs.writeFile('model/user.json', JSON.stringify(data, "", "\t"))
    return res
  } catch (err) {
    return 'error'
  }
}

function userGenerate(userData) {
  let date = new Date()
  let data = Object.assign({}, {
    role: 0,
		history: [],
		_id: Math.random().toString(36).slice(-10),
		name: "ddm",
		email: "123@qq.com",
		createdAt: date.toISOString(),
		updateAt: date.toISOString(),
		__v: 0
  }, userData)
  return data
}

exports.addUser = async function(data) {
  let userDatas = await getUserData()
  userDatas = JSON.parse(userDatas)
  data = userGenerate(data)
  userDatas.push(data)
  await writeUserData(userDatas)
  return data
}

exports.getUsers = async function() {
  let userData = await getUserData()
  userData = JSON.parse(userData)
  return userData
}

exports.login = async function() {
  
}

// async function test() {
//   let res = await addUser({
//     "role": 1,
//     "history": [],
//     "_id": "1",
//     "name": "ddm",
//     "email": "123@qq.com",
//     "createdAt": "",
//     "updateAt": "",
//     "__v": 0
//   })
//   console.log(res);
// }
// test()