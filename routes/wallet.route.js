const express = require('express')
const { walletHistory, walletDetail, allWallet, todayWallet, createOrder, addMoney, rechargeTransaction, razorpayRechargeTransaction } = require('../controllers/wallet.controller')
const { authentication, adminAuthentication, customerAuthentication } = require('../services/auth.service')
const router = express.Router()

router.post('/history/:userid', authentication, walletHistory)
router.get('/singlewallet/:walletid', authentication, walletDetail)
router.get('/allwallet', authentication, allWallet)
router.get('/allwalletToday', authentication, todayWallet)
router.get('/userwallet/:userId', authentication, allWallet)
router.get('/createOrder', authentication, createOrder)
router.post('/addMoney', authentication, addMoney)
router.post('/rechargeTransaction', authentication, rechargeTransaction)
router.post('/razorpayRechargeTransaction', authentication, razorpayRechargeTransaction)


module.exports = router