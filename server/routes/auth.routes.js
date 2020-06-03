const express = require('express');
const authCtrl = require('/auth/signout');



const router = express.Router()


router.post('/auth/signin',authCtrl.signin)

router.get('/auth/signout',authCtrl.signout);



module.exports = routers