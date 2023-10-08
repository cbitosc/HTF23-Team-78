const exp = require('express')
const RecipiesApp = exp.Router();


RecipiesApp.use(exp.json)
module.exports = RecipiesApp