const express = require('express')
const router = express.Router()
const userRoute = require('./user.route')
const fetchBillRoute = require('./fetchBill.route')
const walletRoute = require('./wallet.route')
const rechargeRoute = require('./recharge.route')
const operatorRoute = require('./operator.route')
const dataTableRoute = require('./datatable.route')
router.get('/', (req, res) => {
    res.send(`<h3>Sorry. This site is not for public use. Please login to <a href="https://zpays.in/">zpays.in</a></h3>`)
})
router.use('/user', userRoute)
router.use('/fetchBill', fetchBillRoute)
router.use('/wallet', walletRoute)
router.use('/recharge', rechargeRoute)
router.use('/operator', operatorRoute)
router.use('/datatable', dataTableRoute)

module.exports = router