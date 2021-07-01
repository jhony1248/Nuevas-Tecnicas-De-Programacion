var express = require('express');
var router = express.Router();

const { findUsers } = require('../services/Clients.service')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const users = await findUsers()
  try {
    res.status(200).json({
      msg: "Lista de usuarios",
      body: users
    })
  } catch (error) {
    res.status(500).json({
      msg: "Internal server error",
    });
  }
});

module.exports = router;
