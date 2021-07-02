const router = require('express').Router()

router.post('/create/:userId', async (req, res) => {
  console.log(req.body)
  res.send(
    { "_id": req.params.userId, name: req.body.name, createdAt: "", updateAt: "", __v: 0 }
  )
})

router.get('/', async (req, res) => {
  res.send([
    {
      "_id": 12,
      "name": "JS",
      "createdAt": "1231",
      "updateAt": "1231",
      "__v": 0
    },
    {
      "_id": 13,
      "name": "HTML",
      "createdAt": "1231",
      "updateAt": "1231",
      "__v": 0
    },
    {
      "_id": 14,
      "name": "CSS",
      "createdAt": "1231",
      "updateAt": "1231",
      "__v": 0
    },
  ])
})


module.exports = router

// { name: 'xxx' }
// { data: { "_id": xxx, name: "", createdAt: "", updateAt: "", __v: 0 } }
